var carta1 = {
  nome:"Sandslash",
  atributos: {
    Ataque:95,
    Defesa:70,
    Magia:75
  }
}

var carta2 = {
  nome:"Scyther",
  atributos: {
    Ataque:80,
    Defesa:80,
    Magia:85
  }
}

var carta3 = {
  nome:"Hitmonlee",
  atributos: {
    Ataque:72,
    Defesa:62,
    Magia:87 
  }
}

var carta4 = {
  nome:"Bulbasaur",
  atributos: {
    Ataque:70,
    Defesa:40,
    Magia:75
  }
}

var carta5 = {
  nome:"Squirtle",
  atributos: {
    Ataque:65,
    Defesa:55,
    Magia:95
  }
}

var carta6 = {
  nome:"Golduck",
  atributos: {
    Ataque:95,
    Defesa:78,
    Magia:91 
  }
}

 var carta7 = {
  nome:"Pikachu",
  atributos: {
    Ataque:88,
    Defesa:62,
    Magia:92 
  }
}
 
  var carta8 = {
  nome:"Charizard",
  atributos: {
    Ataque:84,
    Defesa:72,
    Magia:98 
  }
}
   var carta9 = {
  nome:"Nidoqueen",
  atributos: {
    Ataque:90,
    Defesa:87,
    Magia:76 
  }
}
    var carta10 = {
  nome:"Rhyhorn",
  atributos: {
    Ataque:85,
    Defesa:92,
    Magia:65 
  }
}
  var carta11 = {
  nome:"Vaporeon",
  atributos: {
    Ataque:75,
    Defesa:60,
    Magia:84 
  }
} 

  var carta12 = {
  nome:"Venusaur",
  atributos: {
    Ataque:82,
    Defesa:83,
    Magia:97 
  }
}
  var carta13 = {
  nome:"Mewtwo",
  atributos: {
    Ataque:100,
    Defesa:90,
    Magia:98 
  }
}

  
  
var cardPc
var cardPlayer
var cards = [carta1, carta2, carta3,carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12, carta13]

function sortearCarta(){
  var numerocardPc = parseInt(Math.random() * 13)
  cardPc = cards[numerocardPc]
  
  var numerocardPlayer = parseInt(Math.random() * 13)
  while (numerocardPlayer == numerocardPc){
    numerocardPlayer = parseInt(Math.random() * 13)
  }
  cardPlayer = cards[numerocardPlayer]
  console.log(cardPlayer)
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibirOpcoes()
}

function exibirOpcoes() {
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ""
  for (var atributo in cardPlayer.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
  }
  opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado(){
  var radioAtributo = document.getElementsByName('atributo')
  for (var i = 0; i < radioAtributo.length; i++){
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value
    }
  }
}

function jogar(){
  var atributoSelecionado = obtemAtributoSelecionado()
  
  if (cardPlayer.atributos[atributoSelecionado] > cardPc.atributos[atributoSelecionado]){
    alert(
      'Parabéns!',
      'Seu Pokémon é mais Forte!',
      'success'
)
  } else if (cardPlayer.atributos[atributoSelecionado] < cardPc.atributos[atributoSelecionado]){
    alert(
    'Essa não, seu Pokémon Perdeu!',
    'O Pokémon Oponente é Mais forte! ',
    'error'
)
  } else {
    alert(
    'Tivemos um Empate!',
    'Ambos os Pokémons são Muito Poderosos !',
    'warning'
)
  }
  console.log(cardPc)
}
 