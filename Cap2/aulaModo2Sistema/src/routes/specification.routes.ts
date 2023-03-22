import { Router } from "express"
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();

const createSpecificationRepository = new SpecificationRepository();


specificationsRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const createSpecificationService = new CreateSpecificationService(createSpecificationRepository);

    createSpecificationService.execute({
        name,
        description
    });

    response.status(202).send();

});


export { specificationsRoutes }