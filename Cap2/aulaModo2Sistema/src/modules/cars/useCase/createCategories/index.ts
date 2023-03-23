import { CategoriesRepository } from "../../repositories/implemetations/CategoriesRepository";
import { CreateCategoriesController } from "./CreateCategoriesController";
import { CreateCategoryService } from "./CreateCategoryService";

const createCategoriesRepository = CategoriesRepository.getInstance();

const createCategoryService = new CreateCategoryService(
  createCategoriesRepository
);

const createCategoriesController = new CreateCategoriesController(
  createCategoryService
);

export { createCategoriesController };
