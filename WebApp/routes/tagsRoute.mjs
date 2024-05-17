import express from 'express'
import * as tagsController from '../controllers/tagsController.mjs'

const router = express.Router()

router.get('/', tagsController.obterTags);
router.post('/', tagsController.criarTag);

export default router;