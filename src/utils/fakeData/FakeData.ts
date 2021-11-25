import { CreateUserService } from '../../services/CreateUserService';
import { v4 as uuid }  from 'uuid';

class FakeData {
    createUserService = new CreateUserService();
    
    async execute(){
        await this.createUserService.execute({
            id: uuid(),
            name: 'someuser',
            email: 'so@mail.com'
        })
        await this.createUserService.execute({
            id: uuid(),
            name: 'otheruser',
            email: 'other@mail.com'
        })
    }
    async createUser() {
        const user = await this.createUserService.execute({
            id: uuid(),
            name: 'otheruser',
            email: 'other@mail.com'
        })
        return user;
    }
}

export { FakeData }
