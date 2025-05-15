//array

//1
let colegas = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];
// Criamos um array com 5 nomes.

console.log(colegas[2]); // "Carlos"
 //colegas[2] acessa o elemento da terceira posição (índice 2, pois arrays começam do 0).

colegas.push("Fernanda");
// O método push() adiciona um novo item no final do array.

colegas.shift();
//O método shift() remove o primeiro item do array.

//2
let numeros = [1,2,3,4,5,6,7,8,9,10];
// Array numérico simples.

numeros.reverse();
//reverse() inverte a ordem dos elementos.

numeros.sort((a, b) => a - b);
//sort() com função de comparação ordena os números corretamente em ordem crescente.

let numerosString = numeros.join("-");
// join("-") transforma o array em uma string, separando os valores com hífens.

//3
let notas = [6.5, 7.0, 5.5, 8.0];
//Array com 4 notas.

let soma = notas.reduce((acc, nota) => acc + nota, 0);
let media = soma / notas.length;
// reduce() soma todos os valores. A média é a soma dividida pelo número de elementos.

if (media >= 6) {
  console.log("A média é maior ou igual a 6.");
} else {
  console.log("A média é menor que 6.");
}
// Condicional para exibir a situação do aluno com base na média.

//4
let frutas = ["banana", "maçã", "pera", "uva", "melão"];
let comA = frutas.filter(fruta => fruta.includes("a"));
// filter() percorre o array e retorna apenas os itens que contêm a letra "a".

if (!frutas.includes("abacate")) {
  frutas.push("abacate");
}
// includes() verifica se um item está presente. Se não estiver, push() adiciona ao final.

//5
let carrinho = [];

function adicionarItem(item) {
  carrinho.push(item);
}
// push() adiciona o item.

function removerItem(item) {
  let index = carrinho.indexOf(item);
  if (index !== -1) {
    carrinho.splice(index, 1);
  }
}
// indexOf() encontra a posição do item. splice() remove se o item existir.

function listarItens() {
  console.log("Itens no carrinho:", carrinho);
}
// Mostra os itens atuais do array carrinho.

//6
let numeros1 = [10, 5, 8, 2, 7];

let soma1 = numeros1.reduce((acc, val) => acc + val, 0);
let produto = numeros1.reduce((acc, val) => acc * val, 1);
// reduce() permite aplicar operações acumulativas.

//Na soma, o acumulador começa com 0.

//Na multiplicação, começa com 1 para não zerar o resultado.