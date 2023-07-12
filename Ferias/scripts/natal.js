const salario = document.querySelector('#send')

  salario.addEventListener("click", function(e) {
  e.preventDefault();

  const salario = document.querySelector("#salario")
  const dias = document.querySelector('#dias')
  const vSalario = salario.value
  const vDias = dias.value

  function calcNatal() {

    const resultado = (vSalario / 365) * (365 - vDias)

    return resultado.toFixed(2)
  }

  document.querySelector('#resultado').textContent = `Você tem direito a receber um total de \n${calcNatal()}€`

  console.log(calcNatal())

})