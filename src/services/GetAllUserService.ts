import { getRepository } from "typeorm"
import { User } from "../entities/User"

class GetAllUserService{
    async execute() {
        const repo = getRepository(User);

        const users = await repo.createQueryBuilder('user')
        .select()
        .getMany();

        console.log(users);

        return users;
    }
}

export { GetAllUserService }