import { useState } from "react";
import { AppShell } from "./components/AppShell";
import { CategoriaPage } from "./pages/CategoriaPage";
import { PessoaPage } from "./pages/PessoaPage";

type SecaoAtiva = "pessoas" | "categorias";

function App() {
  const [secaoAtiva, setSecaoAtiva] = useState<SecaoAtiva>("pessoas");

  return (
    <AppShell secaoAtiva={secaoAtiva} onSecaoChange={setSecaoAtiva}>
      {secaoAtiva === "pessoas" && <PessoaPage />}
      {secaoAtiva === "categorias" && <CategoriaPage />}
    </AppShell>
  );
}

export default App;
