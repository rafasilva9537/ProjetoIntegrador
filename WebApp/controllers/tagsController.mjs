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

export const criarTagDaMateria = async (req, res) => {
    //FINALIZAR
    //Para criação de uma tag dentro da matéria, precisa-se verificar primeiro se já existe, caso não, cria-se a tag
    //Talvez usar criarTag como middleware
    try {
      const queryCriarTag = {
        text: `INSERT INTO Materia_Tag(nome_tag) VALUES ($1) RETURNING *`,
        values: [req.body.nome_tag]
      }
  
      const resultado = await pool.query(queryCriarTag);
      res.status(200).json(resultado.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

export const atualizarTagDaMateria = async (req, res) => {
    try {
      const queryAtualizarTag = {
        text: `UPDATE Materia_Tag
               SET nome_tag = $1
               WHERE id_materia_tag = $2
               RETURNING *`,
        values: [
          req.body.nome_tag,
          req.body.id_materia_tag,
        ],
      };
  
      const resultado = await pool.query(queryAtualizarTag);
      res.status(200).json(resultado.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

export const deletarTagDaMateria = async (req, res) => {
    try {
      const queryDeletarTag = {
        text: `DELETE FROM Materia_Tag WHERE id_materia_tag = $1 RETURNING *`,
        values: [req.body.id_materia_tag]
      }
  
      const resultado = await pool.query(queryDeletarTag);
      res.status(200).json(resultado.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}