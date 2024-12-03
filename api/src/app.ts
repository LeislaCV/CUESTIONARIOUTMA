import express, { Application, Request, Response } from "express";
import cors from "cors";
import { registerUsers, singin } from "./controllers/UserController";
import { registerQuestionnaire } from "./controllers/questionnaireController";

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
    res.send("Hola desde mi servidor con TS");
})

//USUARIOS

app.post("/users/create", registerUsers);
app.post("/users/signin", singin);
app.post("/question/questionnaires", registerQuestionnaire);




export default app;