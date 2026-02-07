import e, { Router } from "express";
import {
  criarMatricula,
  listarHistoricoMatriculas,
  inativarMatricula,
} from "../controllers/matricula.controller.js";

const router = Router();

router.post("/", criarMatricula);
router.get("/historico", listarHistoricoMatriculas);
router.patch('/:id/inativar', inativarMatricula);

export default router;
