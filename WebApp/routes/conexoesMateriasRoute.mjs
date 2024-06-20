import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as conexoesMateriasController from '../controllers/conexoesMateriasController.mjs'
//SOLUÇÃO TEMPORÁRIA
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', conexoesMateriasController.visualizarConexoes);


//router.use(express.json());
//router.use(express.urlencoded({ extended: false }));
//router.use(express.static(path.join(__dirname, '../public'), { index: 'grafoMaterias.html'}));

router.use(express.json());
router.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
router.use(express.static(path.join(__dirname, 'public')));


export default router;