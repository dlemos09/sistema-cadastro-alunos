import { FaUserGraduate, FaClipboardList, FaHistory } from "react-icons/fa";
import "../matriculas/matriculas.css";

export default function Home() {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">🎓 Bem-vindo ao Sistema Escolar</h1>

      <div className="grid-matriculas">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              <FaUserGraduate /> Alunos
            </h3>
          </div>
          <div className="card-body">
            <p>Cadastre e gerencie os alunos da instituição.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              <FaClipboardList /> Matrículas
            </h3>
          </div>
          <div className="card-body">
            <p>Realize matrículas de alunos nos cursos disponíveis.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              <FaHistory /> Histórico
            </h3>
          </div>
          <div className="card-body">
            <p>Consulte o histórico completo de matrículas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
