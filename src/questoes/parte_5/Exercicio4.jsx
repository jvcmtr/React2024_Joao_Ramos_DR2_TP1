
export default function Exercicio4() {
  let nome = "Cicero"
  const idade = '23'
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 4: Em uma aplicação React, declare uma variável let para o nome de um usuário e uma variável const para a idade do usuário, e exiba esses valores na página web.</p>
      <div style={exercicio4}> 
        <div>
          <span style={propStyle}> Nome : </span>
          <span style={dtStyle}>{nome}</span>
        </div>
        <div>
          <span style={propStyle}> Idade : </span>
          <span style={dtStyle}>{idade} </span>
        </div>
      </div>
    </div>
  )
}

const exercicio4 = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'start',
  color: '#fff',
  padding:'5px',
}
const dtStyle={
  fontSize:'18px',
  fontWeight: '100'
}
const propStyle = {
  fontSize:'13px',
  fontWeight: '800',
  color: "#ffffffaa"
}