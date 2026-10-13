export default function PaginaInicio() {
  const metricasSistema = [
    {
      etiqueta: "Disponibilidad Operativa",
      valor: "99.99%",
      cambio: "+0.02% este mes",
      positivo: true,
    },
    {
      etiqueta: "Latencia Promedio de Respuesta",
      valor: "18.4 ms",
      cambio: "-4.1 ms en percentil 95",
      positivo: true,
    },
    {
      etiqueta: "Huella de Memoria",
      valor: "42.8 MB",
      cambio: "Base mínima Alpine",
      positivo: true,
    },
    {
      etiqueta: "Nodos Activos en Producción",
      valor: "14 / 14",
      cambio: "Todas las regiones operativas",
      positivo: true,
    },
  ];

  const modulosArquitectura = [
    {
      titulo: "Entornos de Ejecución Aislados",
      descripcion:
        "Compilaciones multi-stage deterministas e inmutables que garantizan un comportamiento idéntico desde el entorno local hasta clústeres de alta concurrencia.",
      etiqueta: "Infraestructura",
    },
    {
      titulo: "Binario Standalone Optimizado",
      descripcion:
        "Mínima huella de dependencias en tiempo de ejecución mediante análisis de dependencias standalone, políticas de usuario no-root y binarios optimizados para musl.",
      etiqueta: "Rendimiento",
    },
    {
      titulo: "Resiliencia y Telemetría Continua",
      descripcion:
        "Comprobaciones de salud, ciclo de vida de contenedores sin tiempo de inactividad y métricas estructuradas para integración y entrega continua empresarial.",
      etiqueta: "Confiabilidad",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      {/* Barra de Navegación Superior */}
      <header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20">
              C
            </div>
            <div>
              <span className="text-base font-semibold tracking-tight text-white">
                CoreFlow Systems
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-medium text-slate-400 border border-slate-700/60 rounded px-1.5 py-0.5">
                v1.0.0
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-xs text-slate-300 bg-slate-900 border border-slate-800 rounded-full px-3 py-1">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Sistema Operativo</span>
            </div>
            <button
              type="button"
              className="hidden sm:inline-flex items-center justify-center rounded-md bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
            >
              Portal Corporativo
            </button>
          </div>
        </div>
      </header>

      {/* Sección Principal (Hero) */}
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-slate-800/80 py-20 sm:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))]" />
          
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 mb-6">
                <span>Arquitectura de Producción</span>
                <span className="text-slate-500">|</span>
                <span>Next.js & Docker Multi-Stage</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-balance">
                Plataforma de alto rendimiento diseñada para la nube empresarial.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300 text-balance">
                Aplicación web nativa de la nube, diseñada para alta resiliencia,
                reproducibilidad determinista y cargas de trabajo de baja latencia en entornos distribuidos.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                >
                  Acceder a la Plataforma
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800 transition-colors"
                >
                  Arquitectura del Sistema
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Métricas y Telemetría */}
        <section className="py-12 border-b border-slate-800/80 bg-slate-900/30">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
              Métricas Vitales de la Plataforma
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {metricasSistema.map((metrica) => (
                <div
                  key={metrica.etiqueta}
                  className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm"
                >
                  <p className="text-xs font-medium text-slate-400">{metrica.etiqueta}</p>
                  <p className="mt-2 text-3xl font-semibold tracking-tight text-white">
                    {metrica.valor}
                  </p>
                  <p className="mt-2 text-xs text-emerald-400 font-medium">
                    {metrica.cambio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capacidades de Arquitectura */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Gobernanza y Arquitectura de Infraestructura
              </h2>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                Estándares de seguridad que delimitan privilegios, controlan recursos y garantizan un arranque ultrarrápido en contenedores productivos.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {modulosArquitectura.map((modulo) => (
                <div
                  key={modulo.titulo}
                  className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
                >
                  <div>
                    <span className="inline-block rounded-md bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300 mb-4">
                      {modulo.etiqueta}
                    </span>
                    <h3 className="text-lg font-semibold text-white">{modulo.titulo}</h3>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                      {modulo.descripcion}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span>Estado de auditoría</span>
                    <span className="text-blue-400 font-medium">Verificado Activo</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Pie de Página */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 CoreFlow Systems Inc. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <span>Distribución Empresarial</span>
            <span>Estándar de Seguridad v2.4</span>
            <span>Cero Vulnerabilidades</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
