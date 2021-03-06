/*
 * Números primos
 */

/* ENUNCIADO
 *
 * Você deve fazer um programa que soma o valor de todos
 * os números primos existentes de 1 a n, onde n é dado como
 * parâmetro.
 *
 * Para isso você deve usar a função já escrita de verificação
 * de primalidade.
 *
 * Exemplo:
 * sumPrimes(15) deve retornar 41
 *
 */

/* META-INFO
 *
 * Nível: fácil
 * Tema: arrays, maps, reduces, uso de outras funções
 */

const isPrime = require('../../utils/isPrime')

const sumPrimes = n => {
  let answer = 0;

  for(var i=2; i <= n; i++){   
    if(isPrime(i)){
      answer += i;
    }
  }
  return answer;
}

module.exports = sumPrimes
