var a = 10;
var b = 15;

//Comparação simples - quem é o maior entre os 2 números
//Se A maior que B, então A é maior
//Senão b é maior

if(a > b){
    console.log('A é maior que B');
}
else{ 
    console.log('B é maior que A');
}

//if dentro de if - if encadeado
//dados 3 numeros inteiros, qual é o maior
var c = 20;

if(a > b && a > c){
    console.log('A é maior');
}
else if (b > a && b > c){
    console.log('B é maior');
}
else{
    console.log('C é o maior');
}