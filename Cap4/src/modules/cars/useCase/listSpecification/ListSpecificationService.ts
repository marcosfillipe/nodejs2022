import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListSpecificationService {
	constructor(
		@inject("SpecificationRepository")
		private listSpecificationRepository: ISpecificationRepository
	) {}

	async execute(): Promise<Specification[]> {
		const all = await this.listSpecificationRepository.list();
		return all;
	}
}

export { ListSpecificationService };
