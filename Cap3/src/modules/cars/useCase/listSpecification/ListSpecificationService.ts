import { Specification } from "../../entities/Specification";
import { inject, injectable } from "tsyringe"
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";


@injectable()
class ListSpecificationService {
  constructor(
    @inject("SpecificationRepository")
    private listSpecificationRepository: ISpecificationRepository) { }

  async execute(): Promise<Specification[]> {
    const all = await this.listSpecificationRepository.list();
    return all;
  }
}

export { ListSpecificationService };
