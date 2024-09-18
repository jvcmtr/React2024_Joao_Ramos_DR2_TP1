
export default function Exercicio7() {
  const nome = "Rodrigo"
  const hora = new Date().getHours()
  const minuto = new Date().getMinutes()

  return (
    <div className="ex_container">
      <p className="enunciado"> Exercício 7: Crie uma aplicação React que utilize Template Strings para exibir uma mensagem de boas-vindas personalizada para o usuário com base no nome e horário atual.</p>
      <div style={exercicio7}> 
        <p> {`Bem vindo ${nome}. Agora são: ${hora}:${minuto}`}</p>
      </div>
    </div>
  )
}
const exercicio7 = {
  textAlign: 'center',
  color: '#fff'
}
