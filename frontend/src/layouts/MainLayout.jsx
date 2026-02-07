import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/sidebar";

export default function MainLayout() {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="layout">
      <Sidebar aberto={aberto} setAberto={setAberto} />

      <main className={aberto ? "content aberto" : "content"}>
        <Outlet />
      </main>
    </div>
  );
}
