import { CodeBlock } from "../utils";

export default function Exercicio10() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 10: Crie uma aplicação React que declare uma função para calcular a soma de dois números e exiba o resultado na página.</p>
      <div style={exercicio10}> 
        <CodeBlock lines ={
          "function soma(a, b){   \n\treturn a+b;    \n}".split("\n")}/>
        1 + 2 = {soma(1, 2)}
      </div>
    </div>
  )
}
function soma(a, b){
  return a+b;
}

const exercicio10 = {
  display: 'flex',
  flexDirection: 'column',
  color: '#fff',
  gap:'10px',
  padding:'15px',
}
const code = {
  fontFamily: 'monospace',
  margin: "0px",
  borderBottom: '1px solid #ffffff20',
  color:'#fff'
}
const codeContainer = {
  backgroundColor: "#00000040",
  maxWidth:'50%', 
  marginLeft:'10px',
  padding: '20px',
  border: '1px solid #ffffffaa',
  borderWidth: "5px",
  borderRadius: '5px',
  borderColor: "#ffffff",
}
