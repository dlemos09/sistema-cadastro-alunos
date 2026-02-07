import prisma from "../prisma/client.js";

// ================= CRIAR MATRÍCULA ==================
export const criarMatricula = async (req, res) => {
  try {
    const { alunoId } = req.body;

    if (!alunoId) {
      return res.status(400).json({ erro: "Aluno é obrigatório" });
    }

    const alunoExiste = await prisma.aluno.findUnique({
      where: { id: alunoId },
    });

    if (!alunoExiste) {
      return res.status(404).json({
        erro: "Aluno não encontrado. Não é possível criar matrícula.",
      });
    }

     const matriculaAtiva = await prisma.matricula.findFirst({
      where: {
        alunoId,
        ativo: true,
      },
    });

    if (matriculaAtiva) {
      return res.status(409).json({
        erro: "Aluno já possui matrícula ativa",
      });
    }


    const matricula = await prisma.matricula.create({
      data: {
        alunoId,
        dataMatricula: new Date(), // ✅ gerado pelo sistema
      },
    });

    return res.status(201).json(matricula);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: "Erro ao criar matrícula" });
  }
};

// ================= LISTAR HISTÓRICO DE MATRÍCULAS ==================
export const listarHistoricoMatriculas = async (req, res) => {
  try {
    const matriculas = await prisma.matricula.findMany({
      include: { aluno: true }
    });

    return res.json(matriculas);
  } catch (error) {
    return res.status(500).json({
      mensagem: 'Erro ao buscar histórico de matrículas'
    });
  }
};

// ================= INATIVAR MATRÍCULA ==================
export const inativarMatricula = async (req, res) => {
  try {
    const { id } = req.params;

    const matricula = await prisma.matricula.findUnique({
      where: { id: Number(id) },
    });

    if (!matricula) {
      return res.status(404).json({ erro: "Matrícula não encontrada" });
    }

    if (!matricula.ativo) {
      return res.status(400).json({ erro: "Matrícula já está inativa" });
    }

    await prisma.matricula.update({
      where: { id: Number(id) },
      data: {
        ativo: false,
        dataInativacao: new Date(),
      },
    });

    return res.json({ mensagem: "Matrícula inativada com sucesso" });
  } catch (error) {
    return res.status(500).json({ erro: "Erro ao inativar matrícula" });
  }
};
