import { SignUp } from "@/components/SignUp/SignUp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crear tu cuenta",
  description: "",
};



export default function Page() {
  return <SignUp />;
}