import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as conexoesMateriasController from '../controllers/conexoesMateriasController.mjs'
//SOLUÇÃO TEMPORÁRIA
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/grafoMaterias.html'));
});
router.get('/dadosGrafo', conexoesMateriasController.visualizarConexoes);


export default router;