import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

//SOLUÇÃO TEMPORÁRIA, pesquisar se existe uma função padrão para obter o absolute path no ESM Modules, __dirname é integrado em CJS Modules
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); //pega o nome do diretório
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');

import materiaRouter from './routes/topicosRoute.mjs'

const app = express();

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//alterar rota e nome de tópicos para dividir entre cada materia
app.use('/topicos', materiaRouter);

export default app;