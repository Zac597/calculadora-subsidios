const salario = document.querySelector('#send')
const back = document.querySelector('#back')

back.addEventListener("click", () => {
  
})

  salario.addEventListener("click", function(e) {
  e.preventDefault();

  const meses = document.querySelector('#meses')  
  const salario = document.querySelector("#salario")
  const dias = document.querySelector('#dias')
  const vSalario = salario.value
  const vMeses = meses.value

  function calcFerias() {
    const vHora = vSalario / 22
    const resultado = vHora * vMeses
    return resultado.toFixed(2)
  }

  function calcNatal() {
    const resultado = (vSalario / 365) * (365 - dias)
  
    return resultado.toFixed(2)
  }
  
  document.querySelector('#resultado').textContent = `Você tem direito a receber um total de \n${calcFerias()}€`

  // console.log(calcNatal())

})