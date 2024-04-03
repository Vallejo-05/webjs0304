/* Arrays armazenam uma lista de valores, primitivous ou não. Valores do tipo array são definidos usando colchetes. Podemos adicionar elementos em um array existente com a função push, e obter seu tamanho com a propriedade lenght. */
var frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pera'];

console.log('---- Frutas ----');
console.log('-- Quantidade de elementos em Frutas: ' + frutas.length);
console.log('-- Incluindo a Melancia no Array');
frutas.push('Melancia');
console.log('-- Nova quantidade de elementos em Frutas: ' + frutas.length);
console.log('Itens armazenados em Frutas');
console.log(frutas);

var veiculos = ['Polo', 'Virtus', 'T-Cross', 'Nivus', 'Jetta'];

console.log('---- Veículos ----');
console.log('Imprimindo um veículo de cada vez');
console.log(veiculos[0]);
console.log(veiculos[1]);
console.log(veiculos[2]);
console.log(veiculos[3]);
console.log('-- Elementos no array de veículos --');
console.log('-- Incluindo o novo veículo ao array');
veiculos.push('Golf');
console.log('-- Elementos no array de veículos -- ' + veiculos.length);

console.log('-- Comando de repetição FOR --');

for (i = 0; i < veiculos.length; i++){
    console.log(veiculos[i]);
}