import express from 'express'
import * as materiasController from '../controllers/materiasController.mjs';
import * as tagsController from '../controllers/tagsController.mjs';
import * as topicosController from '../controllers/topicosController.mjs';

const router = express.Router();

//Materias Gerais
router.get('/', materiasController.obterTodasMaterias);
router.post('/', materiasController.criarMateria);
router.delete('/', materiasController.deletarMateria);


//Materia Específica
router.get('/:id', materiasController.obterMateria);

router.post('/:id/tags', tagsController.inserirTagEmMateria);
router.get('/:id/tags', tagsController.obterTagsDaMateria);

router.get('/:id/topicos', topicosController.obterTopicos);
router.post('/:id/topicos', topicosController.criarTopico);
router.put('/:id/topicos', topicosController.atualizarTopico);
router.delete('/:id/topicos', topicosController.deletarTopico);

export default router;