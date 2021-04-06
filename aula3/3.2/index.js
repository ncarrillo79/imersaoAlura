// alert - document.write - console.log
var numeroSecreto = Math.floor(Math.random() * (Math.floor(10 - Math.ceil(0) + 1))) + 1
var tentativas = 2

document.getElementById("testar").onclick = function (e) {
  chute = parseInt(document.getElementById("chute").value)
  e.preventDefault();
  if (tentativas > 0) {
    if (numeroSecreto == chute) {
      var resultado = "Acertou parabéns você é muito bom"
      tentativas = 0
    } else if (chute > numeroSecreto) {
      var resultado = "O número secreto é menor. Você ainda tem " + tentativas + " tentativas"
      tentativas = tentativas - 1
    } else if (chute < numeroSecreto) {
      var resultado = "O número secreto é maior. Você ainda tem " + tentativas + " tentativas"
      tentativas = tentativas - 1
    }
    document.getElementById("veracidade").innerHTML = resultado
  } else {
    var resultado = "Suas tentativas acabaram que pena. O número secreto era " + numeroSecreto
    document.getElementById("veracidade").innerHTML = resultado
  }
}