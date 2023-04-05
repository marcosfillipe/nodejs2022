import { AppError } from "../../../../errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryService } from "./CreateCategoryService";

let createCategoryService: CreateCategoryService;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {
	beforeEach(() => {
		categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
		createCategoryService = new CreateCategoryService(
			categoriesRepositoryInMemory
		);
	});

	it("should be able to ceate a new category", async () => {
		const category = {
			name: "Category Test",
			description: "Category description Test",
		};

		await createCategoryService.execute({
			name: category.name,
			description: category.description,
		});

		const categoryCreated = await categoriesRepositoryInMemory.findByName(
			category.name
		);

		expect(categoryCreated).toHaveProperty("id");
	});

	it("should not be able to ceate a new category with name exist", async () => {
		expect(async () => {
			const category = {
				name: "Category Test",
				description: "Category description Test",
			};

			await createCategoryService.execute({
				name: category.name,
				description: category.description,
			});

			await createCategoryService.execute({
				name: category.name,
				description: category.description,
			});
		}).rejects.toBeInstanceOf(AppError);
	});
});
