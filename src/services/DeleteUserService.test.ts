import { getConnection } from 'typeorm'
import  createConnection  from '../database'
import { FakeData } from '../utils/fakeData/FakeData'
import { DeleteUserService } from './DeleteUserService'
describe('DeleteUserService', () => {

    beforeAll( async () => {
        const conn = await createConnection()
    })
    afterAll( async () => {
        const conn = getConnection()
        await conn.query('DELETE FROM USERS')
        await conn.close()
    })
    
    const fakeData = new FakeData()
    const deleteUserService = new DeleteUserService()

    it('Must return empty array when user deleted', async () =>{
        const fakeUser = await fakeData.createUser()
        
        const result = await deleteUserService.execute(fakeUser.id)    
        
        expect(result).toHaveLength(0)
    })

})