import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesService {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute(): Category[] {
    const all = this.categoriesRepository.list();

    return all;
  }
}

export { ListCategoriesService };
