import { Request, Response } from "express"
;
import { Obras } from "../../entities/Obras";
import { UpdateObraUseCase } from "./UpdateObraUseCase";

class UpdateObraController{
    constructor(private updateObraUseCase: UpdateObraUseCase){}

    async handle(request: Request, response: Response){
        const {id} = request.params;
        const obra: Obras = request.body;

        await this.updateObraUseCase.execute(id, obra);

        return response.send();
    }
}

export {UpdateObraController};