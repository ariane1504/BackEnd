//1
import entradaDados from 'readline-sync';

//1
let dia = (entradaDados.question('Digite um numero entre 1 á 7: '));
switch(dia) {
    case "1":
        console.log('Domingo');
        break;
    case "2":
        console.log("Segunda-Feira");
        break;
    case "3":
        console.log("Terça-Feira");
        break;
    case "4":
        console.log("Quarta-Feira");
        break;
    case "5":
        console.log("Quinta-Feira");
        break;
    case "6":
        console.log('Sexta-feira');
        break;
    case "7":
        console.log('Sábado');
        break;
    default:
        console.log("valor iválido");
        break;
    }

//2

let mes =  (entradaDados.question('Digite um numero entre 1 á 12: '));
//let mes = entradaDados.questionInt
switch(mes) {
    case "1":
        console.log('Janeiro');
        break;
    case "2":
        console.log("fevereiro");
        break;
    case "3":
        console.log("março");
        break;
    case "4":
        console.log("Abril");
        break;
    case "5":
        console.log("Maio");
        break;
    case "6":
        console.log('Junho');
        break;
    case "7":
        console.log('JUlho');
        break;
    case "8":
            console.log("Agosto");
            break;
    case "9":
            console.log('Setembro');
            break;
    case "10":
            console.log('Outubro');
            break;
    case "11":
                console.log("Novembro");
                break;
    case "12":
                console.log('Dezembro');
                break;
            
    default:
        console.log("valor iválido");
        break;
    }

//3
 let a = entradaDados.question("Informe o primeira numero: ")
 let operacao = entradaDados.question("Informe a operação que deseja: ")
 let b = entradaDados.question("Informe o segundo numero: ")

 let divisao = [a / b]
 let adicao = [a + b]
 let multiplicao = [a * b]
 let subtracao = [a - b]

 switch(a,b,operacao){
    case a,b,operacao = "*":
    console.log("O resultado será igual a:",multiplicao)
    break

    case a,b,operacao = "-":
    console.log("O resultado será igual a:",subtracao)
    break

    case a,b,operacao = "+":
    console.log("O resultado será igual a:",adicao)
    break

    case a,b,operacao = "/":
    console.log("O resultado será igual a:",divisao)
    break
    

}

//4
let categoria = entradaDados.question('Digite sua categoria: A, B, C ou D\n ')
let salario = entradaDados.questionFloat('Digite seu salário')

switch(categoria){
    case 'A':
        console.log(`Seu salário atual vai ser de: ${salario - ((salario/100) * 5)}`)
    break
    case 'B':
        console.log(`Seu salário atual vai ser de: ${salario - ((salario/100) * 10)}`)
    break
    case 'C':
        console.log(`Seu salário atual vai ser de: ${salario - ((salario/100) * 15)}`)
    break
    case 'D':
        console.log(`Seu salário atual vai ser de: ${salario - ((salario/100) * 20)}`)
    break
default:
console.log('Categoria inválida, digite uma letra de A a D, conforme sua categoria')
}
//toLocaleString('pt-BR',{style: 'currency', currency:'BRL'}));