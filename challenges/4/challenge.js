/*
 * Normalização de estruturas
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que realize a
 * normalização da estrutura representada pela variável input de
 * forma que o retorno seja compatível com a variável output
 *
 */

/*
 * [INPUT] Object
 * {
 *   "id": "6197b77e-3942-11ea-a137-2e728ce88125",
 *   "user": {
 *     "id": "6197ba94",
 *     "name": "Laura"
 *   },
 *   "reports": [
 *     {
 *       "id": "51ddf1a9",
 *       "result": {
 *         "document": "356.4325-10",
 *         "status": "em análise",
 *       }
 *     }
 *   ]
 * }
 *
 * [OUTPUT] Object
 *  {
 *   "results": {
 *     "6197b77e-3942-11ea-a137-2e728ce88125": {
 *       id: "6197b77e-3942-11ea-a137-2e728ce88125",
 *       user: "6197ba94",
 *       reports: ["51ddf1a9"]
 *     }
 *   },
 *   "users": {
 *     "6197ba94": { "id": "6197ba94", "name": "Laura" }
 *   },
 *   "reports": {
 *     "51ddf1a9": {
 *        "id": "51ddf1a9",
 *        "user": "6197ba94",
 *        "document": "356.4325-10",
 *        "status": "em análise",
 *      }
 *    }
 *  }
 */

/* META-INFO
 *
 * Nível: médio
 * Tema: Normalização de objetos
 * Referência para estudo: https://medium.com/@alfredayibonte/front-end-normalization-8e3d0df7cb47
 */

//  

// I have installed normalizr because I tought it would be the best library to help me finish this test
// I created a babel.config.js to make Jest ignore the import normalizr below
import { normalize, schema } from 'normalizr';

function normalizeData(unormalized) {
  const user = new schema.Entity('users');
  const report = new schema.Entity('reports');
  const result = new schema.Entity('results', {
    user: user,
    reports: [report]
  });
  const normalizeData = normalize(unormalized, result);
  return normalizeData
}

module.exports = normalizeData
