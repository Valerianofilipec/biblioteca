import {IObrasRepositories} from "../../repositories/IObrasRepositories";

class ListObrasUseCase{
    constructor(private obrasRepositories: IObrasRepositories){
    }

    async execute(){
        const obras = await this.obrasRepositories.listObras();
        return obras;
    }
}

export{ ListObrasUseCase};