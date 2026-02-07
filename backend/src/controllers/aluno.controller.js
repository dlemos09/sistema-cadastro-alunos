import  prisma  from "../prisma/client.js";

// Criar um novo aluno
export const criarAluno = async (req, res) => {
  try {
    const { nome, email, cpf } = req.body;

    if (!nome || !email || !cpf) {
      return res.status(400).json({ erro: "Campos obrigatórios" });
    }

    const aluno = await prisma.aluno.create({
      data: { nome, email, cpf },
    });

    return res.status(201).json(aluno);
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).json({ erro: "Email ou CPF já cadastrado" });
    }

    return res.status(500).json({ erro: "Erro ao criar aluno" });
  }
};

// Buscar alunos por nome ou CPF
export const buscarAlunos = async (req, res) => {
  const {termo} = req.query;

  if(!termo){
    return res.status(400).json({ erro: "Informe o termo de busca" });
  }

  const alunos = await prisma.aluno.findMany({
    where: {
      ativo: true,
      OR: [
        {nome: {contains: termo, mode: 'insensitive'}},
        {cpf: {contains: termo}}
      ]
    }
  });
  return res.json(alunos);
}

// Soft delete do aluno
export const excluirAluno = async (req, res) => {
  try {
    const { id } = req.params;

    const aluno = await prisma.aluno.findUnique({
      where: { id: Number(id) },
    });

    if (!aluno) {
      return res.status(404).json({ erro: "Aluno não encontrado" });
    }

    await prisma.aluno.update({
      where: { id: Number(id) },
      data: { ativo: false },
    });

    return res.json({
      mensagem: "Aluno desativado com sucesso",
    });
  } catch (error) {
    return res.status(500).json({ erro: "Erro ao excluir aluno" });
  }
};

// Listar todos os alunos
export const listarAlunos = async (req, res) => {
  try {
    const { search } = req.query;

    const alunos = await prisma.aluno.findMany({
      where: {
        ativo: true,
        ...(search && {
          OR: [
            {
              nome: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              cpf: {
                contains: search,
              },
            },
          ],
        }),
      },
      orderBy: {
        nome: "asc",
      },
    });

    return res.json(alunos);
  } catch (error) {
    return res.status(500).json({ erro: "Erro ao buscar alunos" });
  }
};

