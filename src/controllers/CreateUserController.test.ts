import { getConnection } from 'typeorm';
import createConnection from '../database';
import { CreateUserController } from './CreateUserController';
import { Request } from 'express';
import { makeMockResponse } from '../utils/mocks/mockResponse';

describe('CreateUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        //await connection.runMigrations()
    })
    afterAll(async () => {
        const connection = await getConnection();
        await connection.query('DELETE FROM USERS')
        connection.close();
    })

    const createUserController = new CreateUserController();
    const response = makeMockResponse();

    it ("Should return 201 if created user", async () => {
        const request = {
            body: {
                name: 'someuser',
                email: 'some@email.com'
            }
        } as Request
        const result = await createUserController.handle(request, response);

        expect(response.state.status).toBe(201)
    })
    
    it ('Should return 400 if name is blank', async () => {
        const request = {
            body: {
                name: '',
                email: 'some@email.com'
            }
        } as Request
        const result = await createUserController.handle(request, response);
        
        expect(response.state.status).toBe(400)
    })
    
    it ("Should return 201 if emails is blank", async () => {
        const request = {
            body: {
                name: 'someuser',
                email: ''
            }
        } as Request
        const result = await createUserController.handle(request, response);

        expect(response.state.status).toBe(201)
    })
})