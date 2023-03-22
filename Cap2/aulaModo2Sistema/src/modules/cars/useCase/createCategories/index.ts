import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoriesController } from "./CreateCategoriesController";
import { CreateCategoryService } from "./CreateCategoryService";



const createCategoriesRepository = new CategoriesRepository();

const createCategoryService = new CreateCategoryService(createCategoriesRepository);

const createCategoriesController = new CreateCategoriesController(createCategoryService);


export { createCategoriesController }