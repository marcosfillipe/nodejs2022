import { Specification } from "../../model/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationrepository";

class ListSpecificationService {
  constructor(private listSpecificationRepository: ISpecificationRepository) {}

  execute(): Specification[] {
    const all = this.listSpecificationRepository.list();
    return all;
  }
}

export { ListSpecificationService };
