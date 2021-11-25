import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { GetAllUserController } from './controllers/GetAllUserController';

const router = Router();
const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();

router.get('/', (request:Request, response:Response) => {
    response.json( { mensagem : 'Welcome to the jungle' } )
})

router.post('/user', createUserController.handle)
router.get('/user', getAllUserController.handle)

export { router }