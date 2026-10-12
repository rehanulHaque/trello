import Navbar from "@/components/navbar";
import { auth } from "@/lib/auth/server";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleHelp,
  Clock3,
  LayoutGrid,
  Plus,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";

const tasks = [
  {
    title: "Sketch out the homepage",
    label: "Design",
    color: "bg-violet-100 text-violet-700",
    initials: "AM",
    avatar: "bg-rose-100 text-rose-700",
  },
  {
    title: "Share the first draft",
    label: "Review",
    color: "bg-amber-100 text-amber-700",
    initials: "JL",
    avatar: "bg-sky-100 text-sky-700",
  },
  {
    title: "Polish the details",
    label: "In progress",
    color: "bg-emerald-100 text-emerald-700",
    initials: "SK",
    avatar: "bg-indigo-100 text-indigo-700",
  },
];

export default async function HomePage() {
  const { data: session } = await auth.getSession();
  const user = session?.user;
  const firstName = user?.name?.trim().split(/\s+/)[0] || "there";

  return (
    <div className="min-h-screen overflow-hidden bg-[#f8f9fc] text-slate-900">
      <Navbar />

      <main>
        <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:pb-28 lg:pt-24">
          <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl" />
          <div className="relative z-10 max-w-xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-3.5 py-2 text-xs font-semibold text-indigo-700 shadow-sm">
              <Sparkles size={14} />
              Make room for your best work
            </div>
            <h1 className="text-[clamp(2.8rem,6vw,5rem)] leading-[1.04] font-semibold tracking-[-0.065em] text-slate-950">
              {user ? (
                <>
                  Welcome back,
                  <br />
                  <span className="text-[#5148e5]">{firstName}.</span>
                </>
              ) : (
                <>
                  Big ideas,
                  <br />
                  <span className="text-[#5148e5]">meet their plan.</span>
                </>
              )}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Bring your team’s work together, keep every detail in view, and turn
              “what if” into “what’s next.”
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {user ? (
                <a
                  href="#workspace"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#5148e5] px-5 text-sm font-semibold text-white shadow-lg shadow-indigo-200/70 transition hover:-translate-y-0.5 hover:bg-[#4338ca]"
                >
                  Open your workspace <ArrowRight size={16} />
                </a>
              ) : (
                <>
                  <Link
                    href="/auth/sign-up"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#5148e5] px-5 text-sm font-semibold text-white shadow-lg shadow-indigo-200/70 transition hover:-translate-y-0.5 hover:bg-[#4338ca]"
                  >
                    Start planning for free <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/auth/sign-in"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl px-5 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-indigo-700"
                  >
                    I already have an account
                  </Link>
                </>
              )}
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
              <span className="flex -space-x-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#f8f9fc] bg-rose-100 text-[9px] font-bold text-rose-700">
                  AM
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#f8f9fc] bg-sky-100 text-[9px] font-bold text-sky-700">
                  JL
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#f8f9fc] bg-amber-100 text-[9px] font-bold text-amber-700">
                  SK
                </span>
              </span>
              <span>Good work happens together.</span>
            </div>
          </div>

          <div id="workspace" className="relative mx-auto w-full max-w-152.5 scroll-mt-24">
            <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-cyan-200/50 blur-3xl" />
            <div className="absolute -bottom-10 -left-8 h-40 w-40 rounded-full bg-fuchsia-200/40 blur-3xl" />
            <div className="relative rotate-1 rounded-[26px] border border-white/80 bg-white p-3 shadow-[0_30px_90px_-35px_rgba(48,54,110,0.32)] sm:p-5">
              <div className="rounded-[19px] bg-[#f5f6fb] p-4 sm:p-5">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                      <LayoutGrid size={19} />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-slate-900">Website refresh</p>
                      <p className="mt-0.5 text-xs text-slate-500">Team workspace · 3 members</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label="Add a list"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:text-indigo-700"
                  >
                    <Plus size={17} />
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    { name: "Up next", count: "03", accent: "bg-violet-400" },
                    { name: "In progress", count: "02", accent: "bg-amber-400" },
                    { name: "Done", count: "04", accent: "bg-emerald-400" },
                  ].map((column, columnIndex) => (
                    <div
                      key={column.name}
                      className={`${columnIndex > 0 ? "hidden sm:block" : ""} min-w-0 rounded-xl bg-[#eceef5] p-2.5`}
                    >
                      <div className="mb-2.5 flex items-center justify-between px-0.5">
                        <div className="flex items-center gap-2">
                          <span className={`h-2 w-2 rounded-full ${column.accent}`} />
                          <h2 className="text-[11px] font-bold text-slate-700">{column.name}</h2>
                          <span className="text-[10px] text-slate-400">{column.count}</span>
                        </div>
                        <span className="text-slate-400">···</span>
                      </div>
                      <div className="space-y-2">
                        {tasks.slice(columnIndex, columnIndex + 2).map((task, taskIndex) => (
                          <article
                            key={task.title}
                            className="rounded-lg border border-slate-100 bg-white p-2.5 shadow-[0_2px_5px_rgba(15,23,42,0.04)]"
                          >
                            {taskIndex === 0 && columnIndex === 2 ? (
                              <div className="mb-2 flex items-center gap-1 text-[9px] font-semibold text-emerald-700">
                                <Check size={11} /> Completed
                              </div>
                            ) : null}
                            <p className="text-[10px] leading-4 font-semibold text-slate-700">
                              {task.title}
                            </p>
                            <div className="mt-2.5 flex items-center justify-between">
                              <span
                                className={`rounded px-1.5 py-0.5 text-[8px] font-semibold ${task.color}`}
                              >
                                {task.label}
                              </span>
                              <span
                                className={`flex h-5 w-5 items-center justify-center rounded-full text-[7px] font-bold ${task.avatar}`}
                              >
                                {task.initials}
                              </span>
                            </div>
                          </article>
                        ))}
                        <div className="flex items-center gap-1 rounded-lg border border-dashed border-slate-300 px-2 py-2 text-[9px] font-medium text-slate-400">
                          <Plus size={11} /> Add a card
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between rounded-xl border border-indigo-100 bg-white px-3.5 py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                      <Zap size={15} />
                    </span>
                    <div>
                      <p className="text-[10px] font-bold text-slate-800">A little progress adds up</p>
                      <p className="mt-0.5 text-[9px] text-slate-500">Your team finished 8 tasks this week</p>
                    </div>
                  </div>
                  <ArrowUpRight size={15} className="text-slate-400" />
                </div>
              </div>
              <div className="absolute -left-5 top-24 hidden items-center gap-2 rounded-xl border border-white bg-white px-3 py-2.5 shadow-lg shadow-slate-200/70 sm:flex">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Check size={17} />
                </span>
                <span className="text-xs font-semibold text-slate-700">One less thing to worry about</span>
              </div>
              <div className="absolute -right-4 bottom-20 hidden items-center gap-2 rounded-xl border border-white bg-white px-3 py-2.5 shadow-lg shadow-slate-200/70 sm:flex">
                <Clock3 size={16} className="text-indigo-600" />
                <span className="text-xs font-semibold text-slate-700">Everything, on track</span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="border-y border-slate-200/80 bg-white/70"
        >
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-9 sm:grid-cols-3 sm:px-8 lg:gap-12">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <LayoutGrid size={18} />
              </span>
              <div>
                <h2 className="text-sm font-semibold text-slate-900">Everything in one view</h2>
                <p className="mt-1 text-sm leading-5 text-slate-500">
                  See the work, the people, and what comes next.
                </p>
              </div>
            </div>
            <div id="workflow" className="flex scroll-mt-24 items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Check size={18} />
              </span>
              <div>
                <h2 className="text-sm font-semibold text-slate-900">A flow that feels natural</h2>
                <p className="mt-1 text-sm leading-5 text-slate-500">
                  Move ideas forward without adding busywork.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                <CircleHelp size={18} />
              </span>
              <div>
                <h2 className="text-sm font-semibold text-slate-900">Made for real teamwork</h2>
                <p className="mt-1 text-sm leading-5 text-slate-500">
                  Keep everyone aligned, wherever work happens.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-slate-400 sm:flex-row sm:px-8">
        <span>© {new Date().getFullYear()} Trello. Make work flow.</span>
        <a href="#features" className="font-medium transition hover:text-indigo-700">
          Discover a better way to work
        </a>
      </footer>
    </div>
  );
}
