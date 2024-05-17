import express from 'express'
import * as conexoesMateriasController from '../controllers/conexoesMateriasController.mjs'

const router = express.Router();

router.get('/', conexoesMateriasController.visualizarConexoes);

export default router;