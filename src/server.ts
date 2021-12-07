import express from "express";
import { router } from "./routes";
import cors from "cors";
import "./database/runMigrations";

const app = express();

app.use(cors());
app.use(express.json());
app.listen(3333,()=>{console.log("Servidor ligado à porta 3333")} );
app.use(router);