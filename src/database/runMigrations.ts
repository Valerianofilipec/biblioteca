import { createConnection } from "./connect";
import path from "path";
import fs from "fs";

(async () => {
    const client = await createConnection();
    const fileDBdir = path.join(__dirname, "migrations");

    console.log(`Start Migration ${new Date()}`);

    fs.readdir(fileDBdir, (err, files) => {
        if (err) { console.log(err);}

        files.forEach((file) => {
            fs.readFile(path.join(fileDBdir, file), async (err, content) => {
                if (err) { console.log(err);}

                const runMigrationQuery = content.toString();
                await client.query(runMigrationQuery);

                console.log(`Sucess running the Query!`);
            });
        })

        console.log(`Finish Migration ${new Date()}`);
    });
    
})();