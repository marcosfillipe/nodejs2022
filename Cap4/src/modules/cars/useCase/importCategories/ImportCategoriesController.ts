import { Request, Response } from "express";
import { ImportCategoriesService } from "./ImportCategoriesService";
import { container } from "tsyringe"

class ImportCategoriesController {

  async handle(request: Request, response: Response): Promise<Response> {
    const file = request;
    const importCategoryService = container.resolve(ImportCategoriesService)

    if (!file) {
      return response.status(400).send("File not sent");
    }
    await importCategoryService.execute(file.file);

    return response.status(201).send();
  }
}

export { ImportCategoriesController };
