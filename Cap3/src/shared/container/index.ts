import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implemetations/CategoriesRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/implemetations/SpecificationRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationrepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);
