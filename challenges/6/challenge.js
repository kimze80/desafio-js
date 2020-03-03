/*
 * Regex
 */

/* ENUNCIADO
 *
 * Escreva uma função que busque no texto os valores de "height" e "width"
 * e retorne um objeto { "height": x, "width": y } contendo esses valores ignorando sua medida (px, %, em).
 *
 * Ex:1
 * [INPUT]
 * "<div style="height: 20px; width: 60px;">"
 * [OUTPUT]
 * {
 *   height: 20,
 *   width: 60
 * }
 *
 * Ex: 2
 * [INPUT] String
 * "<div style="background-color: red;"> <img style="width: 120px; height: 20%" /></div>"
 * [OUTPUT] Object
 * {
 *   width: 120,
 *   height: 20
 * }
 */

/* META INFO
 *
 * Nível: médio
 * Tema: Regex
 */

const extractSize = htmlTemplate => {

  // to get the values from width and height
  let width = htmlTemplate.match(/width:\s*(\d+)/)
  let height = htmlTemplate.match(/height:\s*(\d+)/)
  if (width) {
    width = width[1];
  } else {
    // if width doesnt exist
    width = 0
  }
  if (height) {
    height = height[1]; 
  } else {
    // if height doesnt exist
    height = 0
  }
  // will return a value in string and transform the value to number
  return {width: parseInt(width), height: parseInt(height)}

}

module.exports = extractSize
