import { Repository, getRepository } from "typeorm";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { Users } from "@modules/accounts/infra/typeorm/entities/Users";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

class UsersRepository implements IUsersRepository {
	private repository: Repository<Users>;

	constructor() {
		this.repository = getRepository(Users);
	}

	async create({
		name,
		password,
		email,
		driver_license,
		avatar,
		id,
	}: ICreateUserDTO): Promise<void> {
		const user = this.repository.create({
			name,
			password,
			email,
			driver_license,
			avatar,
			id,
		});

		await this.repository.save(user);
	}

	async findByEmail(email: string): Promise<Users> {
		const user = await this.repository.findOne({ email });

		return user;
	}

	async findById(id: string): Promise<Users> {
		const user = await this.repository.findOne({ id });

		return user;
	}
}

export { UsersRepository };
