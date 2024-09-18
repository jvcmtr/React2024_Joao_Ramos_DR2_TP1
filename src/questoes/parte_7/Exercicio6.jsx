
export default function Exercicio6() {
  const livro = {
    titulo :" O Sonho de um Homem Ridiculo",
    autor: "Dostoyevsky",
    ano: "1877"
  }
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 6: Crie uma aplicação React que utilize um objeto para armazenar as informações de um livro (título, autor, ano) e um array para listar capítulos. Exiba essas informações na página web.</p>
      <div style={exercicio6}>
      {
          Object.keys(livro).map((key, i) =>{
            return(
            <div key={i}>
              <span> 
                <b>{key} : </b> <i> { String(livro[key]) }</i>
              </span>
            </div>
            )
          })
        }  
      </div>
    </div>
  )
}
const exercicio6 = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'start',
  color: '#fff',
  padding:'5px',
}
