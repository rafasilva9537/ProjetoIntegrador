import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); //pega o nome do diretório

const router = express.Router();

router.get('/', (req, res) => {
    //__dirname é o caminho absoluto
    res.sendFile(path.join(__dirname, '../public', 'materiaTeste.html'));
});

export default router;