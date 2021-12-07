import { Pool } from "pg";
import { Obras } from "../../entities/Obras";
import { IObrasRepositories } from "../IObrasRepositories";

import { createConnection } from "../../database/connect"


class ObrasPostgresRepository implements IObrasRepositories{
    private client: Pool;

    constructor(){
        createConnection().then((connection) => (this.client = connection) )
    }

    async create({id, titulo, editora, foto, autores}: Obras): Promise<void> {
        await this.client.query("INSERT INTO OBRAS(ID, TITULO, EDITORA, FOTO, AUTORES) VALUES($1, $2, $3, $4, $5)", [
            id,
            titulo,
            editora,
            foto,
            autores,
        ]);
    }
    
    async findById(idObra: string): Promise<Obras> {
        //throw new Error("Method not implemented.");
        const { rows } = await this.client.query("SELECT * FROM OBRAS WHERE ID = $1 LIMIT 1", [idObra]);

        if(rows.length > 0){
            const {id, titulo, editora, foto, autores} = rows[0];

            const obra: Obras = {
                id,
                titulo,
                editora,
                foto,
                autores,
            };

            return obra;
        }
        return null;
        
    }

    async listObras():Promise<any>{
        let { rows } = await this.client.query("SELECT * FROM OBRAS");

        return rows;
    }

    async deleteObra(idObra: string): Promise<void> {
        await this.client.query(`DELETE FROM OBRAS WHERE ID = '${idObra}'`);
    }

    async updateObra(idObra: string, {titulo=null, editora=null, foto=null, autores=null}): Promise<void> {

       const { rows } = await this.client.query("SELECT * FROM OBRAS WHERE ID = $1 LIMIT 1", [idObra]);

       const obraTarget = rows[0];

        await this.client.query("UPDATE OBRAS SET TITULO = $1, EDITORA = $2, FOTO = $3, AUTORES = $4 WHERE ID = $5", [
            titulo ?? obraTarget.titulo,
            editora ?? obraTarget.editora,
            foto ?? obraTarget.foto,
            autores ?? obraTarget.autores,
            idObra
        ]);
    }
}
export {ObrasPostgresRepository};