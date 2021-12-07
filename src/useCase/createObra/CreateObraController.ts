import { Request, Response } from "express"
;
import { CreateObraUseCase } from "./CreateObraUseCase";

class CreateObraController{
    constructor(private createObraUseCase: CreateObraUseCase){}

    async handle(request: Request, response: Response){
        const {titulo, editora, foto, autores} = request.body;

        await this.createObraUseCase.execute({titulo, editora, foto, autores});

        return response.send();
    }
}

export {CreateObraController};