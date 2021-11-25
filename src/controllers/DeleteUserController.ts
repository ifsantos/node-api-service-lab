import {Request, Response } from 'express';
import { DeleteUserService } from '../services/DeleteUserService';


class DeleteUserController{

    async handle(request: Request, response:Response) {
        const deleteUserService = new DeleteUserService();
        const { id } = request.params
        
        console.log(`params: ${request.params.json}`)
        console.log(`ID: ${id}`)
        
        if (!id){
            return response.status(400).json({msg: "ID not provided"})
        }
        
        await deleteUserService.execute({ id })

        return response.status(204).json()
    }

}

export { DeleteUserController }