import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { Users } from "@modules/accounts/infra/typeorm/entities/Users";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
	users: Users[] = [];

	async create({
		driver_license,
		email,
		name,
		password,
	}: ICreateUserDTO): Promise<void> {
		const user = new Users();

		Object.assign(user, {
			driver_license,
			email,
			name,
			password,
		});

		this.users.push(user);
	}
	async findByEmail(email: string): Promise<Users> {
		const user = this.users.find((u) => u.email === email);
		return user;
	}
	async findById(id: string): Promise<Users> {
		const user = this.users.find((u) => u.id === id);
		return user;
	}
}

export { UsersRepositoryInMemory };
