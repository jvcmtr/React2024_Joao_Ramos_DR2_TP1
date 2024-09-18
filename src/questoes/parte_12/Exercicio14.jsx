import React from "react"


export default function Exercicio14() {
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 14: Crie uma aplicação React que renderize dinamicamente um componente de "Card" para cada item em um array de objetos (por exemplo, produtos em uma loja online).</p>
      <div class="exercicio14"> 
        {produtos.map(i => <Card data={i}/>)}

      </div>
    </div>
  )
}


const produtos = [
  {
    "nome": "Porta Copo",
    "preco": 29.99,
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8FPXjBXng4y8aqL-2BzZZsRreQfAd3Bxlw&s"
   },
  {
      "nome": "Jogo de Porcelana",
      "preco": 249.99,
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-ul0kJ4Sy8L6HtpNhYGZoTIO7oIGgg1eMA&s"
  },
  {
      "nome": "Almofada Mandala",
      "preco": 19.99,
      "img": "https://www.artesintonia.com.br/cdn/shop/files/H115-3-almofada-indiana-futton-quadrado-bordado-artesanato-02.jpg?v=1693461732"
  },
]


const Card = (props) =>{
  const [hover, setHover] = React.useState(false)
  return(
    <div 
      style={cardStyle(props.data.img, hover)} 
      onMouseEnter={()=>setHover(true)} 
      onMouseLeave={()=>setHover(false)}>
      
      <span style={textStyle(hover)}> {props.data.nome} </span>
      
      <span style={{fontWeight:'bold', ...textStyle(hover)}}> {props.data.preco} </span>
    
    </div>
  )
}
const cardStyle =(img, hover) => {
  return{
    backgroundImage: hover?
      `linear-gradient( #000000a0, #000), url('${img}')` 
      : `linear-gradient( #00000000, #00000040), url('${img}')` ,
    margin: hover? '10px': '5px',
    width:'100px',
    height: '100px',
    transitionDuration: '0.5s',
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    textAlign:'center',
    flexDirection: 'column',
    justifyContent: 'end'
  }
}
  const textStyle = (hover)=>{
    return{
      color: hover? "#fff": "#00000000",
      marginBottom: hover? "5px": "-10px" ,
      transitionDuration: '0.7s',
    }
  }
