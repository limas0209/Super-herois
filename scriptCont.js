let data7 = new Date()
let dia =("O" +data7.getDate()).slice(0-2)
let mes = data7.getMonth()
let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
let ano = data7 .getFullYear()
let mensagem = dia + " de " +meses[mes]+ " de " +ano


let msg = document.getElementById('msg')
msg.innerHTML = mensagem

function validar(){
    let nome = document.getElementById("nome").value
    let telefone = document.getElementById("telefone").value
    let email = document.getElementById("email").value

    if(nome == "" && telefone == "" && email == ""){
        alert("PREENCHA TODOS OS CAMPOS")
    }else{
        alert("ACESSO PERMITIDO")
        window.open('enviado.html')
    }
}