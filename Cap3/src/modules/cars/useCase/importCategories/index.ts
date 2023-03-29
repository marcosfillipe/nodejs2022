import { CategoriesRepository } from "../../repositories/implemetations/CategoriesRepository";
import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesService } from "./ImportCategoriesService";

const categoriesRepository = null;
const importCategoriesService = new ImportCategoriesService(
  categoriesRepository
);
const importCategoriesController = new ImportCategoriesController(
  importCategoriesService
);

export { importCategoriesController };
