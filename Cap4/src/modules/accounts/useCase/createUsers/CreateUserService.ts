import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { AppError } from "../../../../errors/AppError";

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
