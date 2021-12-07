import { Router } from "express";
import {createObraController} from "./useCase/createObra";
import {findObraByIdController} from "./useCase/findObraById";
import {listObrasController} from "./useCase/listObras";
import {deleteObraController} from "./useCase/deleteObra";
import {updateObraController} from "./useCase/updateObra";

const router = Router();

router.post("/obras", (request, response)=>{
    return createObraController.handle(request, response);
});

router.get("/obras/:id", (request, response)=>{
    return findObraByIdController.handle(request, response);
});

router.get("/obras/", (request, response)=>{
    return listObrasController.handle(request, response);
});

router.delete("/obras/:id", (request, response)=>{
    return deleteObraController.handle(request, response);
});

router.put("/obras/update/:id", (request, response)=>{
    return updateObraController.handle(request, response);
});


export {router};