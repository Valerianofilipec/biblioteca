import { ObrasPostgresRepository } from "../../repositories/implementations/ObrasPostgresRepositories";
import { FindObraByIdController } from "./FindObraByIdController";

import { FindObraByIdUseCase } from "./FindObraByIdUseCase";


const obrasRepository = new ObrasPostgresRepository();

const findObraByIdUseCase = new FindObraByIdUseCase(obrasRepository);

const findObraByIdController = new FindObraByIdController(findObraByIdUseCase);


export{findObraByIdController};