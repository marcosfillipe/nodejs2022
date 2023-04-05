import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import { AppError } from "@shared/errors/AppError";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";

@injectable()
class CreateUserService {
	constructor(
		@inject("UsersRepository")
		private usersRepository: IUsersRepository
	) {}

	async execute({
		name,
		password,
		email,
		driver_license,
	}: ICreateUserDTO): Promise<void> {
		const userAlreadyExists = await this.usersRepository.findByEmail(email);

		if (userAlreadyExists) {
			throw new AppError("User already exists!");
		}

		const passwordHash = await hash(password, 8);

		await this.usersRepository.create({
			name,
			password: passwordHash,
			email,
			driver_license,
		});
	}
}

export { CreateUserService };
