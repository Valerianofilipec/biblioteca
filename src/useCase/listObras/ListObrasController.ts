import { Request, Response } from "express"
;
import { ListObrasUseCase } from "./ListObrasUseCase";

class ListObrasController{
    constructor(private listObrasUseCase: ListObrasUseCase){}

    async handle(request: Request,  response: Response){
        
        const obras = await this.listObrasUseCase.execute();

        return response.json(obras);
    }
}

export {ListObrasController};