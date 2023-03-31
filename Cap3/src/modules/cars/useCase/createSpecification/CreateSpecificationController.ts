import { Request, Response } from "express";
import { container } from "tsyringe"
import { CreateSpecificationService } from "./CreateSpecificationService";

class CreateSpecificationController {

  async handle(request: Request, response: Response): Promise<void> {
    const { name, description } = request.body;

    const createSpecificationService = container.resolve(CreateSpecificationService)


    await createSpecificationService.execute({ name, description });

    response.status(202).send();
  }
}

export { CreateSpecificationController };
