import {Request, Response} from 'express';

class CreateUserController{
    handle(request:Request, response:Response){
        response.json([
            {
            user: 'johny cage'
            },
            {
                user: 'spiderman'
            },
            {
                user: 'dhalsim'
            }])
    }
}


export {CreateUserController}