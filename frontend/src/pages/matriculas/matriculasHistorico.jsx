import { useEffect, useState } from "react";
import api from "../../services/api";
import "../matriculas/matriculas.css";

export default function MatriculasHistorico() {
  const [matriculas, setMatriculas] = useState([]);
  const [carregando, setCarregando] = useState(false);

  const buscarMatriculas = async () => {
    try {
      const response = await api.get("/matriculas/historico");
      setMatriculas(response.data);
    } catch (error) {
      console.error("Erro ao buscar histórico de matrículas:", error);
      alert("Erro ao buscar histórico de matrículas.");
    } finally {
      setCarregando(false);
    }
  };

  const inativarMatricula = async (id) => {
    const confirmacao = window.confirm(
      "Deseja realmente inativar esta matrícula?",
    );

    if (!confirmacao) return;

    try {
      await api.patch(`/matriculas/${id}/inativar`);
      buscarMatriculas();
    } catch (error) {
      alert("Erro ao inativar matrícula");
    }
  };

  useEffect(() => {
    buscarMatriculas();
  }, []);

  useEffect(() => {
    console.log("Matrículas recebidas:", matriculas);
  }, [matriculas]);

  if (carregando) {
    return (
      <div className="dashboard">
        <div className="loading">Carregando histórico de matrículas...</div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">📚 Histórico de Matrículas</h2>

      {matriculas.length === 0 ? (
        <p className="empty">Nenhuma matrícula encontrada.</p>
      ) : (
        <div className="grid-matriculas">
          {matriculas.map((matricula) => (
            <div className="card" key={matricula.id}>
              <div className="card-header">
                <span className="matricula-id">#{matricula.id}</span>

                <span
                  className={`badge ${matricula.ativo ? "badge-success" : "badge-danger"}`}
                >
                  {matricula.ativo ? "Ativa" : "Inativa"}
                </span>
              </div>

              <div className="card-body">
                <p>
                  <strong>Aluno:</strong> {matricula.aluno.nome}
                </p>
                <p>
                  <strong>CPF:</strong> {matricula.aluno.cpf}
                </p>
                <p>
                  <strong>Email:</strong> {matricula.aluno.email}
                </p>
                <p>
                  <strong>Data:</strong>{" "}
                  {new Date(matricula.dataMatricula).toLocaleDateString()}
                </p>
              </div>

              {matricula.ativo && (
                <button
                  className="btn-danger"
                  onClick={() => inativarMatricula(matricula.id)}
                >
                  🗑 Inativar matrícula
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
