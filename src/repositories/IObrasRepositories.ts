import { Obras } from "../entities/Obras";

interface IObrasRepositories{
    create(obra: Obras): Promise<void>;

    findById(id: string): Promise<Obras | null>;
    
    listObras():Promise<any>;

    deleteObra(id: string):Promise<void>;

    updateObra(id: string, obra: Obras): Promise<void>;
}

export{IObrasRepositories};