import { getConnection } from "typeorm";
import  createConnection  from "../database";
import { CreateUserService } from "./CreateUserService";

describe('CreateUserService', () =>{
    beforeAll(async () =>{
        const conn = await createConnection();
    })
    afterAll(async () => {
        const conn =  getConnection();
        await conn.query('DELETE FROM USERS');
        await conn.close();
    })

    it ('Shoud return id of created user', async () => {
        const createUserServuice = new CreateUserService();
        const result = await createUserServuice.execute({
            id: 'wwwqqq13e-...',
            name: 'other user',
            email: 'o@user.com'
        })

        expect(result).toHaveProperty('id');
        console.log(result)
    })
})
