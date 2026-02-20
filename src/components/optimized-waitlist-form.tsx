"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { addToWaitlist } from "@/app/actions/waitlist";
import { Loader2, ArrowRight } from "lucide-react";

const initialState = {
  error: null,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  const [status, setStatus] = useState("idle"); // idle, pending, verifying

  useEffect(() => {
    if (pending) {
      setStatus("pending");
      const timer = setTimeout(() => setStatus("verifying"), 1500);
      return () => clearTimeout(timer);
    } else {
      setStatus("idle");
    }
  }, [pending]);

  const texts: { [key: string]: any } = {
    idle: <>Quero participar! <ArrowRight className="ml-2 h-4 w-4" /></>,
    pending: <>Enviando... <Loader2 className="ml-2 h-4 w-4 animate-spin" /></>,
    verifying: <>Verificando elegibilidade... <Loader2 className="ml-2 h-4 w-4 animate-spin" /></>,
  };

  return (
    <div className="p-[2px] pb-[6px] rounded-lg w-full sm:w-auto animated-border-gradient">
      <Button
        type="submit"
        disabled={pending}
        className="bg-[#D3FE3E] text-gray-900 hover:brightness-110 font-bold text-base h-12 px-8 rounded-md w-full sm:w-auto flex-shrink-0 transition-all transform active:translate-y-1 shadow-[0_4px_0_#a8d12d] active:shadow-none"
      >
        {texts[status]}
      </Button>
    </div>
  );
}

export function OptimizedWaitlistForm() {
  const [state, formAction] = useFormState(addToWaitlist, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast.success("Você está na lista! Entraremos em contato em breve.");
      formRef.current?.reset();
    } else if (state.error === "duplicate") {
      toast.error("Este e-mail já está na nossa lista de espera.");
    } else if (state.error === "generic_domain") {
      toast.error("Por favor, use um e-mail corporativo.");
    } else if (state.error) {
      toast.error("Ocorreu um erro. Tente novamente.");
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl w-full">
      <Input
        type="email"
        name="email"
        placeholder="Seu melhor e-mail corporativo"
        required
        className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 h-12 px-4 rounded-lg flex-grow w-full focus:ring-2 focus:ring-lime-300"
      />
      <SubmitButton />
    </form>
  );
}