# Exercício de lógica de programação

## Resolução do exercício C do Capítulo 05 do livro: Lógica de Programação e Algoritmos com JavaScript

## 📝 Problema

**Criar um programa que leia um número e verifique se ele é ou não é perfeito.
O programa deve exibir os divisores do número e a soma deles.**

## 🧪 Solução

Para resolver exercício foi preciso considerar que um **número perfeito** é aquele que é igual à soma dos seus divisores inteiros,
com exceção do próprio número.

Além disso, considerei também que o maior dividor inteiro possível de um número é sua metade e que 1 é um divisor universal.
**Por isso, no vetor que irá acumular os divisores já o iniciei com o valor 1.**

O prompt de comando permite ao usuário digitar o número. Após isso é executado um loop com o método **for** para percorrer todos os
possíveis divisores.

Para verificar os divisores basta saber se a divisão irá ter resto 0. Conforme o loop é executado os divisores são inseridos no
vetor. Agora basta somar os valores desse vetor após finalizado o loop.

Para realizar a soma dos valores que estão no vetor usei o método **forEach**. Por fim, para saber se o resultado da soma é
igual ao número digitado usei o **operador ternário**.

## 💻 tecnologias

<div>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" height="80" alt="nodejs logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="80" alt="nodejs logo"/>
</div>




