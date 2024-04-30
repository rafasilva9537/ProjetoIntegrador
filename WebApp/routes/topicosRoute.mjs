import express from 'express';
import path from 'node:path';
import pool from '../services/database.mjs'
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); //pega o nome do diretório

const router = express.Router();

router.get('/', async(req, res) => {
    //__dirname é o caminho absoluto
    //res.sendFile(path.join(__dirname, '../public', 'materiaTeste.html'));
    
    try{
        const resultado = await pool.query('SELECT * FROM Topico');
        res.status(200).json(resultado.rows);
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
});



router.put('/', async(req, res) => {
    try{

    }
    catch(error){
        return res.status(500).json({error: error.message})
    }
})

export default router;