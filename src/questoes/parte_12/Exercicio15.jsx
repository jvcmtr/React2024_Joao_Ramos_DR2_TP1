import React from "react"

export default function Exercicio15() {
  const [count, setCount] = React.useState(0)

  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 15: Crie uma aplicação React que utilize state para gerenciar um contador simples que pode ser incrementado e decrementado com botões.</p>
      <div style={exercicio15}> 
        <button style={bStyle} onClick={()=> setCount(count+1 )}> + 1 </button>
        <span> contagem atual : {count} </span>
      </div> 
    </div>
  )
}
const exercicio15 = {
  color: '#fff',
  padding:'15px',
}
const bStyle = {
  backgroundColor:"#fff",
  color: "#000000",
  padding: '3px',
  width: '50px'
}
