import express from 'express';
import path from 'node:path';
import pool from '../services/database.mjs'
import * as topicosController from '../controllers/topicosController.mjs'
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); //pega o nome do diretório

const router = express.Router();

//Tópicos no geral
router.get('/', topicosController.obterTopicos);

//Tópico específico
//router.put('/', )


export default router;