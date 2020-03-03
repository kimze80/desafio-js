/*
 * Somar os argumentos
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que some
 * todos os argumentos providos.
 *
 */

/* META-INFO
 *
 * Nível: fácil
 * Tema: conhecimento básico da linguagem
 */

const sumArguments = (...data) => {
  const reducer = (a, c) => a + c;
  return data.reduce(reducer)
}

module.exports = sumArguments
