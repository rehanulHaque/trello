import AuthForm from "@/components/auth-form";
import Navbar from "@/components/navbar";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9fc] text-slate-900">
      <Navbar />
      <AuthForm mode="sign-in" />
    </div>
  );
}
