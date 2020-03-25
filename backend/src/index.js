const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * Rota / Reurso 
 */

/**  
 * Métodos HTTP:
 *
 * GET: buscar informação do back-end
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/** 
 * Tipos de parâmetros:
 * 
 * Query params: parâmentos nomeados enviados na rota apos "?" (filtros, paginação)
 * igual o php mesmo
 * 
 * Route params: Parâmetros utilizados para identificar recursos
 * 
 * Request body: corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

 /**
  * Banco de dados
  * 
  * SQL: MySQL, SQLite, Postgree, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */


