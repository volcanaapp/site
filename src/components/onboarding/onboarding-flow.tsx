"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/client";

import { UserInput } from "./user-input";
import { AiMessage } from "./ai-message";
import { CnpjCard } from "./cnpj-card";
import { NicheSelector } from "./niche-selector";
import { BuildingAnimation } from "./building-animation";
import { Button } from "../ui/button";

type Step =
  | "GREETING_1"
  | "GREETING_2"
  | "GET_NAME"
  | "GET_CNPJ"
  | "VALIDATING_CNPJ"
  | "CONFIRM_CNPJ"
  | "GET_NICHE"
  | "GET_CREDENTIALS"
  | "BUILDING"
  | "DONE";

type HistoryItem = {
  id: number;
  type: "ai" | "user";
  content: string | React.ReactNode;
};

export function OnboardingFlow() {
  const [step, setStep] = useState<Step>("GREETING_1");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    cnpj: "",
    niche: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const supabase = createClient();

  const addHistory = (item: Omit<HistoryItem, "id">) => {
    setHistory((prev) => [...prev, { ...item, id: prev.length }]);
  };

  useEffect(() => {
    if (step === "GREETING_1") {
      addHistory({
        type: "ai",
        content:
          "Olá. Sou o Arquiteto de Sistemas da Volcana. Vou construir sua infraestrutura de vendas agora.",
      });
      setTimeout(() => setStep("GREETING_2"), 2000);
    } else if (step === "GREETING_2") {
      addHistory({
        type: "ai",
        content: "Primeiro, como devo chamar você?",
      });
      setTimeout(() => setStep("GET_NAME"), 1500);
    }
  }, [step]);

  const handleNameSubmit = (value: string) => {
    setFormData((prev) => ({ ...prev, name: value }));
    addHistory({ type: "user", content: value });
    setStep("GET_CNPJ");
    setTimeout(() => {
      addHistory({
        type: "ai",
        content: `Prazer, ${value}. Vamos configurar a base fiscal. Qual é o CNPJ da sua operação?`,
      });
    }, 500);
  };

  const handleCnpjSubmit = (value: string) => {
    setFormData((prev) => ({ ...prev, cnpj: value }));
    addHistory({ type: "user", content: value });
    setStep("VALIDATING_CNPJ");
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep("CONFIRM_CNPJ");
    }, 2500);
  };

  const handleCnpjConfirm = () => {
    addHistory({
      type: "user",
      content: (
        <div className="font-medium text-right">Dados confirmados.</div>
      ),
    });
    setStep("GET_NICHE");
    setTimeout(() => {
      addHistory({
        type: "ai",
        content: "Para qual segmento devo otimizar a loja?",
      });
    }, 500);
  };

  const handleNicheSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, niche: value }));
    addHistory({ type: "user", content: value });
    setStep("GET_CREDENTIALS");
    setTimeout(() => {
      addHistory({
        type: "ai",
        content: "Defina seu acesso mestre ao Command Center.",
      });
    }, 500);
  };

  const handleCredentialsSubmit = async (data: any) => {
    setIsProcessing(true);
    addHistory({ type: "user", content: "Credenciais definidas." });

    const { email, password } = data;
    const { name, cnpj, niche } = formData;

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: name,
        },
      },
    });

    if (signUpError) {
      toast.error(signUpError.message);
      setIsProcessing(false);
      // NOTE: A more robust solution would allow the user to correct their input.
      // For now, we show an error and they would need to refresh to try again.
      return;
    }

    if (signUpData.user) {
      const { error: profileError } = await supabase
        .from("profiles")
        .update({
          first_name: name,
          cnpj: cnpj,
          niche: niche,
          updated_at: new Date().toISOString(),
        })
        .eq("id", signUpData.user.id);

      if (profileError) {
        toast.error("Não foi possível salvar as informações do seu perfil.");
        console.error("Profile update error:", profileError);
        setIsProcessing(false);
        return;
      }
    }

    setStep("BUILDING");
    setIsProcessing(false);
  };

  const renderContent = () => {
    if (step === "BUILDING") {
      return <BuildingAnimation onComplete={() => setStep("DONE")} />;
    }

    if (step === "DONE") {
      return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <AiMessage message="Infraestrutura Pronta. Verifique seu e-mail para confirmar sua conta." showCursor={false} />
            <Button asChild size="lg" className="mt-8 bg-lime text-[#181817] hover:bg-lime/90 font-bold text-lg py-8 px-12 rounded-xl">
              <Link href="/login">IR PARA O LOGIN</Link>
            </Button>
          </motion.div>
        </div>
      );
    }

    return (
      <div className="flex flex-col h-screen justify-end pb-20 px-8">
        <div className="space-y-8">
          <AnimatePresence>
            {history.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: index < history.length - 2 ? 0.5 : 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={item.type === "user" ? "text-right" : "text-left"}
              >
                {item.type === "ai" ? (
                  <AiMessage
                    message={item.content as string}
                    showCursor={
                      index === history.length - 1 &&
                      !isProcessing &&
                      step !== "CONFIRM_CNPJ" &&
                      step !== "GET_NICHE"
                    }
                    isProcessing={
                      index === history.length - 1 && isProcessing
                    }
                  />
                ) : (
                  <p className="text-2xl md:text-3xl font-bold">{item.content}</p>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {step === "CONFIRM_CNPJ" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <CnpjCard onConfirm={handleCnpjConfirm} />
            </motion.div>
          )}
        </div>

        <div className="mt-12">
          {step === "GET_NAME" && <UserInput type="text" placeholder="Digite seu nome..." onSubmit={handleNameSubmit} />}
          {step === "GET_CNPJ" && <UserInput type="cnpj" placeholder="00.000.000/0000-00" onSubmit={handleCnpjSubmit} />}
          {step === "GET_NICHE" && <NicheSelector onSelect={handleNicheSelect} />}
          {step === "GET_CREDENTIALS" && <UserInput type="credentials" placeholder="Seu e-mail" onSubmit={handleCredentialsSubmit} />}
        </div>
      </div>
    );
  };

  return <div className="container max-w-3xl mx-auto">{renderContent()}</div>;
}