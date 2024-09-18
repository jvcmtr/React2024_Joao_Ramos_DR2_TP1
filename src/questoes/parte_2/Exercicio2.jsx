export default function Exercicio2() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 2: Crie uma aplicação React que exiba uma página web com um título "Histórico do ReactJs" e uma linha do tempo simples utilizando elementos HTML para destacar os marcos importantes na história do React.</p>
      <div style={exercicio2}> 
          {
            data.map((dt, key) =>{
              return (
                <div>
                  <h3 style={yearStyle}>
                    {dt.y}
                  </h3>
                  <span style={entryStyle}>
                    {dt.desc} 
                  </span> 
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

const data = [
  { y: '2013', desc: 'Criação do React JS' },
  { y: '2015', desc: 'Criação do React Native' },
  { y: '2018', desc: 'Introdução de Hooks com o React 16' },
  { y: 'Hoje', desc: 'React é o framework js mais utilizado' },
];

const exercicio2 = {
  display:'flex',
  flexDirection: 'column',
  padding: "10px",
  gap:'2px',
  alignItems: 'start',
  color:'#fff',
  textAlign: 'left',
}

const entryStyle = {
  margin: '0px',
  padding:'0px',
  textDecoration: "italic"
}
const yearStyle = {
  margin: '0px',
  padding:'0px',
    fontWeight: '300',
}

