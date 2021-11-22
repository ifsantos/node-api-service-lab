import {Request, response, Response} from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController{
    handle(request:Request, response:Response){

        const name = request.body.name;
        const email = request.body.email;
        const createUserService = new CreateUserService(); 

        if (name && email){
            const user  = createUserService.execute({name,email});
            response.status(201).json({user})
        } else{
            response.status(400).json({ msg: `Please provide an user name and email` })
        }
    }
}


export {CreateUserController}