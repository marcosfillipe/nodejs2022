import { SpecificationRepository } from "../../repositories/implemetations/SpecificationRepository";
import { CreateSpecificationService } from "../../useCase/createSpecification/CreateSpecificationService";
import { CreateSpecificationController } from "./CreateSpecificationController";

const createSpecificationRepository = SpecificationRepository.getInstance();
const createSpecificationService = new CreateSpecificationService(
  createSpecificationRepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationService
);

export { createSpecificationController };
