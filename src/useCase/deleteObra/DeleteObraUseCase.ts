import {IObrasRepositories} from "../../repositories/IObrasRepositories";

class DeleteObraUseCase{
    constructor(private obrasRepositories: IObrasRepositories){
    }

    async execute(id: string){
        await this.obrasRepositories.deleteObra(id);
    }
}

export{ DeleteObraUseCase};