alert("Seja bem-vindo")

var imagens = [
    'imagens/justice.png',
    'imagens/avengers.jpg',
    'imagens/guardians.jpg',
    'imagens/theboys.jpg'
];

var Index=0
var time = 4000

function slideShow(){
    document.getElementById('img').src=imagens[Index];
    Index++;
    if (Index == imagens.length)[Index=0];
    setTimeout('slideShow()', time)
};

slideShow()


let data7 = new Date()
let dia =("O" +data7.getDate()).slice(0-2)
let mes = data7.getMonth()
let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
let ano = data7 .getFullYear()
let mensagem = dia + " de " +meses[mes]+ " de " +ano


let msg = document.getElementById('msg')
msg.innerHTML = mensagem

