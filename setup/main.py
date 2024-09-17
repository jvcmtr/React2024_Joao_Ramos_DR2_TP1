from utils import ler_arquivo, escrever_arquivo
from templateJS import default_js, app_js, p_js , p_end

n_parte = 0 # Numero da secção atual
path_parte = ""
parte_import = ""
parte_ex = [] # Exercicios de cada secção
partes = [] # Numero de secções

_PATH = './src/'
def _path(str):
  global _PATH
  return _PATH + str


def open_parte(line):
  global parte, path_parte, parte_ex, partes
  try:
    parte = int(line[:2].strip())
    partes.append(parte)
    path_parte = _path(f"questoes/parte_{parte}/Parte{parte}.jsx")
    parte_ex = []
    js = p_js\
    .replace("@COMPONENT", f"Parte{parte}")\
    .replace("@ENUNCIADO", line)

    escrever_arquivo(path_parte, js)

  except Exception:
    print(f"@@@ ERRO {[parte, path_parte, parte_ex, partes]} \t\t linha : {line[:10]}")


def close_parte():
  global n_parte, path_parte, parte_import, p_end
  if (n_parte == 0):
    return

  p_str = ler_arquivo(path_parte)
  p_import = ""
  p_comp = ""
  for i in parte_ex:
    p_imp = p_imp + f"import Exercicio{i} from './Exercicio{i}.jsx'\n"
    p_comp = p_comp + f"<Exercicio{i} />"

  js = p_imp + p_str + p_comp + p_end
  escrever_arquivo(path_parte, js)



def get_exercicio_info(line):
  n = line.replace("Exercício ", "").replace(":", " ")[:2].strip()
  path = f"questoes/parte_{parte}/Exercicio{n}.jsx"

  js = default_js \
  .replace("@COMPONENT", f"Exercicio{n}" ) \
  .replace("@ENUNCIADO", line) \
  .replace("@CLASS", f'exercicio{n}')

  return (n, path, js)





def escrever_app():
  global partes  
  s = "import './App.css' \n"
  for i in partes:
    s = s + f"import Parte{i} from './questoes/parte_{i}/Parte{i}';\n"

  s = s + "\n" + app_js
  s = s + "<h1 class='title'> JOAO CICERO DR2 TP1</h1>"
  for i in partes:
    s = s + f"<Parte{i}></Parte{i}>\n"

  s = s + p_end
  escrever_arquivo('./App.jsx', s)





def main():
  global n_parte, default_js, path_parte
  a = ler_arquivo('./setup/enunciado.txt')

  for line in a.split("\n"):
    if (("Exercício" not in line) and (len(line) > 2)):
      close_parte()
      open_parte(line)

    if line.startswith("Exercício"):
      (n, path, js) = get_exercicio_info(line)
      escrever_arquivo(path, js)
      parte_ex.append(n)

  close_parte()
  escrever_app()


if __name__ == '__main__':
  main()
