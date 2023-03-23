import { Request, Response } from "express";
import { ListSpecificationService } from "./ListSpecificationService";

class ListSpecificationController {
  constructor(private listSpecificationService: ListSpecificationService) {}
  handle(request: Request, response: Response) {
    const all = this.listSpecificationService.execute();

    return response.json(all);
  }
}

export { ListSpecificationController };
