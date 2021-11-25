import {Request, Response } from 'express';
import { UpdateUserService } from '../services/UpdateUserService';


class UpdateUserController{

    async handle(request: Request, response:Response) {
        const updateUserService = new UpdateUserService();
        const { id, name, email } = request.body

        if (!id){
            response.status(400).json({msg: "ID not provided"})
        }
        if (!name){
            response.status(400).json({msg: "Name not provided"})
        }
        await updateUserService.execute({ id, name, email })
        response.status(204)
    }

}

export { UpdateUserController }