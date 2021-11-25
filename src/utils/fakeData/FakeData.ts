import { CreateUserService } from '../../services/CreateUserService';
import { v4 as uuid }  from 'uuid';

class FakeData {
    
    async execute(){
        const createUserService = new CreateUserService();
        await createUserService.execute({
            id: uuid(),
            name: 'someuser',
            email: 'so@mail.com'
        })
        await createUserService.execute({
            id: uuid(),
            name: 'otheruser',
            email: 'other@mail.com'
        })
    }
}

export { FakeData }
