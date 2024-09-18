import { CodeBlock } from "../utils"

export default function Exercicio12() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 12: Crie uma aplicação React que utilize uma Arrow Function para calcular a diferença entre dois números e exiba o resultado na página.</p>
      <div style={exercicio12}> 
        <CodeBlock lines={["(a, b) => a-b;"]}/>      
        2 - 1 = {sub(2, 1)}
      </div>
    </div>
  )
}

const sub = (a, b) => a-b;

const exercicio12 = {
  display: 'flex',
  flexDirection: 'column',
  color: '#fff',
  gap:'10px',
  padding:'15px',
}
