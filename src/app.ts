import express from "express";
import bodyParser from "body-parser";
import { RegisterRoutes } from "../generated/routes";

export const app = express();

// Use body parser to read sent json payloads
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

RegisterRoutes(app);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

