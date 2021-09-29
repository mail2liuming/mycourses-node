import express from "express";
import cors from "cors";

import { RegisterRoutes } from "../generated/routes";

export const app = express();

app.use(express.urlencoded())
app.use(express.json());
app.use(cors())

RegisterRoutes(app);

if (process.env.ENV == "LOCAL") {
    const PORT = 7000;
    app.listen(PORT, () => {
        console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
    });
}


