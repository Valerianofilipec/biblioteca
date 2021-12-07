import { ObrasPostgresRepository } from "../../repositories/implementations/ObrasPostgresRepositories";
import { CreateObraController } from "./CreateObraController";

import { CreateObraUseCase } from "./CreateObraUseCase";


const obrasRepository = new ObrasPostgresRepository();

const createObraUseCase = new CreateObraUseCase(obrasRepository);

const createObraController = new CreateObraController(createObraUseCase);


export{createObraController};