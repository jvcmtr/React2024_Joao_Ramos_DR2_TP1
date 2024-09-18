
export default function Exercicio8() {
  let horas = new Date().getHours()
  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 8: Crie uma aplicação React que utilize condicionais para exibir uma mensagem "Bom dia", "Boa tarde" ou "Boa noite" com base na hora atual.</p>
      <div style={exercicio8}> 
        <b>
          { 
            horas>6 && horas<12?
              "Bom dia"
            :horas>=12 && horas<18?
              "Boa Tarde"
              :"Boa Noite"
          }
        </b>
      </div>
    </div>
  )
}
const exercicio8 = {
  textAlign: 'center',
  color: '#fff',
  padding:'10px'
}
