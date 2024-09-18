import { CodeBlock } from "../utils";

export default function Exercicio13() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 13: Crie uma aplicação React que utilize uma Arrow Function para verificar se um número é par ou ímpar e exiba o resultado na página.</p>
      <div class="exercicio13">
        <CodeBlock lines={["(a) => a%2 == 0;"]}/>      
         <span>1 {par(1)? "não": ""} é par </span>     
         <span>2 {par(2)? "não": ""} é par </span>
      </div>
    </div>
  )
}

const par = (a) => a%2 == 0;

const exercicio12 = {
  display: 'flex',
  flexDirection: 'column',
  color: '#fff',
  gap:'10px',
  padding:'15px',
}