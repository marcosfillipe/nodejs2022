import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoriesController } from "../modules/cars/useCase/createCategories";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {

  return createCategoriesController.handle(request, response);
});

categoriesRoutes.get("/", (resquest, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
});

export { categoriesRoutes };
