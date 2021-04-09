var cartaFerro = {
    nome: 'Homem de Ferro',
    imagem: 'https://sm.ign.com/ign_pt/screenshot/default/e40a90221a3d79bc2b54f15b845fdfb3_jhkv.jpg',
    atributos:{   
    Habilidades: 2,
    Resistência: 5,
    Equipamento: 5
    }
}

var cartaCapitao = {
    nome: 'Capitão América',
    imagem: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/09/cropped-CAptain-America-1.jpg',
    atributos:{
        Habilidades: 6,
        Resistência: 3,
        Equipamento: 2
    }
}

var cartaThor = {
    nome: 'Thor',
    imagem: 'https://img.elo7.com.br/product/zoom/1D6C65A/painel-thor-banner-festa-thor-vingadores-baner-thor.jpg',
    atributos:{
        Habilidades: 3,
        Resistência: 6,
        Equipamento: 3
    }
}

var cartaHulk = {
    nome: "Hulk",
    imagem: "https://infoprodutos.net.br/wp-content/uploads/2021/02/portal-de-series-e-filmes-1.jpg",
    atributos: {
        Habilidades: 4,
        Resistência: 6,
        Equipamento: 1
    }
}

var cartaNick = {
    nome: "Nick Fury",
    imagem: "https://assets.b9.com.br/wp-content/uploads/2020/09/1529317045-nick-fury-samuel-l-jackson-mcu.jpg",
    atributos: {   
        Habilidades: 4,
        Resistência: 1,
        Equipamento: 6
    }
}

var cartaNatasha = {
    nome: "Viúva Negra",
    imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/11/scarlett-johansson-black-widow-4k-new-0s-1600x1200-1.jpg",
    atributos: {
        Habilidades: 6,
        Resistência: 1,
        Equipamento: 4
    }
}

var cartaGaviao = {
    nome: "Gavião Arqueiro",
    imagem: "https://3.bp.blogspot.com/-b3cMb4HocKI/XLcYFSwnoeI/AAAAAAAAfBU/_66nrd8geVkBJyws_crvbbpcD-JT_PQLgCLcBGAs/s1600/Marvel%2527s%2BAvengers%2B-%2BAge%2BOf%2BUltron%2B%25288%2529.jpg",
    atributos: {
        Habilidades: 5,
        Resistência: 1,
        Equipamento: 5
    }
}

var cartaMarvel = {
    nome: "Capitã Marvel",
    imagem: "https://aloalobahia.com/images/p/capit%C3%A3_marvel_alo_alo_bahia.jpg",
    atributos: {
        Habilidades: 6,
        Resistência: 5,
        Equipamento: 1
    }
}

var cartaHill = {
    nome: "Agente Hill",
    imagem: "https://images7.alphacoders.com/673/thumb-1920-673850.jpg",
    atributos: {
        Habilidades: 4,
        Resistência: 1,
        Equipamento: 5
    }
}

var cartaLoki = {
    nome: "Loki",
    imagem: "https://www.einerd.com.br/wp-content/uploads/2019/04/loki-890x501.jpg",
    atributos: {
        Habilidades: 6,
        Resistência: 5,
        Equipamento: 5
    }
}

var cartaSoldado = {
    nome: "Soldado Invernal",
    imagem: "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/04/legiao_bMOtypzmSHJo.jpg.jpeg",
    atributos: {
        Habilidades: 3,
        Resistência: 3,
        Equipamento: 3
    }
}

var cartaWanda = {
    nome: "Feiticeira Escarlate",
    imagem: "https://img.quizur.com/f/img5c858604de10b9.70490857.jpeg?lastEdited=1552254478",
    atributos: {
        Habilidades: 6,
        Resistência: 6,
        Equipamento: 1
    }
}

var cartaPantera = {
    nome: "Pantera Negra",
    imagem: "https://cosplace.com.br/wp-content/uploads/2020/11/Pantera-Negra.jpg",
    atributos: {
        Habilidades: 5,
        Resistência: 6,
        Equipamento: 2
    }
}

var cartaVespa = {
    nome: "Vespa",
    imagem: "https://geeksinaction.com.br/wp-content/uploads/2018/05/thumb_homem-formiga-vespa-poster-1-752x440.jpg",
    atributos: {
        Habilidades: 4,
        Resistência: 4,
        Equipamento: 2
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaFerro, cartaCapitao, cartaThor, cartaHulk, cartaNick, cartaNatasha, cartaGaviao, cartaMarvel, cartaHill, cartaLoki, cartaSoldado, cartaWanda, cartaPantera, cartaVespa]
    
var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeCartas()

function atualizaQuantidadeCartas(){
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar(){
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"

    divPlacar.innerHTML = html
}

function sortearCarta(){
var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1) //Retira carta 
 
var numeroCartaJogador = parseInt(Math.random() * cartas.length) //cartas.length pega já a quantidade no array sem precisar atualizar
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1) 

    document.getElementById('btnSortear').disabled = true // habilitar e desabilitar botões
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador(){
    var divCartaJogador  = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"
    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'

}

function obtemAtributoSelecionado(){
    var radioAtributo = document.getElementsByName('atributo')
    for(var i = 0; i < radioAtributo.length; i++){
        if(radioAtributo[i].checked){
            return radioAtributo[i].value
        }
    }
}

function jogar(){
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        resultado.style.backgroundColor = '#2bff1c';
        pontosJogador++
        
    }else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        resultado.style.backgroundColor = '#ff0000';
        pontosMaquina++
    }else if(cartaJogador.atributos[atributoSelecionado] == cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = '<p class="resultado-final">Empatou</p>'
        resultado.style.backgroundColor = '#000';

    }

    if(cartas.length == 0){
        alert("Fim de Jogo!")
        if(pontosJogador > pontosMaquina){
            htmlResultado = '<p class="resultado-final">Parabéns! Você ganhou o jogo</p>'
            resultado.style.backgroundColor = '#2bff1c';
        }else if(pontosMaquina > pontosJogador){
            htmlResultado = '<p class="resultado-final">Não foi dessa vez!</p>' 
            resultado.style.backgroundColor = '#ff0000'; 
        }else{
            htmlResultado = '<p class="resultado-final">Jogo empatou.</p>'
            resultado.style.backgroundColor = '#000';
        }
    }else{
        document.getElementById('btnProximaRodada').disabled = false 
    }
  
    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeCartas()
}


function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div><div id="carta-maquina" class="carta"></div>`
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
}

