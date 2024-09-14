import pool from '../services/database.mjs';
import path from 'node:path'
import { fileURLToPath } from 'node:url'
//SOLUÇÃO TEMPORÁRIA, pesquisar se existe uma função padrão para obter o absolute path no ESM Modules, __dirname é integrado em CJS Modules
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); //pega o nome do diretório
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');


export const visualizarConexoes = async(req, res, next) => {
  console.log("Comece a implementar o grafo aqui ...");

  try{
    const queryAgruparMateriasPorTag = `
      SELECT Materia.id_materia AS id, Materia.nome, ARRAY_AGG(Materia_Tag.nome_tag) AS tags
      FROM Materia
      LEFT JOIN Materia_Tag
        ON Materia.id_materia = Materia_Tag.id_materia
      GROUP BY Materia.id_materia
      `
      const resultado = await pool.query(queryAgruparMateriasPorTag);

      res.status(200).json(resultado.rows);
      //console.log(__dirname);

      //agora, em vez de res.json(), será usado axios?
      } 
      catch(error){
        res.status(500).json({error: error.message});
      }
}