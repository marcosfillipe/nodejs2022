import { Request, Response } from "express";
import { CreateSpecificationService } from "./CreateSpecificationService";

class CreateSpecificationController {
  constructor(private createSpecificationService: CreateSpecificationService) {}

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    this.createSpecificationService.execute({ name, description });

    response.status(202).send();
  }
}

export { CreateSpecificationController };
