import {Request, response, Response} from 'express';
import { CreateUserService } from '../services/CreateUserService';
import {v4 as uuid} from 'uuid';

class CreateUserController{
    async handle(request:Request, response:Response){

        const createUserService = new CreateUserService(); 
        const name = request.body.name;
        const email = request.body.email;
        const id = uuid();

        if (name){
            const user = await createUserService.execute({id, name, email});
            return response.status(201).json(user)
        } else{
            return response.status(400).json({ msg: `Please provide an user name and email` })
        }
    }
}

export {CreateUserController}
