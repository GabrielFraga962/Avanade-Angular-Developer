// var nome = "Gabriel";
// alert("Bem-Vindo de Volta! " + nome);
// var n1 = 5;
// var n2 = 3;
// var frase = "Como começar o dia";
// alert (nome + "tem " + idade "anos");
// alert(idade + idade2);
// console.long(nome);
// console.long(n1 * n2);
// console.long(frase.toLowerCase());
// alert (frase.replace("Olá","Bom Dia"));


// var lista = ["maça", "pêra", "laranja"];
// lista.push("uva");
// lista.pop();

// console.log(lista);
// console.log(lista.toString());
// console.log(lista.join(" - "))

/*var fruta = {nome: "maça", cor:"vemelha"}
console.log(fruta.nome);
alert(fruta.cor);*/

// var frutas = [{nome: "maça", cor:"vemelha"}, {nome: "uva", cor:"roxa"}]
// console.log(frutas);
// alert(frutas[1].nome);


// var idade = prompt("Qual sua idade"); // abre uma caixa de dialogo
// if (idade >= 18) {
//     alert("maior de idade");
// }else{
//     alert("menor de idade");
// }
  
// var count = 0;
// while (count <= 5){
//     console.log(count);
//     alert(count)
//     count ++;
// }

// var count;
// for (count = 0; count <= 5; count++){
//     alert(count);
// }

// var d = new Date();
// alert(d.getFullYear());
// alert(d.getMonth());
// alert(d.getDate());
// alert(d.getHours());
// alert(d.getMinutes());
// alert(d.getSeconds);

// function soma(n1, n2) {
//     return n1 + n2;
// }

// var validar = 0;

// function validaIdade(idade){
//     var validar;
//     if (idade >= 18){
//         validar = true
//     }else{
//         validar = false
//     }
//     return validar;
// }

// var idade = prompt("Qual sua idade");
// console.log(validaIdade(idade));

// alert(soma(5, 10));

function button(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("http://empodereconsultoria.com.br/profissional/");
    //window.location.href = "http://empodereconsultoria.com.br/profissional/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto")
}

function voltar(elemento){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

