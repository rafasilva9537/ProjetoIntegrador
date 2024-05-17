import pool from '../services/database.mjs'

//Tags Gerais
export const obterTags = async(req, res) => {
    try{
        const queryObterTags = `SELECT nome FROM Tag`;

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
            values: [req.body.nome_tag]
        }

        const resultado = await pool.query(queryInserirTag);
        res.status(200).json(resultado.rows[0]);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}


//Tags relacionadas a uma matéria
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
  

        const queryTagExiste = {
            text: `SELECT EXISTS (SELECT nome FROM Tag WHERE nome = $1)`,
            values: [req.body.nome_tag]
        }
        const tagExiste = await pool.query(queryTagExiste);
        console.log(`Existe? ${tagExiste.rows[0]}`);
        
        if(!tagExiste.rows[0].exists){
            //criando Tag que não existe
            const queryInserirTag = {
                text: `INSERT INTO Tag(nome) VALUES($1) RETURNING *`,
                values: [req.body.nome_tag]
            }
            const tagCriada = await pool.query(queryInserirTag);
        }

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