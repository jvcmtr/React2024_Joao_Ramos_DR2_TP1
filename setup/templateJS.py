app_js= """
export default function App() {
return (
  <div className="app">
"""

default_js = """
export default function @COMPONENT() {
  return (
    <div className="ex_container">
      <p className="enunciado"> @ENUNCIADO</p>
      <div class="@CLASS"> </div>
    </div>
  )
}
"""

p_js = """
export default function @COMPONENT() {
return (
  <div className="parte_container">
    <h3 className="parte"> @ENUNCIADO</h3>
"""

p_end = """
  </div>
)
}
"""