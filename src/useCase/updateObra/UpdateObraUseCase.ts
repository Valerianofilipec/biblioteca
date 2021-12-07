import { Obras } from "../../entities/Obras";
import { IObrasRepositories } from "../../repositories/IObrasRepositories";



class UpdateObraUseCase{

    constructor(private obrasRepository: IObrasRepositories){

    }

    async execute(id: string,obra: Obras){
        await this.obrasRepository.updateObra(id,obra);
    }
}

export {UpdateObraUseCase};