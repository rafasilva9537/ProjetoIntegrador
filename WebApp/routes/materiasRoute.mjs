import express from 'express'
import * as materiasController from '../controllers/materiasController.mjs';

const router = express.Router();

router.get('/', materiasController.obterMaterias);
router.post('/', materiasController.criarMateria);
router.delete('/', materiasController.deletarMateria);

router.post('/:id/inserir-tag', materiasController.inserirTagEmMateria)

export default router;