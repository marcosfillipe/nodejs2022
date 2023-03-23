import { Router } from "express";
import multer from "multer";

import { createCategoriesController } from "../modules/cars/useCase/createCategories";
import { listCategoriesController } from "../modules/cars/useCase/listCategories";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
  return createCategoriesController.handle(request, response);
});

categoriesRoutes.get("/", (resquest, response) => {
  return listCategoriesController.handle(resquest, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  const { file } = request;
  console.log(file);
  return response.send();
});

export { categoriesRoutes };
