import { inject, injectable } from "tsyringe";

import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
	name: string;
	description: string;
}
@injectable()
class CreateSpecificationService {
	constructor(
		@inject("SpecificationRepository")
		private specificateRepository: ISpecificationRepository
	) {}

	async execute({ name, description }: IRequest): Promise<void> {
		const specificationAlreadyExists =
			await this.specificateRepository.findByName(name);

		if (specificationAlreadyExists) {
			throw new AppError("Specification already exists");
		}

		await this.specificateRepository.create({
			name,
			description,
		});
	}
}

export { CreateSpecificationService };
