import { CategoriesRepository } from "../../repositories/implemetations/CategoriesRepository";
import { CreateCategoriesController } from "./CreateCategoriesController";
import { CreateCategoryService } from "./CreateCategoryService";

export default (): CreateCategoriesController => {
  const createCategoriesRepository = new CategoriesRepository();

  const createCategoryService = new CreateCategoryService(
    createCategoriesRepository
  );

  const createCategoriesController = new CreateCategoriesController(
    createCategoryService
  );

  return createCategoriesController;
};
