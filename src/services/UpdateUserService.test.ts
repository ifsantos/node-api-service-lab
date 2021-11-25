import createConnection from '../database';
import { getConnection } from 'typeorm';
import { UpdateUserService } from "./UpdateUserService";
import { FakeData } from '../utils/fakeData/FakeData';

describe('UpdateUserService', () => {
    beforeAll( async ()=>{
        const conn = await createConnection();
    })
    afterAll( async () => {
        const conn = getConnection();
        await conn.query('DELETE FROM USERS');
        await conn.close();
    })

    const fakeData = new FakeData()
    
    it ('Should edit username', async () => {
        const mockUser = await fakeData.createUser()
        console.log(mockUser)
        const updateUserService = new UpdateUserService();

        const result = await updateUserService.execute({
            id: mockUser.id,
            name: 'NewName'
        });

        expect(result).toHaveLength(0)
        expect(result).toMatchObject([]) //also possible
    })
})
