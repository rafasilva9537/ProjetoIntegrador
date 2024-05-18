import pool from '../services/database.mjs';

function materiaParaGrafo(){
    
}

export const visualizarConexoes = async(req, res) => {
  console.log("Comece a implementar o grafo aqui ...");

  try{
    const queryAgruparMateriasPorTag = `
      SELECT Materia_Tag.nome_tag, ARRAY_AGG(Materia.nome) AS materias
      FROM Materia
      LEFT JOIN Materia_Tag
        ON Materia.id_materia = Materia_Tag.id_materia
      GROUP BY Materia_Tag.nome_tag
      `
      const resultado = await pool.query(queryAgruparMateriasPorTag);
      
      res.status(200).json(resultado.rows);
      } 
      catch(error){
        res.status(500).json({error: error.message});
      }
}