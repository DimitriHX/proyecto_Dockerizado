export default function HomePage() {
  const systemMetrics = [
    {
      label: "Operational Uptime",
      value: "99.99%",
      change: "+0.02% this month",
      positive: true,
    },
    {
      label: "Median Response Latency",
      value: "18.4 ms",
      change: "-4.1 ms p95 optimization",
      positive: true,
    },
    {
      label: "Memory Footprint",
      value: "42.8 MB",
      change: "Alpine minimal base",
      positive: true,
    },
    {
      label: "Active Deployments",
      value: "14 / 14",
      change: "All regions healthy",
      positive: true,
    },
  ];

  const modules = [
    {
      title: "Isolated Container Runtimes",
      description:
        "Deterministic, immutable multi-stage builds guaranteeing consistent runtime behavior from local environments to high-concurrency production clusters.",
      tag: "Infrastructure",
    },
    {
      title: "Optimized Standalone Binary",
      description:
        "Minimal runtime dependency footprint leveraging standalone production tracing, non-root execution policies, and musl-optimized native binaries.",
      tag: "Performance",
    },
    {
      title: "Automated Resiliency & Telemetry",
      description:
        "Health checks, zero-downtime container lifecycles, and structured telemetry streams designed for continuous integration and enterprise compliance.",
      tag: "Reliability",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      {/* Top Header */}
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
              <span>System Operational</span>
            </div>
            <button
              type="button"
              className="hidden sm:inline-flex items-center justify-center rounded-md bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
            >
              Enterprise Portal
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-slate-800/80 py-20 sm:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))]" />
          
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 mb-6">
                <span>Production Architecture</span>
                <span className="text-slate-500">|</span>
                <span>Next.js & Docker Multi-Stage</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-balance">
                High-performance platform engineered for cloud scale.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300 text-balance">
                A robust, enterprise-grade cloud native application designed for resilience,
                predictable reproducibility, and low-latency workloads across distributed cloud infrastructure.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                >
                  Access Platform
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800 transition-colors"
                >
                  System Architecture
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* System Telemetry & Metrics */}
        <section className="py-12 border-b border-slate-800/80 bg-slate-900/30">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
              Platform Vital Metrics
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {systemMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm"
                >
                  <p className="text-xs font-medium text-slate-400">{metric.label}</p>
                  <p className="mt-2 text-3xl font-semibold tracking-tight text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs text-emerald-400 font-medium">
                    {metric.change}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Architecture Capabilities */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Infrastructure Architecture & Governance
              </h2>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                Standardized patterns enforce security boundaries, resource caps, and fast cold-start performance across containerized nodes.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {modules.map((mod) => (
                <div
                  key={mod.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
                >
                  <div>
                    <span className="inline-block rounded-md bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300 mb-4">
                      {mod.tag}
                    </span>
                    <h3 className="text-lg font-semibold text-white">{mod.title}</h3>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                      {mod.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span>Audit status</span>
                    <span className="text-blue-400 font-medium">Verified Active</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 CoreFlow Systems Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>Enterprise Distribution</span>
            <span>Security Benchmark v2.4</span>
            <span>Zero Vulnerabilities</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
