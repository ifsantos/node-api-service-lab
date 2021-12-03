import { getRepository } from "typeorm"
import { User } from "../entities/User"

class GetAllUserService{
    users = [{
        id: "123",
        name: "spider",
        email: "ui@go.com"
    } as User,
    {
        id: "345",
        name: "bat",
        email: "ux@bar.com"
    } as User]
    
    async execute() {
        
        
        return this.users;
    }
}

export { GetAllUserService }
//class GetAllUserService{
//    async execute() {
//        const repo = getRepository(User);
//
//        const users = await repo.createQueryBuilder('user')
//        .select()
//        .getMany();
//
//        return users;
//    }
//}