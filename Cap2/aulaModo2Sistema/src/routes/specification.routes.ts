import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCase/createSpecification";
import { listSpecificationController } from "../modules/cars/useCase/listSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});
specificationsRoutes.get("/", (request, response) => {
  return listSpecificationController.handle(request, response);
});

export { specificationsRoutes };
