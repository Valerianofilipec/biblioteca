import { ObrasPostgresRepository } from "../../repositories/implementations/ObrasPostgresRepositories";
import { UpdateObraController } from "./UpdateObraController";
import { UpdateObraUseCase } from "./UpdateObraUseCase";


const obrasRepository = new ObrasPostgresRepository();

const updateObraUseCase = new UpdateObraUseCase(obrasRepository);

const updateObraController = new UpdateObraController(updateObraUseCase);


export{updateObraController};