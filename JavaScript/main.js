function clicar(){
    //alert("Obrigado por clicar!");
    //document.getElementById("agradecimento");
    //alert(console.log(document.getElementById("agradecimento"))); indefinido
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
}

function redirecionar(){
    //window.open("index.html");
    window.location.href = "index.html";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mause!";
    elemento.innerHTML = "Obrigado por passar o mouse!";
    //alert("Obrigado por passar o mause");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mause aqui...";
    elemento.innerHTML = "Passe o mouse aqui...";
}

function load(){
    alert("Página Carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*
function validarIdade(idade){
    return idade >= 18;
}
var idade = prompt("Digite dua idade...");
var maiorDeIdade = validarIdade(idade);
console.log(maiorDeIdade);
alert(maiorDeIdade);
*/

//var data = new Date;
//alert(data);

/*
var idade  = prompt("Informe sua idade...");
if(idade >= 18)
    console.log("Maior de idade.");
else
    console.log("Menor de idade.");
*/

//alert("MEU ALERTA!")
/*
var nome = "Angel Rodrigues";
var idade1 = 19;
var idade2 = 10;
console.log(nome);
console.log(idade1 + idade2);
console.log(nome.replace("Rodrigues", "R Ferreira").toUpperCase());
*/