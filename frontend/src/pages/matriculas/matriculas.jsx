// ================== IMPORTS ==================
import { useState } from "react";
import api from "../../services/api";

// ================== COMPONENT ==================
export default function Matriculas() {
  // ===== STATES =====
  const [termoBusca, setTermoBusca] = useState("");
  const [alunos, setAlunos] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [mensagem, setMensagem] = useState("");

  // ===== BUSCAR ALUNOS =====
  const buscarAlunos = async () => {
    if (!termoBusca.trim()) {
      setMensagem("Digite um nome ou CPF para buscar.");
      return;
    }

    try {
      setCarregando(true);
      setMensagem("");
      const response = await api.get(`/alunos/buscar?termo=${termoBusca}`);

      if (response.data.length === 0) {
        setMensagem("Nenhum aluno encontrado.");
      }

      setAlunos(response.data);
    } catch (error) {
      console.error("Erro ao buscar alunos:", error);
      setMensagem("Erro ao buscar alunos");
    } finally {
      setCarregando(false);
    }
  };

  // ===== MATRICULAR ALUNO =====
  const matricularAluno = async (alunoId) => {
    try {
      await api.post("/matriculas", { alunoId });
      setMensagem("Aluno matriculado com sucesso!");
      setAlunos([]);
      setTermoBusca("");
    } catch (error) {
      if (error.response?.status === 409) {
        setMensagem("Este aluno já possui uma matrícula ativa.");
        return;
      }

      setMensagem("Erro ao realizar matrícula.");
    }
  };

  // ===== RENDER =====
  return (
    <div className="matricula-page">
      <h2 className="matricula-title">📝 Matrícula de Alunos</h2>

      <div className="matricula-search">
        <input
          type="text"
          placeholder="Buscar por nome ou CPF"
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && buscarAlunos()}
        />

        <button onClick={buscarAlunos} disabled={carregando}>
          {carregando ? "🔍 Buscando..." : "🔍 Buscar"}
        </button>
      </div>

      {mensagem && <p className="matricula-message">{mensagem}</p>}

      {alunos.length > 0 && (
        <ul className="matricula-result">
          {alunos.map((aluno) => (
            <li key={aluno.id} className="matricula-item">
              <div className="matricula-item-info">
                <p>
                  <strong>Nome:</strong> {aluno.nome}
                </p>
                <p>
                  <strong>CPF:</strong> {aluno.cpf}
                </p>
                <p>
                  <strong>Email:</strong> {aluno.email}
                </p>
              </div>

              <button onClick={() => matricularAluno(aluno.id)}>
                ✅ Matricular
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
