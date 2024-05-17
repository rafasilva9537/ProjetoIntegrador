import express from 'express'
import * as materiasController from '../controllers/materiasController.mjs';
import * as tagsController from '../controllers/tagsController.mjs';

const router = express.Router();

router.get('/', materiasController.obterMaterias);
router.post('/', materiasController.criarMateria);
router.delete('/', materiasController.deletarMateria);

router.post('/:id/tags', tagsController.inserirTagEmMateria);
router.get('/:id/tags', tagsController.obterTagsDaMateria);

export default router;