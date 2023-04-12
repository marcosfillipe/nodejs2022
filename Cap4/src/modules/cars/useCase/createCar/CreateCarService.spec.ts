import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarService } from "./CreateCarService";
import { AppError } from "@shared/errors/AppError";

let createCarService: CreateCarService;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
	beforeEach(() => {
		carsRepositoryInMemory = new CarsRepositoryInMemory();
		createCarService = new CreateCarService(carsRepositoryInMemory);
	});

	it("should be able to create a new car", async () => {
		const car = await createCarService.execute({
			name: "Car Name",
			description: "Car Description",
			daily_rate: 100,
			license_plate: "ABC-12345",
			fine_amount: 60,
			brand: "Brand",
			category_id: "category",
		});

		expect(car).toHaveProperty("id");
	});

	it("should not be able to create a car with exist license plate", () => {
		expect(async () => {
			await createCarService.execute({
				name: "Car Name 1",
				description: "Car Description",
				daily_rate: 100,
				license_plate: "ABC-12345",
				fine_amount: 60,
				brand: "Brand",
				category_id: "category",
			});

			await createCarService.execute({
				name: "Car Name 2",
				description: "Car Description",
				daily_rate: 100,
				license_plate: "ABC-12345",
				fine_amount: 60,
				brand: "Brand",
				category_id: "category",
			});
		}).rejects.toBeInstanceOf(AppError);
	});

	it("should not be able to create a car with available true by default", async () => {
		const car = await createCarService.execute({
			name: "Car Available",
			description: "Car Description",
			daily_rate: 100,
			license_plate: "ABCD-12345",
			fine_amount: 60,
			brand: "Brand",
			category_id: "category",
		});

		expect(car.available).toBe(true);
	});
});
