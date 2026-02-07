import express from "express";
import cors from "cors";

import alunoRoutes from "./routes/aluno.routes.js";
import matriculaRoutes from "./routes/matricula.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/alunos", alunoRoutes);
app.use("/matriculas", matriculaRoutes);

export default app;
