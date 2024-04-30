import pool from '../services/database.mjs'

//Tags
export const obterTags = async(req, res) => {
    try{
        const queryObterTags = `SELECT id_tag, nome FROM Tag`;

        const resultado = await pool.query(queryObterTags);
        res.status(200).json(resultado.rows);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

export const criarTag = async(req, res) => {
    try{
        const queryInserirTag = {
            text: `INSERT INTO Tag(nome) VALUES($1) RETURNING *`,
            values: [req.body.nome]
        }

        const resultado = await pool.query(queryInserirTag);
        res.status(200).json(resultado.rows[0]);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}