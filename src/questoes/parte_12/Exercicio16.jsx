export default function Exercicio16() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 16: Crie uma aplicação React que utilize props para passar dados de um componente pai para um componente filho e renderize essas informações na página.</p>
      <div style={exercicio16}>
        <Filho data="meus dados" />
      </div>
    </div>
  )
}
const exercicio16 = {
  color: '#fff',
  padding:'15px',
}
const Filho = (props) => <p>{props.data}</p>
