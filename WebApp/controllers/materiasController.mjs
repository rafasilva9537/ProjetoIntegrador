import { query } from 'express';
import pool from '../services/database.mjs'

//Materias
export const obterTodasMaterias = async(req, res) => {
  try{
      const queryTodasMaterias = 'SELECT id_materia, nome, data_inicio, data_fim, origem FROM Materia';

      const resultado = await pool.query(queryTodasMaterias);
      res.status(200).json(resultado.rows);
  }
  catch(error){
      res.status(500).json({error: error.message});
  }
}


//Materia Específica
export const obterMateria = async(req, res) => {
  try{
    console.log("Entrando em obterMateria. Materia ID:", req.params.id);

    const queryMateria = {
      text: `SELECT id_materia, nome, data_inicio, data_fim, origem 
              FROM Materia
              WHERE id_materia = $1`,
      values: [req.params.id]
    };

    const queryTagsDaMateria = {
      text: `SELECT nome_tag FROM Materia_Tag WHERE id_materia = $1`,
      values: [req.params.id]
    }

    const materia = await pool.query(queryMateria);
    const tagsObjeto = await pool.query(queryTagsDaMateria);

    const tags = [];
    tagsObjeto.rows.forEach((tag) => {
        tags.push(tag.nome_tag);
    })
    materia.rows[0].tags = tags;
    
    res.status(200).json(materia.rows[0]);
  }
  catch(error){
    res.status(500).json({error: error.message});
  }
}

export const criarMateria = async(req, res) => {
    try{
        const queryCriarMateria = {
            text: `INSERT INTO Materia(nome, data_inicio, data_fim, origem) VALUES ($1, $2, $3, $4) RETURNING *`,
            values: [req.body.nome, req.body.data_inicio, req.body.data_fim, req.body.origem]
        }

        const resultado = await pool.query(queryCriarMateria);
        console.log(resultado.rows);
        res.status(200).json(resultado.rows);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

export const deletarMateria = async(req, res) => {
    try{
        const queryDeletarMateria = {
            text: `DELETE FROM Materia WHERE id_materia = $1 RETURNING *`,
            values: [req.body.id_materia]
        }

        const resultado = await pool.query(queryDeletarMateria);
        res.status(200).json(resultado.rows[0]);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

export const atualizarMateria = async (req, res) => {
    try {
        const queryAtualizarMateria = {
        text: `UPDATE Materia
                SET nome = $1, data_inicio = $2, data_fim = $3, origem = $4
                WHERE id_materia = $5
                RETURNING *`,
        values: [
            req.body.nome,
            req.body.data_inicio,
            req.body.data_fim,
            req.body.origem,
            req.body.id_materia,
        ],
        };

        const resultado = await pool.query(queryAtualizarMateria);
        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


//Datas de Início e Fim da Matéria
//SelecionarDatas
export const obterDatas = async (req, res) => {
    try {
      const queryTodasDatas = 'SELECT DISTINCT data_inicio, data_fim FROM Materia';
  
      const resultado = await pool.query(queryTodasDatas);
      res.status(200).json(resultado.rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}
  
export const criarData = async (req, res) => {
    try {
      const queryCriarData = {
        text: `INSERT INTO Materia(data_inicio, data_fim) VALUES ($1, $2) RETURNING *`,
        values: [req.body.data_inicio, req.body.data_fim]
      }
  
      const resultado = await pool.query(queryCriarData);
      res.status(200).json(resultado.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

export const atualizarData = async (req, res) => {
    try {
      const queryAtualizarData = {
        text: `UPDATE Materia
               SET data_inicio = $1, data_fim = $2
               WHERE id_materia = $3
               RETURNING *`,
        values: [
          req.body.data_inicio,
          req.body.data_fim,
          req.body.id_materia,
        ],
      };
  
      const resultado = await pool.query(queryAtualizarData);
      res.status(200).json(resultado.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}
  
export const deletarData = async (req, res) => {
    try {
      const queryDeletarData = {
        text: `DELETE FROM Materia WHERE id_materia = $1 RETURNING data_inicio, data_fim`,
        values: [req.body.id_materia]
      }
  
      const resultado = await pool.query(queryDeletarData);
      res.status(200).json(resultado.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}