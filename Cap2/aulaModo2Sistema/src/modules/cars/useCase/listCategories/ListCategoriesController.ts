import { Request, Response } from 'express'
import { ListCategoriesService } from './ListCategoriesService'


class ListCategoriesController {

    constructor(private listCategoriesService: ListCategoriesService) {

    }

    hande(request: Request, response: Response) {

        const all = this.listCategoriesService.execute();

        return response.json(all);


    }


}

export { ListCategoriesController }