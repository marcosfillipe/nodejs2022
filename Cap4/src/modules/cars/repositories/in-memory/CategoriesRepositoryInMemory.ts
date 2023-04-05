import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import {
	ICategoriesRepository,
	ICreateCategoryDTO,
} from "@modules/cars/repositories/ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
	categories: Category[] = [];

	async findByName(name: string): Promise<Category> {
		const category = this.categories.find((c) => c.name === name);
		return category;
	}
	async list(): Promise<Category[]> {
		const list: Category[] = [];
		return list;
	}
	async create({ name, description }: ICreateCategoryDTO): Promise<void> {
		const categories = new Category();

		Object.assign(categories, {
			name,
			description,
		});

		this.categories.push(categories);
	}
}

export { CategoriesRepositoryInMemory };
