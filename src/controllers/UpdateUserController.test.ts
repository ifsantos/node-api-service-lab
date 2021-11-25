import { UpdateUserController } from './UpdateUserController'
import createConnection from '../database';
import { getConnection } from 'typeorm';
import { FakeData } from '../utils/fakeData/FakeData';
import { Request } from 'express';
import { makeMockResponse } from '../utils/mocks/mockResponse';

describe('UpdateUserController', () => {
    beforeAll(async ()=>{
        const conn = await createConnection()
    })
    afterAll( async () => {
        const conn = getConnection()
        await conn.query('DELETE FROM USERS');
        await conn.close()
    })
    const fakeData = new FakeData();
    
    it('Must return 204 when updating user', async () => {
        const updateUserController  = new UpdateUserController()
        const fakeuser = await fakeData.createUser()
        const response = makeMockResponse()
        const request = {
            body: {
                id: fakeuser.id,
                name: 'updated user',
                email: 'some@email.com'
            }
        } as Request

        await updateUserController.handle(request,response);

        expect(response.state.status).toBe(204)

    })

})