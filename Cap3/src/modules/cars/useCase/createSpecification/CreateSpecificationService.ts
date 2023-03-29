import { ISpecificationRepository } from "../../repositories/ISpecificationrepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificateRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificateRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists");
    }

    this.specificateRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };
