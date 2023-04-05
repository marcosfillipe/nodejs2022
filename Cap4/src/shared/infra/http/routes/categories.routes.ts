import { Router } from "express";
import multer from "multer";

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

categoriesRoutes.post("/", createCategoriesController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
	"/import",
	upload.single("file"),
	importCategoriesController.handle
);

export { categoriesRoutes };
