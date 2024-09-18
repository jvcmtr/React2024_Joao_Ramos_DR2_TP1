
export default function Exercicio9() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 9: Crie uma aplicação React que utilize um loop para renderizar uma lista de tarefas a partir de um array de strings.</p>
      <div style={exercicio9}> 
        <ul>
          {
            tarefas.map(item => (
              <li>
                {item}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
const exercicio9 = {
  color: '#fff',
  padding:'10px'
}
const tarefas = [
  "Lavar o cachorro",
  "Passear com a louça",
  "Ir ao Livro",
  "Terminar o mercado"
]
