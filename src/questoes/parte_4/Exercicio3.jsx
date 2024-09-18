
export default function Exercicio3() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 3: Crie uma nova aplicação React no Repl.it e configure-a para exibir "Hello, React!" na tela inicial.</p>
      <div style={exercicio3}> 
        <p>
          Não utilizamos mais o repplit, mas podemos criar uma nova aplicação react utilizando o comando <span style={code}>npx create-react-app nome_do_app</span> pelo terminal
        </p>
        <b style={{textAlign:'center'}}> Hello React</b>
      </div>
    </div>
  )
}
const exercicio3 = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  color: '#fff',
  padding:'5px',
}
const code = {
  backgroundColor: "#00000040",
  fontFamily: 'monospace'
}