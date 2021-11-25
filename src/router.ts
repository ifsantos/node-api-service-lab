import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { GetAllUserController } from './controllers/GetAllUserController';
import { UpdateUserController } from './controllers/UpdateUserController';
import { DeleteUserController } from './controllers/DeleteUserController';

const router = Router();
const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

router.get('/', (request:Request, response:Response) => {
    response.json( { mensagem : 'Welcome to the jungle' } )
})

router.post('/user', createUserController.handle)
router.get('/user', getAllUserController.handle)
router.patch('/user', updateUserController.handle)
router.delete('/user/:id', deleteUserController.handle)

export { router }