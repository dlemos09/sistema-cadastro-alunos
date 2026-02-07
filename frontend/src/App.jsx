import { BrowserRouter, Routes, Route } from "react-router-dom";
import Matriculas from "./pages/matriculas/matriculas";
import MatriculasHistorico from "./pages/matriculas/matriculasHistorico";
import Alunos from "./pages/alunos/alunos";
import Home from "./pages/home/home";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/alunos" element={<Alunos />} />
          <Route path="/matriculas" element={<Matriculas />} />
          <Route path="/historico" element={<MatriculasHistorico />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
