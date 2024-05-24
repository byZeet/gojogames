import { SignIn } from "@/components/SignIn/SignIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "",
};

export default function Page() {
  return <SignIn />;
}