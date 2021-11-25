import { DeleteUserController } from './DeleteUserController'
import createConnection from '../database';
import { getConnection } from 'typeorm';
import { FakeData } from '../utils/fakeData/FakeData';
import { Request } from 'express';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import { makeMockRequest } from '../utils/mocks/mockRequest';

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
    
    it('Must return 204 when Deleting user', async () => {
        const updateUserController  = new DeleteUserController()
        const fakeUser = await fakeData.createUser()
        const response = makeMockResponse()
        const request =makeMockRequest({
            params:{
                id: fakeUser.id
            }
        })

        await updateUserController.handle(request,response);

        expect(response.state.status).toBe(204)

    })

})