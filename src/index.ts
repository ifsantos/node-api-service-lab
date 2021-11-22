import express, {Request, Response} from 'express';
import {router} from './router'

function sum (numero : number){
    return numero + 1;
}
const server = express();

server.use(router)

const port  = sum(4999);
server.listen(port, () => {
    console.log("Server running on port "+port)
})


     