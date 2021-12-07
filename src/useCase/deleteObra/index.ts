import { ObrasPostgresRepository } from "../../repositories/implementations/ObrasPostgresRepositories";
import { DeleteObraController } from "./DeleteObraController";

import { DeleteObraUseCase } from "./DeleteObraUseCase";


const obrasRepository = new ObrasPostgresRepository();

const deleteObraUseCase = new DeleteObraUseCase(obrasRepository);

const deleteObraController = new DeleteObraController(deleteObraUseCase);


export{deleteObraController};