import createConnection from '../database';
import { getConnection } from 'typeorm';
import { GetAllUserController } from './GetAllUserController';
import { FakeData } from '../utils/fakeData/FakeData';
import { makeMockRequest } from '../utils/mocks/mockRequest';
import { makeMockResponse } from '../utils/mocks/mockResponse';

describe('GetAllUserController', () => {

    beforeAll(async ()=>{
        const conn = await createConnection()
    })
    afterAll( async () => {
        const conn = getConnection()
        await conn.query('DELETE FROM USERS');
        await conn.close()
    })
    const fakeData = new FakeData();

    it ('Must return 200 when retrieve all users', async () => {
        await fakeData.execute();

        const getAllUserController = new GetAllUserController();

        const request = makeMockRequest({});
        const response = makeMockResponse();

        await getAllUserController.handle(request,response)

        expect(response.state.status).toBe(200);

    })
})