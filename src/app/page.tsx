"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Banknote,
  Blocks,
  Braces,
  ChartNoAxesCombined,
  Check,
  ChevronRight,
  CircleDollarSign,
  Code2,
  Cpu,
  Database,
  FileCode2,
  Gauge,
  Github,
  Globe2,
  Handshake,
  Landmark,
  Layers3,
  LineChart,
  LockKeyhole,
  Network,
  ShieldCheck,
  Sparkles,
  Terminal,
  Timer,
  Wallet,
  Zap,
} from "lucide-react";
import { Counter } from "@/components/ui/animations/Counter";

const navItems = [
  { label: "Technology", href: "#architecture" },
  { label: "Solutions", href: "#features" },
  { label: "Developers", href: "#developers" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Docs", href: "/help" },
  { label: "Pricing", href: "/pricing" },
];

const ecosystemTabs = ["Wallets", "DEXs", "Protocols", "Tools", "Analytics", "Infrastructure"];

const ecosystemItems: Array<{ name: string; icon: LucideIcon; tone: string }> = [
  { name: "Wallet Layer", icon: Wallet, tone: "from-cyan-300/25 to-cyan-500/5 text-cyan-200" },
  { name: "Stellar Rails", icon: Network, tone: "from-blue-300/25 to-blue-500/5 text-blue-200" },
  { name: "USDC Flow", icon: CircleDollarSign, tone: "from-emerald-300/25 to-emerald-500/5 text-emerald-200" },
  { name: "Soroban VM", icon: Cpu, tone: "from-sky-300/25 to-sky-500/5 text-sky-200" },
  { name: "Escrow Core", icon: LockKeyhole, tone: "from-teal-300/25 to-teal-500/5 text-teal-200" },
  { name: "Asset Bridge", icon: Layers3, tone: "from-indigo-300/20 to-indigo-500/5 text-indigo-200" },
  { name: "Pay Links", icon: Banknote, tone: "from-lime-300/20 to-lime-500/5 text-lime-200" },
  { name: "Treasury", icon: Landmark, tone: "from-cyan-300/20 to-emerald-500/5 text-cyan-100" },
  { name: "Explorer", icon: LineChart, tone: "from-blue-300/20 to-cyan-500/5 text-blue-100" },
  { name: "SDK Kit", icon: Braces, tone: "from-emerald-300/20 to-teal-500/5 text-emerald-100" },
  { name: "Data Index", icon: Database, tone: "from-slate-100/20 to-cyan-500/5 text-slate-100" },
  { name: "Ops Signals", icon: ChartNoAxesCombined, tone: "from-sky-300/20 to-emerald-500/5 text-sky-100" },
];

const features: Array<{ title: string; copy: string; icon: LucideIcon }> = [
  {
    title: "Instant Settlement",
    copy: "Payment intent, approval, and release move through Stellar finality in seconds with fees designed for global volume.",
    icon: Timer,
  },
  {
    title: "Programmable Escrow",
    copy: "Milestones, signatures, deposits, and releases are modeled as clear contract states for teams that need trustless execution.",
    icon: Handshake,
  },
  {
    title: "Soroban Smart Contracts",
    copy: "Build payment flows on a modern contract layer with deterministic logic, transparent state, and developer-friendly tooling.",
    icon: FileCode2,
  },
  {
    title: "Cross-border Payments",
    copy: "Coordinate client, contractor, and treasury wallets across markets without slow banking handoffs or opaque intermediary rails.",
    icon: Globe2,
  },
];

const bentoItems: Array<{ title: string; copy: string; icon: LucideIcon; className: string }> = [
  {
    title: "Security-first settlement",
    copy: "Escrow state stays transparent, auditable, and tied to wallet signatures from funding through release.",
    icon: ShieldCheck,
    className: "md:col-span-2",
  },
  {
    title: "Low fees",
    copy: "Move value through Stellar rails without percentage-heavy payment overhead.",
    icon: Gauge,
    className: "",
  },
  {
    title: "Open source posture",
    copy: "Contract and payment surfaces are designed to be inspectable by builders and finance teams.",
    icon: Github,
    className: "",
  },
  {
    title: "Programmable assets",
    copy: "Handle USDC, XLM, and future asset flows through a consistent contract architecture.",
    icon: Blocks,
    className: "md:col-span-2",
  },
];

const metrics = [
  { label: "Settled Volume", value: 42, suffix: "M+" },
  { label: "Contract Events", value: 880, suffix: "K" },
  { label: "Builder Countries", value: 72, suffix: "" },
  { label: "Wallet Flows", value: 18, suffix: "K+" },
];

const codeSample = `import { StellarPay } from "@stellar-pay/sdk";

const escrow = new StellarPay.Escrow({
  network: "testnet",
  asset: "USDC",
  contractId: "CCQ4...SOROBAN"
});

await escrow.create({
  client: "GBLX...92A1",
  contractor: "GA2F...4P9Q",
  milestones: [
    { id: "design", amount: "2500.00" },
    { id: "release", amount: "6000.00" }
  ]
});

await escrow.fund();
await escrow.release("design");`;

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <m.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
    >
      <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-200/80 shadow-[0_0_30px_rgba(45,212,191,0.08)]">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.8)]" />
        {eyebrow}
      </div>
      <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-normal text-white md:text-6xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300/70 md:text-base">
        {copy}
      </p>
    </m.div>
  );
}

function PremiumButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const classes = {
    primary:
      "border-cyan-200/25 bg-cyan-200 text-[#061014] shadow-[0_0_34px_rgba(103,232,249,0.22)] hover:bg-white hover:shadow-[0_0_48px_rgba(103,232,249,0.34)]",
    secondary:
      "border-white/12 bg-white/[0.055] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-cyan-200/30 hover:bg-white/[0.085]",
    ghost:
      "border-transparent bg-transparent text-slate-300 hover:text-white",
  }[variant];

  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-5 text-sm font-medium transition duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070A] ${classes}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </Link>
  );
}

function ArchitectureDiagram() {
  const nodes = [
    { label: "Wallet", x: 78, y: 110, icon: Wallet },
    { label: "Soroban", x: 250, y: 54, icon: Cpu },
    { label: "Escrow", x: 422, y: 110, icon: LockKeyhole },
    { label: "Settlement", x: 250, y: 212, icon: CircleDollarSign },
  ];

  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[24px] border border-white/10 bg-[#071019]/80 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:46px_46px] opacity-35" />
      <svg viewBox="0 0 500 280" className="relative h-full min-h-[300px] w-full" role="img" aria-label="Stellar Pay network architecture diagram">
        <defs>
          <linearGradient id="lineGlow" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#67e8f9" />
            <stop offset="0.55" stopColor="#38bdf8" />
            <stop offset="1" stopColor="#6ee7b7" />
          </linearGradient>
        </defs>
        {[
          "M118 110 C170 62 193 54 220 54",
          "M280 54 C326 54 356 68 384 98",
          "M422 142 C382 202 326 212 280 212",
          "M220 212 C168 205 132 164 106 138",
          "M138 110 C205 142 296 142 362 110",
        ].map((path) => (
          <m.path
            key={path}
            d={path}
            fill="none"
            stroke="url(#lineGlow)"
            strokeLinecap="round"
            strokeWidth="1.2"
            strokeDasharray="8 10"
            initial={{ pathLength: 0, opacity: 0.2 }}
            whileInView={{ pathLength: 1, opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
        {nodes.map((node, index) => (
          <g key={node.label}>
            <m.circle
              cx={node.x}
              cy={node.y}
              r="42"
              fill="rgba(8, 18, 28, 0.92)"
              stroke="rgba(255,255,255,0.12)"
              initial={{ scale: 0.86, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            />
            <foreignObject x={node.x - 18} y={node.y - 22} width="36" height="36">
              <node.icon className="h-9 w-9 text-cyan-200" />
            </foreignObject>
            <text x={node.x} y={node.y + 52} fill="rgba(226,232,240,0.78)" textAnchor="middle" fontSize="12">
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070A] text-white selection:bg-cyan-300/25 selection:text-cyan-100">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(34,211,238,0.22),transparent_31%),radial-gradient(circle_at_84%_24%,rgba(16,185,129,0.14),transparent_28%),radial-gradient(circle_at_50%_74%,rgba(59,130,246,0.12),transparent_34%),linear-gradient(180deg,#05070A_0%,#071018_42%,#05070A_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:80px_80px] opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.65'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
        <m.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#071019]/70 px-4 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:px-5"
        >
          <Link href="/" className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-200/20 bg-white/[0.04] shadow-[0_0_28px_rgba(34,211,238,0.12)]">
              <Image src="/logo.svg" alt="Stellar Pay" width={22} height={22} className="h-5 w-5" priority />
            </span>
            <span className="text-sm font-semibold tracking-normal text-white md:text-base">Stellar Pay</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-xs font-medium text-slate-300/75 transition hover:bg-white/[0.055] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/60"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-3 py-2 text-xs text-emerald-100 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.9)]" />
              Testnet ready
            </div>
            <Link
              href="/auth"
              className="group inline-flex h-10 items-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-200 px-4 text-xs font-semibold text-[#061014] shadow-[0_0_28px_rgba(103,232,249,0.22)] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070A]"
            >
              <Wallet className="h-4 w-4" />
              <span className="hidden sm:inline">Connect Wallet</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </m.div>
      </nav>

      <section className="relative z-10 px-5 pb-20 pt-32 md:pb-28 md:pt-40">
        <m.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-7xl flex-col items-center text-center"
        >
          <m.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-medium text-cyan-100/80 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-xl"
          >
            <Sparkles className="h-3.5 w-3.5 text-emerald-200" />
            Payments. Escrow. Built on Stellar.
          </m.div>

          <m.h1
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl text-balance text-6xl font-semibold leading-[0.94] tracking-normal text-white sm:text-7xl md:text-8xl lg:text-[104px]"
          >
            Accelerating the future of{" "}
            <span className="bg-[linear-gradient(100deg,#e0faff_0%,#67e8f9_28%,#6ee7b7_62%,#bfdbfe_100%)] bg-clip-text text-transparent">
              Stellar
            </span>{" "}
            payments.
          </m.h1>

          <m.p
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-2xl text-balance text-base leading-8 text-slate-300/72 md:text-lg"
          >
            Programmable escrow, smart milestone payments, and Soroban-powered settlement for teams moving money with speed, clarity, and control.
          </m.p>

          <m.div
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          >
            <PremiumButton href="/auth">Launch App</PremiumButton>
            <PremiumButton href="/auth" variant="secondary">
              <Wallet className="h-4 w-4" />
              Connect Wallet
            </PremiumButton>
            <PremiumButton href="/help" variant="ghost">Explore Docs</PremiumButton>
          </m.div>

          <m.div
            variants={fadeUp}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-16 w-full max-w-5xl"
          >
            <div className="absolute -inset-8 rounded-[36px] bg-cyan-300/10 blur-[90px]" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#090f18]/78 shadow-[0_32px_140px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
              <div className="relative flex flex-col gap-10 p-5 sm:p-8 md:p-10">
                <div className="flex flex-col items-start justify-between gap-5 border-b border-white/10 pb-7 md:flex-row md:items-center">
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/50">Protocol console</p>
                    <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">Live escrow settlement mesh</h2>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-left">
                    {["Funded", "Verified", "Released"].map((status, index) => (
                      <div key={status} className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">{status}</p>
                        <p className="mt-1 text-lg font-semibold text-cyan-100">{index === 0 ? "9.8k" : index === 1 ? "8.9k" : "8.7k"}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
                  <div className="rounded-[24px] border border-white/10 bg-[#070d15]/70 p-5 text-left">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-200">
                        <Zap className="h-4 w-4 text-cyan-200" />
                        Payment route
                      </div>
                      <span className="rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-3 py-1 text-[11px] text-emerald-100">active</span>
                    </div>
                    <div className="space-y-3">
                      {["Client wallet", "Soroban escrow", "Milestone approval", "Contractor wallet"].map((step, index) => (
                        <div key={step} className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-200/10 text-xs font-semibold text-cyan-100">
                            0{index + 1}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-white">{step}</p>
                            <p className="truncate text-xs text-slate-400">G{index + 2}KQ...{index + 7}XLM</p>
                          </div>
                          <Check className="h-4 w-4 text-emerald-200" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-[#071019]/80 p-5 text-left">
                    <div className="flex items-center gap-2 text-sm text-slate-200">
                      <Terminal className="h-4 w-4 text-emerald-200" />
                      Soroban event stream
                    </div>
                    <pre className="mt-5 overflow-hidden text-[11px] leading-6 text-slate-300/75">
                      <code>{`escrow.init()
asset.lock(USDC, 8500)
milestone.verify("design")
event.release({
  status: "settled",
  finality: "4.8s"
})`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </m.div>
      </section>

      <section id="ecosystem" className="relative z-10 px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Stellar ecosystem"
            title="A floating panel for every payment primitive."
            copy="Wallets, contracts, analytics, and settlement surfaces come together in one polished operational layer for programmable money."
          />

          <m.div
            initial={{ opacity: 0, y: 28, rotateX: 8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-5 rounded-[28px] border border-white/10 bg-[#0A1018]/78 p-4 shadow-[0_34px_140px_rgba(0,0,0,0.52)] backdrop-blur-2xl md:grid-cols-[220px_1fr] md:p-6"
          >
            <div className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
              {ecosystemTabs.map((tab, index) => (
                <button
                  key={tab}
                  type="button"
                  className={`min-w-fit rounded-2xl border px-4 py-3 text-left text-xs font-medium transition hover:-translate-y-0.5 ${
                    index === 0
                      ? "border-cyan-200/25 bg-cyan-200 text-[#061014]"
                      : "border-white/[0.07] bg-white/[0.035] text-slate-300 hover:border-cyan-200/20 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {ecosystemItems.map((item, index) => (
                <m.div
                  key={item.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.025 }}
                  className="group rounded-[22px] border border-white/[0.07] bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-1 hover:rotate-[0.4deg] hover:border-cyan-200/20 hover:bg-white/[0.055]"
                >
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.tone} shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium text-white">{item.name}</p>
                  <p className="mt-1 text-xs text-slate-400">Composable rail</p>
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </section>

      <section id="features" className="relative z-10 px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Why Stellar Pay"
            title="Speed, security, and settlement clarity."
            copy="Designed for founders, freelancers, agencies, and finance teams who want money movement to feel as refined as modern software."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {features.map((feature, index) => (
              <m.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group relative min-h-[250px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0F1724]/72 p-7 shadow-[0_22px_90px_rgba(0,0,0,0.32)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(34,211,238,0.12),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_38%)] opacity-80 transition group-hover:opacity-100" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.07] text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.1)]">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-normal text-white">{feature.title}</h3>
                    <p className="mt-3 max-w-lg text-sm leading-7 text-slate-300/68">{feature.copy}</p>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      <section id="developers" className="relative z-10 px-5 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <m.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-100/80">
              <Code2 className="h-3.5 w-3.5" />
              Developer friendly
            </div>
            <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-normal text-white md:text-6xl">
              Build payment logic without rebuilding finance.
            </h2>
            <p className="mt-6 text-sm leading-7 text-slate-300/70 md:text-base">
              Create escrow contracts, monitor lifecycle events, and compose settlement flows with Stellar SDK patterns that feel natural in production apps.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PremiumButton href="/help">Read Docs</PremiumButton>
              <PremiumButton href="/network" variant="secondary">View Network</PremiumButton>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-[24px] border border-white/10 bg-[#071019] shadow-[0_30px_130px_rgba(0,0,0,0.52)]"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.035] px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-200/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
              </div>
              <span className="text-xs text-slate-400">stellar-pay.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 text-[12px] leading-6 text-slate-300 md:p-7">
              <code>{codeSample}</code>
            </pre>
          </m.div>
        </div>
      </section>

      <section id="architecture" className="relative z-10 px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Network architecture"
            title="Wallet to settlement, mapped with precision."
            copy="A simple architecture for complex payment states: wallet signatures, Soroban contracts, escrow accounting, settlement events, and explorer-grade visibility."
          />
          <ArchitectureDiagram />
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Operating layer"
            title="Everything a premium payment surface should include."
            copy="A bento system for the reasons teams choose Stellar Pay when payment certainty matters as much as product quality."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {bentoItems.map((item, index) => (
              <m.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`group min-h-[240px] overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] p-7 shadow-[0_22px_90px_rgba(0,0,0,0.28)] ${item.className}`}
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0F1724] text-cyan-100">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300/68">{item.copy}</p>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 md:py-28">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.42)] sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-[#071019]/92 p-7 text-center md:p-9">
              <p className="text-4xl font-semibold tracking-normal text-white md:text-5xl">
                <Counter to={metric.value} suffix={metric.suffix} />
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-slate-400">{metric.label}</p>
            </div>
          ))}
        </m.div>
      </section>

      <section className="relative z-10 px-5 py-20 md:py-32">
        <m.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-[#071019]/82 px-6 py-16 text-center shadow-[0_40px_150px_rgba(0,0,0,0.55)] md:px-12 md:py-24"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_36%),linear-gradient(to_bottom,rgba(255,255,255,0.055),transparent_42%)]" />
          <div className="relative mx-auto max-w-4xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-cyan-100/65">Start building</p>
            <h2 className="text-balance text-5xl font-semibold leading-[0.98] tracking-normal text-white md:text-7xl">
              Start building on Stellar.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-300/70 md:text-base">
              Launch programmable payments, protect every milestone, and settle globally from one premium Stellar Pay workspace.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <PremiumButton href="/auth">Launch App</PremiumButton>
              <PremiumButton href="/help" variant="secondary">Read Docs</PremiumButton>
            </div>
          </div>
        </m.div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-200/20 bg-white/[0.04]">
                <Image src="/logo.svg" alt="Stellar Pay" width={22} height={22} className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-white">Stellar Pay</span>
            </Link>
            <p className="mt-5 max-w-xs text-xs leading-6 text-slate-400">
              Programmable payment and escrow infrastructure built for modern Stellar teams.
            </p>
          </div>

          {[
            { title: "Resources", links: [["Features", "/features"], ["Network", "/network"], ["Pricing", "/pricing"]] },
            { title: "Developers", links: [["Docs", "/help"], ["SDK", "/help"], ["Status", "/network"]] },
            { title: "Company", links: [["Launch", "/auth"], ["Support", "/help"], ["Contact", "mailto:sales@stellar-pay.com"]] },
            { title: "Legal", links: [["Privacy", "/privacy"], ["Terms", "/terms"], ["Notice", "/terms"]] },
          ].map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">{group.title}</h3>
              <div className="mt-4 flex flex-col gap-3">
                {group.links.map(([label, href]) => (
                  <Link key={label} href={href} className="text-sm text-slate-400 transition hover:text-cyan-100">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 flex max-w-6xl flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 Stellar Pay Protocol. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/network" className="hover:text-cyan-100">Network</Link>
            <Link href="/help" className="hover:text-cyan-100">Docs</Link>
            <Link href="/auth" className="hover:text-cyan-100">App</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
