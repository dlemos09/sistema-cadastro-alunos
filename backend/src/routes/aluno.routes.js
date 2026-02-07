import { Router } from "express";
import { criarAluno, listarAlunos, excluirAluno, buscarAlunos } from "../controllers/aluno.controller.js";

const router = Router();

router.post("/", criarAluno);
router.get("/", listarAlunos);
router.get("/buscar", buscarAlunos);
router.delete("/:id", excluirAluno);

export default router;
