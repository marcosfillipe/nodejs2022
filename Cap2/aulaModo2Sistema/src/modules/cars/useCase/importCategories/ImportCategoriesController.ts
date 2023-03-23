import {Request, Response} from "express"


class ImportCategoriesController {
    handle(request: Request, response: Response): Response {
        const file = request;
        console.log(file);


        return response.send();
    }
}

export { ImportCategoriesController }