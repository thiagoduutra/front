import type { PropsWithChildren } from "react";

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="app-shell">
      <div className="container py-4 py-lg-5">
        <section className="hero-panel p-4 p-lg-5 mb-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <h1 className="stat-card p-3 h-100">
                Controle de gastos residenciais
              </h1>
            </div>
            <div className="col-lg-4">
              <div className="stat-card p-3 h-100">
                <h2 className="h4 mb-2">Pessoas</h2>
                <p className="text-secondary mb-0">Cadastro de pessoas.</p>
              </div>
            </div>
          </div>
        </section>

        <nav className="section-nav nav nav-pills gap-2 mb-4 flex-wrap">
          <span className="nav-link active">Pessoas</span>
        </nav>

        <main className="page-fade">{children}</main>
      </div>
    </div>
  );
}
