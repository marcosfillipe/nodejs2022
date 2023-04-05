import { AppError } from "@shared/errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";

import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserService } from "@modules/accounts/useCase/createUsers/CreateUserService";

import { AuthenticateUserService } from "./AuthenticateUserService";

let authenticateUserService: AuthenticateUserService;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;

describe("Authenticate User", () => {
	beforeEach(() => {
		usersRepositoryInMemory = new UsersRepositoryInMemory();
		authenticateUserService = new AuthenticateUserService(
			usersRepositoryInMemory
		);
		createUserService = new CreateUserService(usersRepositoryInMemory);
	});

	it("should be able to authenticate an user", async () => {
		const user: ICreateUserDTO = {
			driver_license: "0001254",
			email: "user@example.com",
			password: "1122",
			name: "John Doe",
		};

		await createUserService.execute(user);

		const result = await authenticateUserService.execute({
			email: user.email,
			password: user.password,
		});

		expect(result).toHaveProperty("token");
	});

	it("should not be able to authenticate an nonexistent user", () => {
		expect(async () => {
			await authenticateUserService.execute({
				email: "false@example.com",
				password: "1254",
			});
		}).rejects.toBeInstanceOf(AppError);
	});

	it("should not be able to authenticate with incorrect password", () => {
		expect(async () => {
			const user: ICreateUserDTO = {
				driver_license: "9999",
				email: "user@example.com",
				password: "1254",
				name: "John Doe",
			};

			await createUserService.execute(user);

			await authenticateUserService.execute({
				email: user.email,
				password: "incorrectPassword",
			});
		}).rejects.toBeInstanceOf(AppError);
	});
});
