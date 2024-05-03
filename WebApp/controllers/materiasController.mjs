import { query } from 'express';
import pool from '../services/database.mjs'

//Materias
export const obterMaterias = async(req, res) => {
    try{
        const queryTodasMaterias = 'SELECT id_materia, nome, data_inicio, data_fim, origem FROM Materia';

        const resultado = await pool.query(queryTodasMaterias);
        res.status(200).json(resultado.rows);
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

export const inserirTagEmMateria = async(req, res) => {
    try{
        if(!req.params.id){
            res.status(500).json({error: "Insira id da matéria existe"});
            return;
        }
        if(!req.body.nome_tag){
            res.status(500).json({error: "Insira tag"});
            return;
        }

        //FINALIZAR query
        const tagExisteObjeto = await pool.query({});

        const queryInserirTagEmMateria = {
            text: `INSERT INTO Materia_Tag(id_materia, nome_tag) VALUES ($1, $2) RETURNING *`,
            values: [req.params.id, req.body.nome_tag]
        }

        const resultado = await pool.query(queryInserirTagEmMateria);
        res.status(200).json(resultado.rows[0]);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

export const obterTagsDaMateria = async(req, res) => {
    try{
        const queryTagsDaMateria = {
            text: `SELECT nome_tag FROM Materia_Tag WHERE id_materia = $1`,
            values: [req.params.id]
        }

        const resultado = await pool.query(queryTagsDaMateria);
        let tags = [];

        resultado.rows.forEach((tag) => {
            tags.push(tag.nome_tag);
        })

        res.status(200).send(tags);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}