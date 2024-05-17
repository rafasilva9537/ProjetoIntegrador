import pool from '../services/database.mjs';

function materiaParaGrafo(){
    
}

export const visualizarConexoes = async(req, res) => {
    console.log("Comece a implementar o grafo aqui ...");

    try{
      const queryTagsAssociadas = `
      SELECT DISTINCT Materia_Tag.nome_tag
      FROM Materia
      LEFT JOIN Materia_Tag
          ON Materia.id_materia = Materia_Tag.id_materia`
      const tagsAssociadas = await pool.query(queryTagsAssociadas);

      const queryMateriasTags = `
      SELECT Materia.id_materia, Materia.nome, Materia_Tag.nome_tag
      FROM Materia
      LEFT JOIN Materia_Tag
          ON Materia.id_materia = Materia_Tag.id_materia`
      const materiasTags = await pool.query(queryMateriasTags);
      
      res.status(200).json(tagsAssociadas.rows);
      }
      catch(error){
        res.status(500).json({error: error.message});
      }
}