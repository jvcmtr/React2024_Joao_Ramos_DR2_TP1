
export default function Exercicio5() {
  const user = {
    nome : "Cicero",
    idade : 23,
    deseja_receber_notificacoes: false
  }
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 5: Crie uma aplicação React que utilize valores primitivos (números, strings, booleans) para criar um perfil de usuário e exibi-lo na página.</p>
      <div style={exercicio5}> 
        {
          Object.keys(user).map((key, i) =>{
            return(
            <div key={i}>
              <span> 
                <b>{key} : </b> <i> { String(user[key]) }</i>
              </span>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

const exercicio5 = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'start',
  color: '#fff',
  padding:'5px',
}