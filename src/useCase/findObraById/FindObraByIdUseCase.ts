import {IObrasRepositories} from "../../repositories/IObrasRepositories";

class FindObraByIdUseCase{
    constructor(private obrasRepositories: IObrasRepositories){
    }

    async execute(id: string){
        const obra = await this.obrasRepositories.findById(id);
        return obra;
    }
}

export{ FindObraByIdUseCase};