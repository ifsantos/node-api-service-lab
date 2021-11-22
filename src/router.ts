import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/CreateUserController';

const router = Router();
const createUserController = new CreateUserController();

router.get('/', (request:Request, response:Response) => {
    response.json( { mensagem : 'Welcome to the jungle' } )
})

router.post('/user', createUserController.handle)

export { router }