import { Request, Response } from "express";
import { ImportCategoriesService } from "./ImportCategoriesService";

class ImportCategoriesController {
  constructor(private importCategoriesService: ImportCategoriesService) {}
  handle(request: Request, response: Response): Response {
    const file = request;

    if (!file) {
      return response.status(400).send("File not sent");
    }
    this.importCategoriesService.execute(file.file);

    return response.send();
  }
}

export { ImportCategoriesController };
