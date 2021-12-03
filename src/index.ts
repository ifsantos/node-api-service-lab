import 'reflect-metadata';
import express, {Request, Response} from 'express';
import {router} from './router'
import createConnection from './database'

// createConnection()
const server = express();

server.use(express.json())
server.use(router)

const port = process.env.PORT || 3000
server.listen(port, () => {
    console.log("Server running on port "+port)
})


// dummy function
function sum (numero : number){
    return numero + 1;
}