import { createConnection } from "typeorm";

createConnection().then(()=> console.log("📦 Sucess full DataBase"));