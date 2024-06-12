import pool from '../services/database.mjs';

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
      //agora, em vez de res.json(), será usado axios?
      } 
      catch(error){
        res.status(500).json({error: error.message});
      }
}