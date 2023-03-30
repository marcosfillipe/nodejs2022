import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCase/createSpecification/CreateSpecificationController";
import { listSpecificationController } from "../modules/cars/useCase/listSpecification";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post("/", createSpecificationController.handle);
specificationsRoutes.get("/", (request, response) => {
  return listSpecificationController.handle(request, response);
});

export { specificationsRoutes };
