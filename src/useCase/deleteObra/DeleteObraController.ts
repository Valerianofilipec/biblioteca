import { Request, Response } from "express"
;
import { DeleteObraUseCase } from "./DeleteObraUseCase";

class DeleteObraController{
    constructor(private deleteObraUseCase: DeleteObraUseCase){}

    async handle(request: Request,  response: Response){
        const {id} = request.params;

         await this.deleteObraUseCase.execute(id);

        console.log(`Deleting this obra w/ id: ${id}`);

        return response.send();
    }
}

export {DeleteObraController};