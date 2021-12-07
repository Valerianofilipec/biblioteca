import { Request, Response } from "express"
;
import { FindObraByIdUseCase } from "./FindObraByIdUseCase";

class FindObraByIdController{
    constructor(private findObraByIdUseCase: FindObraByIdUseCase){}

    async handle(request: Request,  response: Response){
        const {id} = request.params;

        const obra = await this.findObraByIdUseCase.execute(id);

        return response.json(obra);
    }
}

export {FindObraByIdController};