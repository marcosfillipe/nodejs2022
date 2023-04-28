import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { CreateCarController } from "@modules/cars/useCase/createCar/CreateCarController";

const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.post(
	"/",
	ensureAuthenticated,
	ensureAdmin,
	createCarController.handle
);

export { carsRoutes };
