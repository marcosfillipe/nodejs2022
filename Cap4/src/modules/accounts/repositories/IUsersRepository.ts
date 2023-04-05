import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { Users } from "@modules/accounts/infra/typeorm/entities/Users";

interface IUsersRepository {
	create(data: ICreateUserDTO): Promise<void>;
	findByEmail(email: string): Promise<Users>;
	findById(id: string): Promise<Users>;
}

export { IUsersRepository };
