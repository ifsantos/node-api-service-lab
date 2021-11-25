import { getRepository } from "typeorm";
import { User } from "../entities/User";

interface IUser{
    id: string,
    name: string,
    email?: string
}

class UpdateUserService {
    async execute({ id, name, email } : IUser) {
        const user = await getRepository(User)
        .createQueryBuilder()
        .update()
        .set({
            name: name 
        })
        .where('id = :id', {id})
        .execute();

        return user.raw;
    }

}

export { UpdateUserService }