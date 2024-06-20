import pool from "../services/database.mjs";

//SelecionarTopico
export const obterTopicos = async (req, res) => {
    try {
      console.log("Topicos")
      const queryTodosTopicos = {
        text: `SELECT id_topico, nome, progresso, desempenho, id_materia 
        FROM Topico 
        WHERE id_materia = $1`,
        values: [req.params.id]
      }

      const queryDatasDeTopicos = {
        text: `SELECT id_topico, data FROM Topico_Data`
      }

      const topicos = await pool.query(queryTodosTopicos);
      const datas_topicos = await pool.query(queryDatasDeTopicos);

      //MELHORAR, COMPLEXIDADE ESTÁ BEM RUIM AINDA → (i*j) loops
      //Possível uso de estrutura de dados?
      topicos.rows.forEach((topico) => {
        topico.datas = [];
        datas_topicos.rows.forEach((data) => {
          if(data.id_topico === topico.id_topico) topico.datas.push(data.data);
        })
      });

      console.log(topicos.rows);
      res.status(200).json(topicos.rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}
  
  
//CriarTopico
export const criarTopico = async (req, res) => {
    try {
      const queryCriarTopico = {
        text: `INSERT INTO Topico(id_materia, nome, desempenho, progresso)  VALUES ($1, $2, $3, $4) RETURNING *`,
        values: [req.body.id_materia, req.body.nome, req.body.desempenho, req.body.progresso]
      }
      const resultado = await pool.query(queryCriarTopico);
      console.log("BackEnd Topico Criado: ", resultado.rows[0]);
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
               SET nome = $1, progresso = $2, desempenho = $3
               WHERE id_topico = $4 AND id_materia = $5
               RETURNING *`,
        values: [
          req.body.nome,
          req.body.progresso,
          req.body.desempenho,
          req.body.id_topico,
          req.body.id_materia
        ],
      };
      console.log("Body:", queryAtualizarTopico.values);
  
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

export const inserirDataEmTopico = async(req, res) => {
  try{
    const dataExiste = await pool.query(`SELECT EXISTS (SELECT data FROM Data WHERE data = $1)`, [req.body.data]);
    if(!dataExiste.rows[0].data){
      console.log("Data não existe");
      await pool.query(`INSERT INTO Data(data) VALUES($1)`, [req.body.data]);
    }

    const queryInserirData = {
      text: `INSERT INTO Topico_Data(id_topico, data) VALUES($1, $2)`,
      values: [req.params.id_topico, req.body.data]
    }

    await pool.query(queryInserirData);
  } catch {
    res.status(500).json({ error: error.message })
  }
}