import { Obras } from "../../entities/Obras";
import { IObrasRepositories } from "../../repositories/IObrasRepositories";


interface CreateObraDTO{
    titulo: string;
    editora:string;
    foto: string;
    autores: [string];
}

class CreateObraUseCase{

    constructor(private obrasRepository: IObrasRepositories){

    }

    async execute({titulo, editora, foto, autores}: CreateObraDTO){
        var obra = new Obras();

        obra = Object.assign({
            ...obra,
            titulo,
            editora,
            foto,
            autores,
        });

        await this.obrasRepository.create(obra);
    }
}

export {CreateObraUseCase};