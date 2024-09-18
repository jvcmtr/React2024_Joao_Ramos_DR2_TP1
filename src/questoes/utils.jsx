export const CodeBlock = (props) =>{
    return (
        <div style={codeContainer}>
            {
                props.lines.map(line => (
                    <p style={code}>
                        {countTabs(line).map(i => ( <span>&emsp;</span>) )}
                        {line}
                    </p>
                ))
            }
        </div>
    )
}

function countTabs(str) { // Função feita com ajuda de Inteligencia Artificial
    return (str.match(/\t/g) || []);
}
const code = {
    fontFamily: 'monospace',
    margin: "0px",
    borderBottom: '1px solid #ffffff20',
    color:'#fff'
  }
const codeContainer = {
    backgroundColor: "#00000040",
    width:'fit-content', 
    marginLeft:'10px',
    padding: '20px',
    border: '1px solid #ffffffaa',
    borderWidth: "1px",
    borderRadius: '5px',
    borderColor: "#ffffff",
  }