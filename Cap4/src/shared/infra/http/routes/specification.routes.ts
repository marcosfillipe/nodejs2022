import { Router } from "express";

import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { CreateSpecificationController } from "@modules/cars/useCase/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "@modules/cars/useCase/listSpecification/ListSpecificationController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

specificationsRoutes.post(
	"/",
	ensureAuthenticated,
	ensureAdmin,
	createSpecificationController.handle
);
specificationsRoutes.get("/", listSpecificationController.handle);

export { specificationsRoutes };
