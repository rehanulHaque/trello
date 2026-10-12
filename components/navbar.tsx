import { signOut } from "@/actions/auth/sign-out";
import { auth } from "@/lib/auth/server";
import { ArrowRight, ChevronDown, Layers2 } from "lucide-react";
import Link from "next/link";

export default async function Navbar() {
  const { data: session } = await auth.getSession();
  const user = session?.user;
  const firstName = user?.name?.trim().split(/\s+/)[0] || "there";

  return (
    <header className="relative z-10 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label="Trello home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5148e5] text-white shadow-sm shadow-indigo-200">
            <Layers2 size={20} strokeWidth={2.5} />
          </span>
          <span className="text-[21px] font-bold tracking-[-0.06em] text-slate-900">
            trello
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/#features"
            className="flex items-center gap-1 text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            Product <ChevronDown size={14} />
          </Link>
          <Link
            href="/#workflow"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            Solutions
          </Link>
          <Link
            href="/#workspace"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            Resources
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="hidden text-sm text-slate-600 sm:inline">
                Hi, <span className="font-semibold text-slate-900">{firstName}</span>
              </span>
              <form action={signOut}>
                <button
                  type="submit"
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Sign out
                </button>
              </form>
            </>
          ) : (
            <>
              <Link
                href="/auth/sign-in"
                className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:text-indigo-700 sm:inline-flex"
              >
                Log in
              </Link>
              <Link
                href="/auth/sign-up"
                className="inline-flex items-center gap-2 rounded-lg bg-[#5148e5] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4338ca] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started <ArrowRight size={15} />
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
