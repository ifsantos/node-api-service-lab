import { getConnection } from "typeorm";
import createConnection from "../database";
import { GetAllUserService } from './GetAllUserService';
import { FakeData } from '../utils/fakeData/FakeData';

describe('GetAllUserService', () => {
    beforeAll( async () => {
        const conn = await createConnection();
    })
    
    afterAll( async () => {
        const conn = getConnection();
        await conn.query('DELETE FROM USERS');
        await conn.close();
    })

    const fakeData = new FakeData();

    it ('Should return all users', async () => {
        await fakeData.execute()
        const expectedResponse = [
            { 
                name: 'someuser',
                email: 'so@mail.com'
            },
            {
                name: 'otheruser',
                email: 'other@mail.com'
            }
        ]

        const getAllUserService = new GetAllUserService();

        const response = await getAllUserService.execute();

        expect(response).toMatchObject(expectedResponse);

    })

    

})

