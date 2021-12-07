import { ObrasPostgresRepository } from "../../repositories/implementations/ObrasPostgresRepositories";
import { ListObrasController } from "./ListObrasController";

import { ListObrasUseCase } from "./ListObrasUseCase";


const obrasRepository = new ObrasPostgresRepository();

const listObrasUseCase = new ListObrasUseCase(obrasRepository);

const listObrasController = new ListObrasController(listObrasUseCase);


export{listObrasController};