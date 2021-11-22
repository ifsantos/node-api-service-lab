import express, {Request, Response} from 'express';

function soma (numero : number){
    return numero + 1;
}
console.log(soma(5));

const server = express();

server.get('/', (request:Request, response:Response)=>{
    response.json({mensagem:'Welcome to the jungle'})
})

server.listen(5000, () => {
    console.log("Server running on port 5000")
})


     