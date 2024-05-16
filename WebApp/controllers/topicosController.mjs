import pool from "../services/database.mjs";

//SelecionarTopico
export const obterTopicos = async (req, res) => {
    try {
      const queryTodosTopicos = 'SELECT id_topico, nome, descricao, id_materia FROM Topico';
  
      const resultado = await pool.query(queryTodosTopicos);
      res.status(200).json(resultado.rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}
  
  
//CriarTopico
export const criarTopico = async (req, res) => {
    try {
      const queryCriarTopico = {
        text: `INSERT INTO Topico(nome, descricao, id_materia) VALUES ($1, $2, $3) RETURNING *`,
        values: [req.body.nome, req.body.descricao, req.body.id_materia]
      }
  
      const resultado = await pool.query(queryCriarTopico);
      res.status(200).json(resultado.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}
  
  
//AtualizarTopico
export const atualizarTopico = async (req, res) => {
    try {
      const queryAtualizarTopico = {
        text: `UPDATE Topico
               SET nome = $1, descricao = $2, id_materia = $3
               WHERE id_topico = $4
               RETURNING *`,
        values: [
          req.body.nome,
          req.body.descricao,
          req.body.id_materia,
          req.body.id_topico,
        ],
      };
  
      const resultado = await pool.query(queryAtualizarTopico);
      res.status(200).json(resultado.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}
  
  
//DeletarTopico
export const deletarTopico = async (req, res) => {
    try {
      const queryDeletarTopico = {
        text: `DELETE FROM Topico WHERE id_topico = $1 RETURNING *`,
        values: [req.body.id_topico]
      }
  
      const resultado = await pool.query(queryDeletarTopico);
      res.status(200).json(resultado.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}