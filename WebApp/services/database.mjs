import pg from 'pg'
import dotenv from "dotenv"
dotenv.config()

const { Pool } = pg

//coloquem suas variáveis locais do postgre (consultar no pgAdmin) no arquivo .env
//arquivo .env é ignorado pelo github, informações locais não saem do computador
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE
})

export default pool;