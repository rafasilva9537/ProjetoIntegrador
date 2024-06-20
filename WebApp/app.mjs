import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
//SOLUÇÃO TEMPORÁRIA, pesquisar se existe uma função padrão para obter o absolute path no ESM Modules, __dirname é integrado em CJS Modules
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); //pega o nome do diretório
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');

import topicosRoute from './routes/topicosRoute.mjs'
import materiasRoute from './routes/materiasRoute.mjs'
import tagsRoute from './routes/tagsRoute.mjs'
import conexoesMateriasRoute from './routes/conexoesMateriasRoute.mjs'

const app = express();

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//alterar rota e nome de tópicos para dividir entre cada materia
app.use('/topicos', topicosRoute);
app.use('/materias', materiasRoute);
app.use('/tags', tagsRoute);
app.use('/conexoes-materias', conexoesMateriasRoute);

export default app;