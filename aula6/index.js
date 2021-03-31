var jogador1 = {
    nome:"jogador1",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
  }
  
  var jogador2 = {
    nome:"jogador2",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
  }
  
  jogador1.pontos = calculaPontos(jogador1)
  jogador2.pontos = calculaPontos(jogador2)
  
  function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
  }
  
  var jogadores = [jogador1, jogador2]
  
  exibirJogadoresNaTela(jogadores) 
  
  function exibirJogadoresNaTela(jogadores){
    var html = ""
    for(var i = 0; i < jogadores.length; i++){
      html += "<tr><td>" + jogadores[i].nome + "</td>"
      html += "<td>" + jogadores[i].vitorias + "</td>"
      html += "<td>" + jogadores[i].empates + "</td>"
      html += "<td>" + jogadores[i].derrotas + "</td>"
      html += "<td>" + jogadores[i].pontos + "</td>"
      html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
      html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
      html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    if (i == 0) {
      html += "<td td rowspan='2'><button class='btnResetar' onClick='Resetar()'>Resetar</button></td></tr>"
      }
    }
   
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
    
    }
  function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  function Resetar(){
    for(i=0;i<jogadores.length;i++){
      jogadores[i].vitorias = 0
      jogadores[i].derrotas = 0
      jogadores[i].empates = 0
      jogadores[i].pontos = 0
    exibirJogadoresNaTela(jogadores)
    }
  }
  