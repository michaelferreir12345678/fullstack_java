const form = document.getElementById("form-numero")

const numberA = document.getElementById("numberA")
const numberB = document.getElementById("numberB")

let eMaior = false
function numeroMaior (a,b){
    if (b > a){
        return true
    } else {
        return false
    };
};

form.addEventListener('submit', function(e){
    e.preventDefault();

    // Mensagem de erro ou sucesso sumir no momento em que coloco outros numero
    const mensagemDeSucesso = document.querySelector(".sucess-message");
    const mensagemError = document.querySelector(".error-message");
    mensagemDeSucesso.style.display = ""
    mensagemError.style.display = ""

    // Conversao do number em float
    let number1 = parseFloat(numberA.value)
    let number2 = parseFloat(numberB.value)

    // Mensagens que irao aparecer na tela
    sucessMessage = `Tudo certo, o número ${number2} é maior que o ${number1}. Parabéns!!`
    erroMessage = `Inválido. O número ${number2} é menor que o ${number1}. Tente novamente!!`

    eMaior = numeroMaior(number1,number2)
  
    if (eMaior){
        mensagemDeSucesso.innerHTML = sucessMessage
        mensagemDeSucesso.style.display = "block"        
        numberA.value = ""
        numberB.value = ""

    } else {
        mensagemError.innerHTML = erroMessage
        mensagemError.style.display = "block"
        numberA.value = ""
        numberB.value = ""
    }    
})





