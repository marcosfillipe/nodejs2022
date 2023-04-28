import { Router } from "express";
import multer from "multer";

import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { CreateCategoriesController } from "@modules/cars/useCase/createCategories/CreateCategoriesController";
import { ImportCategoriesController } from "@modules/cars/useCase/importCategories/ImportCategoriesController";
import { ListCategoriesController } from "@modules/cars/useCase/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

const upload = multer({
	dest: "./tmp",
});

const createCategoriesController = new CreateCategoriesController();
const importCategoriesController = new ImportCategoriesController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.use(ensureAuthenticated);
categoriesRoutes.post(
	"/",
	ensureAuthenticated,
	ensureAdmin,
	createCategoriesController.handle
);
categoriesRoutes.get("/", listCategoriesController.handle);
categoriesRoutes.post(
	"/import",
	upload.single("file"),
	ensureAuthenticated,
	ensureAdmin,
	importCategoriesController.handle
);

export { categoriesRoutes };
