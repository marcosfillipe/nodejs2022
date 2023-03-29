import { Request, Response } from "express";

import { CreateCategoryService } from "./CreateCategoryService";

class CreateCategoriesController {
  constructor(private createCategoryService: CreateCategoryService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    await this.createCategoryService.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoriesController };
