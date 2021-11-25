import { getConnection } from "typeorm";
import createConnection from "../database";
import { CreateUserService } from "./CreateUserService";
import { GetAllUserService } from './GetAllUserService';
import { v4 as uuid }  from 'uuid';

describe('GetAllUserService', () => {
    beforeAll( async () => {
        const conn = await createConnection();
    })
    
    afterAll( async () => {
        const conn = getConnection();
        await conn.query('DELETE FROM USERS');
        await conn.close();
    })

    it ('Should return all users', async () => {
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

