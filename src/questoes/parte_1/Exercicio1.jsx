
export default function Exercicio1() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 1: Crie uma aplicação React que exiba uma página web simples com um título "O que é React" e um parágrafo explicando o que é React.</p>
      <div style={exercicio1}> 
        <h1 style={title}> O que é React ?</h1>
        <p> 
          React é uma biblioteca que nos permite renderizar objetos {'('}chamados componentes{')'} na 
          tela dinamicamente utilizando JavaScript, Usando o padrão de DOM virtual
          para otimizar a atualização dos componentes. Estes conponentes são poderosos por conta da sua
          reusabilidade, dinamicidade, capacidade de manejar estado.
        </p>
      </div>
    </div>
  )
}


const title = {

}
const description = {

}
const exercicio1 = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  color: '#fff'
}