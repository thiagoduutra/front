import { useState } from "react";
import { AppShell } from "./components/AppShell";
import { CategoriaPage } from "./pages/CategoriaPage";
import { PessoaPage } from "./pages/PessoaPage";
import { TransacaoPage } from "./pages/TransacaoPage";

type SecaoAtiva = "pessoas" | "categorias" | "transacoes";

function App() {
  const [secaoAtiva, setSecaoAtiva] = useState<SecaoAtiva>("pessoas");

  return (
    <AppShell secaoAtiva={secaoAtiva} onSecaoChange={setSecaoAtiva}>
      {secaoAtiva === "pessoas" && <PessoaPage />}
      {secaoAtiva === "categorias" && <CategoriaPage />}
      {secaoAtiva === "transacoes" && <TransacaoPage />}
    </AppShell>
  );
}

export default App;
