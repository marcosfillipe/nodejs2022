import { Router } from "express";
import multer from "multer";

import { CreateCategoriesController } from "../modules/cars/useCase/createCategories/CreateCategoriesController";
import { importCategoriesController } from "../modules/cars/useCase/importCategories";
import { listCategoriesController } from "../modules/cars/useCase/listCategories";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoriesController = new CreateCategoriesController();

categoriesRoutes.post("/", createCategoriesController.handle);

categoriesRoutes.get("/", (resquest, response) => {
  return listCategoriesController.handle(resquest, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoriesController.handle(request, response);
});

export { categoriesRoutes };
