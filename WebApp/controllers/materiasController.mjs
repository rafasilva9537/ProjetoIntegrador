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

//falta passar pra rota
export const inserirTagEmMateria = async(req, res) => {
    try{
        const queryInserirTagEmMateria = {
            text: `INSERT INTO Materia_Tag(id_materia, id_tag) VALUES ($1, $2) RETURNING *`,
            values: [req.body.id_materia, req.body.id_tag]
        }

        const resultado = await pool.query(queryInserirTagEmMateria);
        res.status(200).json(resultado.rows[0]);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}