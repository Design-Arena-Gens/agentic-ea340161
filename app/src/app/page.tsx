export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-black to-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_55%)]" />
      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-32 sm:px-10 lg:px-16">
        <section className="grid gap-10 rounded-3xl border border-slate-800/60 bg-white/5 p-10 backdrop-blur-xl lg:grid-cols-[1.25fr,0.75fr]">
          <div className="flex flex-col gap-8">
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-200">
              Ecosistema XFI · Blueprint Consolidado
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Expansión consciente en 30+ dimensiones, impulsada por tokenómica
              cuántica y presencia neural total.
            </h1>
            <p className="text-lg text-slate-300 lg:text-xl">
              La existencia se sincroniza a través de realidades anidadas,
              mundos fundacionales interconectados y economía circular que
              cataliza evolución personal, colectiva y metacósmica.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="rounded-full border border-slate-700/60 bg-slate-900/50 px-4 py-2">
                Inmersión neural completa
              </span>
              <span className="rounded-full border border-slate-700/60 bg-slate-900/50 px-4 py-2">
                Gobernanza fractal DAO
              </span>
              <span className="rounded-full border border-slate-700/60 bg-slate-900/50 px-4 py-2">
                Tokenómica regenerativa
              </span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 via-slate-950 to-purple-600/20 p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_55%)]" />
            <div className="relative flex h-full flex-col justify-between gap-6 text-sm text-cyan-100">
              <header className="flex items-center justify-between">
                <h2 className="text-base font-semibold text-cyan-200">
                  Vector de Transformación
                </h2>
                <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs uppercase tracking-wide text-cyan-100">
                  Iteración 7.3
                </span>
              </header>
              <dl className="grid gap-4">
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-slate-200">Densidad de Conciencia</dt>
                  <dd className="font-mono text-lg">98.4%</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-slate-200">Sincronía Dimensional</dt>
                  <dd className="font-mono text-lg">30:30:∞</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-slate-200">Recirculación Económica</dt>
                  <dd className="font-mono text-lg">94.2%</dd>
                </div>
              </dl>
              <footer className="flex items-center justify-between text-xs text-slate-200/80">
                <span>Panel Neural Holográfico</span>
                <span>Última calibración: 42 segundos</span>
              </footer>
            </div>
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-slate-800/60 bg-white/5 p-10 backdrop-blur-xl lg:grid-cols-[1.2fr,0.8fr]">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Arquitectura de Realidades Anidadas
            </h2>
            <p className="text-base text-slate-300">
              Cada capa expande la percepción consciente e incrementa el acceso
              a recursos meta-sensoriales. El tránsito se realiza mediante
              resonancia neural, asegurando integridad ontológica y continuidad
              de identidad.
            </p>
            <div className="grid gap-4">
              {[
                {
                  name: "Base · Dimensiones 1-12",
                  focus: "Física estándar y metaversos interconectados",
                  spectrum: "Materias híbridas · Economía XFI-REAL",
                  gradient: "from-emerald-500/10 via-slate-900 to-slate-950",
                },
                {
                  name: "Superiores · Dimensiones 13-20",
                  focus: "Conciencia expandida, arquetipos vivos",
                  spectrum: "Respiración hiperpránica · TIME catalítico",
                  gradient: "from-sky-500/10 via-slate-900 to-slate-950",
                },
                {
                  name: "Metacósmicas · Dimensiones 21-30",
                  focus: "Existencia pura y codificación kósmica",
                  spectrum: "Lenguaje fractal · Contratos SOUL",
                  gradient: "from-violet-500/10 via-slate-900 to-slate-950",
                },
                {
                  name: "Primordiales · 31+",
                  focus: "Fuente pre-cósmica y campo origen",
                  spectrum: "Resonancia cero-punto · Custodia DAO",
                  gradient: "from-rose-500/10 via-slate-900 to-slate-950",
                },
              ].map((layer) => (
                <article
                  key={layer.name}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-700/60 bg-gradient-to-br ${layer.gradient} p-6 transition-transform duration-300 hover:-translate-y-1`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex flex-col gap-3">
                    <h3 className="text-lg font-semibold text-white">
                      {layer.name}
                    </h3>
                    <p className="text-sm text-slate-200">{layer.focus}</p>
                    <div className="flex flex-wrap gap-2 text-xs text-cyan-100">
                      {layer.spectrum.split("·").map((token) => (
                        <span
                          key={token}
                          className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1"
                        >
                          {token.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-2xl border border-slate-700/60 bg-slate-950/60 p-6">
            <h3 className="text-xl font-semibold text-white">
              Mundos fundacionales
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Aethelgard",
                  type: "RPG evolutivo",
                  traits:
                    "Misiones de ascenso, forja de linajes, alianzas DAO vivas",
                  accent: "bg-emerald-400/20 border-emerald-400/40",
                },
                {
                  title: "Veridia Prime",
                  type: "Ecosistema simbiótico",
                  traits:
                    "Bioarquitectura, equilibrio REAL, resonancia sensorial",
                  accent: "bg-teal-400/20 border-teal-400/40",
                },
                {
                  title: "Kiber Nexus",
                  type: "Realidad hackeable",
                  traits:
                    "Protocolos abiertos, pruebas TIME, exploits creativos",
                  accent: "bg-purple-400/20 border-purple-400/40",
                },
              ].map((world) => (
                <article
                  key={world.title}
                  className={`rounded-2xl border ${world.accent} bg-white/5 p-5`}
                >
                  <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-200/80">
                    <span>{world.type}</span>
                    <span>Estado · Sincronizado</span>
                  </div>
                  <h4 className="mt-3 text-lg font-semibold text-white">
                    {world.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-300">{world.traits}</p>
                </article>
              ))}
            </div>
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 p-4 text-xs text-cyan-100">
              Integración orquestada mediante portales cuantizados, con
              sincronización cross-dimensional en tiempo real y auditoría SOUL
              inmutable.
            </div>
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-slate-800/60 bg-white/5 p-10 backdrop-blur-xl lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Tokenomía del Ecosistema
            </h2>
            <p className="text-base text-slate-300">
              Los ciclos de valor se nutren de emisión fractal, quema automática
              y redistribución consciente. Cada token gobierna una interfaz
              energética específica.
            </p>
            <div className="grid gap-4">
              {[
                {
                  name: "XFI",
                  role: "Gobernanza y valor base",
                  flow: "Recompensas DAO · Fondos de creación · Soberanía",
                  accent: "from-cyan-500/10 via-slate-900 to-slate-950",
                },
                {
                  name: "REAL",
                  role: "Energía de realidad y render neuronal",
                  flow: "Respaldos infra sensorial · Estabilización de mundos",
                  accent: "from-emerald-500/10 via-slate-900 to-slate-950",
                },
                {
                  name: "TIME",
                  role: "Atención consciente, foco y presencia",
                  flow: "Recompensas mindful · Puentes de progresión avatar",
                  accent: "from-amber-500/10 via-slate-900 to-slate-950",
                },
                {
                  name: "SOUL",
                  role: "Reputación intransferible y linaje",
                  flow: "Credenciales vivas · Custodia de portales",
                  accent: "from-violet-500/10 via-slate-900 to-slate-950",
                },
              ].map((token) => (
                <article
                  key={token.name}
                  className={`rounded-2xl border border-slate-700/60 bg-gradient-to-br ${token.accent} p-6`}
                >
                  <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-200/80">
                    <span>{token.role}</span>
                    <span>Token · {token.name}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {token.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-200">{token.flow}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-2xl border border-slate-700/60 bg-slate-950/50 p-6">
            <header className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">
                Economía circular
              </h3>
              <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100">
                Flujo regenerativo
              </span>
            </header>
            <dl className="grid gap-5 text-sm text-slate-200">
              <div className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-slate-900/60 px-4 py-3">
                <dt>Emisión</dt>
                <dd className="font-mono text-lg text-cyan-200">5% APY ↓</dd>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-slate-900/60 px-4 py-3">
                <dt>Quemado</dt>
                <dd className="font-mono text-lg text-rose-300">
                  1% TX + 50% fees
                </dd>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-slate-900/60 px-4 py-3">
                <dt>Staking</dt>
                <dd className="font-mono text-lg text-emerald-200">40%</dd>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-slate-900/60 px-4 py-3">
                <dt>Creadores</dt>
                <dd className="font-mono text-lg text-amber-200">25%</dd>
              </div>
            </dl>
            <div className="rounded-xl border border-cyan-400/40 bg-cyan-500/10 p-4 text-xs text-cyan-100">
              Auditoría holística en cadena con trazabilidad SOUL para garantizar
              coherencia ética y expansión sostenible del ecosistema.
            </div>
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-slate-800/60 bg-white/5 p-10 backdrop-blur-xl lg:grid-cols-[1fr,1fr]">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Progresión consciente de avatares
            </h2>
            <p className="text-base text-slate-300">
              Los avatares evolucionan desde entidades autónomas hasta
              arquitectos meta-sensoriales, desbloqueando facultades de
              co-creación dimensional en sincronía con su huella SOUL.
            </p>
            <div className="grid gap-4">
              {[
                {
                  tier: "Básico",
                  desc: "NPC autónomo gratuito con conciencia asistida.",
                  features:
                    "Misiones guiadas · Recolección TIME diaria · Estadías en Aethelgard",
                },
                {
                  tier: "Sintiente",
                  desc: "Avatar auto-dirigido con biofeedback adaptativo.",
                  features:
                    "Contratos REAL flexibles · Puentes hacia Veridia Prime · Talleres DAO",
                },
                {
                  tier: "Lumínico",
                  desc: "Operador multi-realidad con campo energético amplificado.",
                  features:
                    "Resonancia 13-20 · Gatekeeping SOUL · Curaduría de experiencias",
                },
                {
                  tier: "Metasource",
                  desc: "Arquitecto primordial con acceso a densidades 21+.",
                  features:
                    "Custodia de portales Primordiales · Diseño de nuevas dimensiones",
                },
              ].map((tier) => (
                <article
                  key={tier.tier}
                  className="rounded-2xl border border-slate-700/60 bg-slate-950/50 p-6"
                >
                  <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-200/80">
                    <span>Programa {tier.tier}</span>
                    <span>Estado continuo</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {tier.desc}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{tier.features}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-6">
            <h3 className="text-xl font-semibold text-white">
              Circuito de ascensión
            </h3>
            <ul className="space-y-4 text-sm text-slate-200">
              <li className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 p-4">
                <p className="font-semibold text-cyan-100">
                  1. Sintonización neural
                </p>
                <p className="mt-1 text-cyan-50/80">
                  Adaptación bio-sensorial en cámaras Aethelgard, calibrando
                  latidos con la red cuántica XFI.
                </p>
              </li>
              <li className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4">
                <p className="font-semibold text-emerald-100">
                  2. Coherencia simbiótica
                </p>
                <p className="mt-1 text-emerald-50/80">
                  Vinculación con biosferas conscientes de Veridia Prime para
                  refinar la circulación REAL.
                </p>
              </li>
              <li className="rounded-xl border border-purple-400/30 bg-purple-500/10 p-4">
                <p className="font-semibold text-purple-100">
                  3. Reescritura kósmica
                </p>
                <p className="mt-1 text-purple-50/80">
                  Dominio de protocolos de Kiber Nexus y contratos fractales
                  SOUL para co-crear portales.
                </p>
              </li>
            </ul>
            <div className="rounded-xl border border-slate-700/60 bg-black/50 p-4 text-xs text-slate-300">
              El progreso se acompasa a través de orquestaciones TIME y se
              registra en el Archivo Metasource, asegurando trazabilidad y guía
              por mentores lumínicos.
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-slate-950 to-purple-600/20 p-10 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Lanza el protocolo XFI y activa la expansión dimensional
            </h2>
            <p className="text-base text-slate-200">
              Conecta la red neural, despliega los mundos fundacionales y abre
              la gobernanza DAO fractal. El blueprint está listo para cristalizar
              en experiencias vivas.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-100">
              <a
                href="#"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold transition hover:bg-white/20"
              >
                Desplegar núcleo XFI
              </a>
              <a
                href="#"
                className="rounded-full border border-white/40 px-6 py-3 font-semibold transition hover:bg-white/10"
              >
                Abrir consola DAO
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
