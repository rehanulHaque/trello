"use client";

import { signInWithEmail } from "@/actions/auth/sign-in";
import { signUpWithEmail } from "@/actions/auth/sign-up";
import { ArrowRight, LoaderCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

type AuthFormProps = {
  mode: "sign-in" | "sign-up";
};

export default function AuthForm({ mode }: AuthFormProps) {
  const isSignUp = mode === "sign-up";
  const [state, formAction, isPending] = useActionState(
    isSignUp ? signUpWithEmail : signInWithEmail,
    null,
  );

  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden px-5 py-14 sm:px-8">
      <div className="pointer-events-none absolute -left-36 top-10 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-36 bottom-0 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-[28px] border border-white bg-white shadow-[0_28px_90px_-35px_rgba(48,54,110,0.28)] lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="relative hidden flex-col justify-between overflow-hidden bg-[#5148e5] p-10 text-white lg:flex">
          <div className="pointer-events-none absolute -right-20 top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-8 top-36 h-40 w-40 rounded-full border border-white/10" />
          <div className="relative">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
              <Sparkles size={23} />
            </span>
            <p className="mt-10 text-sm font-semibold text-indigo-100">
              A little clarity goes a long way.
            </p>
            <h1 className="mt-3 max-w-sm text-4xl leading-tight font-semibold tracking-tighter">
              Good things happen when work flows.
            </h1>
            <p className="mt-4 max-w-sm text-sm leading-6 text-indigo-100">
              Bring your projects, people, and plans together in one place.
            </p>
          </div>
          <p className="relative text-xs text-indigo-200">
            Your next great idea starts here.
          </p>
        </aside>

        <section className="px-6 py-9 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="mx-auto max-w-md">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 lg:hidden">
              <Sparkles size={13} /> Make room for your best work
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tighter text-slate-950 sm:text-4xl">
              {isSignUp ? "Create your account" : "Welcome back"}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {isSignUp
                ? "Get your team and your ideas moving in the same direction."
                : "Sign in to pick up right where your team left off."}
            </p>

            <form action={formAction} className="mt-8 space-y-5">
              {isSignUp && (
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                    Your name
                  </label>
                  <input
                    autoComplete="name"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                    id="name"
                    name="name"
                    placeholder="Alex Morgan"
                    required
                    type="text"
                  />
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                  Email address
                </label>
                <input
                  autoComplete="email"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  id="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  type="email"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-semibold text-slate-700">
                  Password
                </label>
                <input
                  autoComplete={isSignUp ? "new-password" : "current-password"}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  type="password"
                />
              </div>

              {state?.error && (
                <p
                  aria-live="polite"
                  className="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-3 text-sm text-rose-700"
                  role="alert"
                >
                  {state.error}
                </p>
              )}

              <button
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#5148e5] px-5 text-sm font-semibold text-white shadow-md shadow-indigo-200/70 transition hover:bg-[#4338ca] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-70"
                disabled={isPending}
                type="submit"
              >
                {isPending ? (
                  <>
                    <LoaderCircle className="animate-spin" size={16} />
                    {isSignUp ? "Creating your account…" : "Signing you in…"}
                  </>
                ) : (
                  <>
                    {isSignUp ? "Create account" : "Sign in"} <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-slate-500">
              {isSignUp ? "Already have an account?" : "New to Trello?"}{" "}
              <Link
                className="font-semibold text-indigo-700 transition hover:text-indigo-900"
                href={isSignUp ? "/auth/sign-in" : "/auth/sign-up"}
              >
                {isSignUp ? "Sign in" : "Create an account"}
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
