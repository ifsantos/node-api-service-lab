import { CreateUserController } from './CreateUserController';

describe('CreateUserController', () => {
   

    it ("Should return created user id", () => {

        const createUserController = new CreateUserController()
        const result = createUserController.handle()
    })
})