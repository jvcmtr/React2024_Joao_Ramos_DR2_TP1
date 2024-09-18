import { CodeBlock } from "../utils"


export default function Exercicio11() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 11: Crie uma aplicação React que declare uma função para converter uma temperatura de Celsius para Fahrenheit e exiba o resultado na página.</p>
      <div style={exercicio11}> 
        <CodeBlock lines={"function celciusToFerenhight(c){\n\treturn (c * 1.8) + 32;  \n}".split('\n')} />
        100 ºC = {celciusToFerenhight(100)} °F
      </div>
    </div>
  )
}

function celciusToFerenhight(c){
  return (c * 1.8) + 32
}

const exercicio11 = {
  display: 'flex',
  flexDirection: 'column',
  color: '#fff',
  gap:'10px',
  padding:'15px',
}