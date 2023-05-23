window.addEventListener("DOMContentLoaded", aplicaBordasGuias)

function aplicaBordasGuias() {
  const elementosParaBordas = document.querySelectorAll(".border")

  elementosParaBordas.forEach(async elemento => {
    const cor = await gerarCorAleatoria();
    elemento.style.border = `1px solid ${cor}`
  })
}
function gerarCorAleatoria() {
  var red = Math.floor(Math.random() * 257)
  var green = Math.floor(Math.random() * 257)
  var blue = Math.floor(Math.random() * 257)

  return "rgb(" + red + ", " + green + ", " + blue + ")";
}