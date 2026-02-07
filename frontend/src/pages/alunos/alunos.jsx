// ================== IMPORTS ==================

import api from "../../services/api";
import { useState, useEffect } from "react";
import { FaTrash, FaSearch, FaUserPlus, FaUserGraduate } from "react-icons/fa";
import "./alunos.css";

// ================== COMPONENT ==================

export default function Alunos() {
  // ===== STATES =====

  const [aluno, setAluno] = useState({
    nome: "",
    email: "",
    cpf: "",
  });

  const [alunos, setAlunos] = useState([]);

  const [search, setSearch] = useState("");

  const [erroCpf, setErroCpf] = useState("");

  // ===== FUNÇÕES DE API =====
  const buscarAlunos = async () => {
    try {
      const response = await api.get("/alunos", {
        params: search ? { search } : {},
      });
      setAlunos(response.data);
    } catch (error) {
      console.log("Erro ao buscar alunos: ", error);
    }
  };

  // ===== EFEITOS =====
  useEffect(() => {
    buscarAlunos();
  }, []);

  // ===== HANDLERS =====

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cpf") {
      const somenteNumeros = value.replace(/\D/g, "");

      setErroCpf("");

      setAluno({
        ...aluno,
        [name]: somenteNumeros,
      });
      return;
    }

    setAluno({
      ...aluno,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (aluno.cpf.length !== 11) {
      setErroCpf("CPF deve conter 11 dígitos.");
      return;
    }

    try {
      await api.post("/alunos", aluno);

      // console.log("Aluno cadastrado com sucesso: ", response.data);
      buscarAlunos();

      setAluno({
        nome: "",
        email: "",
        cpf: "",
      });
    } catch (error) {
      const mensagem =
        error.response?.data?.mensagem || "Erro ao cadastrar aluno.";
      alert(mensagem);
    }
  };

  const inativarAluno = async (id) => {
    const confirmar = window.confirm("Deseja realmente inativar este aluno?");

    if (!confirmar) return;

    try {
      await api.delete(`/alunos/${id}`);
      buscarAlunos();
    } catch (error) {
      alert("Erro ao inativar aluno");
    }
  };

  // ===== RENDER =====

  return (
    <div className="alunos-page">
      <h1 className="alunos-title">Sistema de Cadastro de Alunos</h1>

      {/* ===== FORMULÁRIO ===== */}
      <div className="alunos-card">
        <h3>
          <FaUserPlus /> Novo Aluno
        </h3>

        <form className="alunos-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={aluno.nome}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={aluno.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            value={aluno.cpf}
            onChange={handleChange}
            maxLength={11}
            required
          />

          {erroCpf && <p className="erro-texto">{erroCpf}</p>}

          <button type="submit" className="btn btn-primary">
            <FaUserPlus /> Cadastrar Aluno
          </button>
        </form>
      </div>

      {/* ===== BUSCA ===== */}
      <div>
        <h3 className="section-title">
          <FaSearch /> Pesquisar Alunos
        </h3>

        <div className="alunos-search">
          <input
            type="text"
            placeholder="Pesquise por nome ou CPF"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={buscarAlunos} className="btn-search">
            <FaSearch /> Buscar
          </button>
        </div>
      </div>
      <h3 className="section-title">
        <FaUserGraduate /> Lista de Alunos
      </h3>

      {/* ===== LISTA ===== */}
      {alunos.length === 0 ? (
        <div className="empty-state">
          <h3>Nenhum aluno encontrado</h3>
          <p>Cadastre um novo aluno usando o formulário acima.</p>
        </div>
      ) : (
        <div className="alunos-list">
          {alunos.map((item) => (
            <div key={item.id} className="aluno-card">
              <p>
                <strong>Nome:</strong> {item.nome}
              </p>
              <p>
                <strong>Email:</strong> {item.email}
              </p>
              <p>
                <strong>CPF:</strong> {item.cpf}
              </p>

              <button
                className="btn-delete"
                onClick={() => inativarAluno(item.id)}
                title="Inativar aluno"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
