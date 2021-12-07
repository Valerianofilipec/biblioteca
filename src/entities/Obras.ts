import { v4 as uuidV4 } from "uuid";
class Obras {
    id: string;
    titulo: string;
    editora:string;
    foto: string;
    autores: [string];

    constructor(){
        if (!this.id){
            this.id = uuidV4();
        }
    }
};

export {Obras};