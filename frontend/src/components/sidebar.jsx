import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaClipboardList,
  FaBars,
  FaTimes,
  FaHistory,
} from "react-icons/fa";

export default function Sidebar({ aberto, setAberto }) {
  return (
    <>
      {/* BOTÃO HAMBÚRGUER (mobile) */}
      <button className="menu-toggle" onClick={() => setAberto(!aberto)}>
        <FaBars />
      </button>

      <aside className={`sidebar ${aberto ? "aberta" : ""}`}>
        <button className="close-btn" onClick={() => setAberto(false)}>
          <FaTimes />
        </button>

        <h2>🎓 Sistema Escolar</h2>

        <ul className="menu_lateral">
          <li>
            <NavLink to="/" end onClick={() => setAberto(false)}>
              <FaHome /> Início
            </NavLink>
          </li>

          <li>
            <NavLink to="/alunos" onClick={() => setAberto(false)}>
              <FaUserGraduate /> Alunos
            </NavLink>
          </li>

          <li>
            <NavLink to="/matriculas" onClick={() => setAberto(false)}>
              <FaClipboardList /> Matrículas
            </NavLink>
          </li>

          <li>
            <NavLink to="/historico" onClick={() => setAberto(false)}>
              <FaHistory /> Histórico
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}
