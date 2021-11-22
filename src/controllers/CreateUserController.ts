import {Request, response, Response} from 'express';

class CreateUserController{
    handle(request:Request, response:Response){

        const user = request.body.name;
        if (user){
            response.status(201).json(
                {
                    msg: `User ${user} created successfully.` 
                })
        } else {
            response.status(400).json(
                {
                    msg: `Please provide an user name` 
                })
        }
    }
}


export {CreateUserController}