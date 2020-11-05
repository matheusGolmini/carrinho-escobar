import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import 'reflect-metadata'
import './database/config'
import routers from './routers'

const app = express()

const port = process.env.SERVER_PORT || 3000

// CORS authentication
app.use((__, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,jwt,Authorization"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, PATCH");
  next();
});

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(routers)


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})