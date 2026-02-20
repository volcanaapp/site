"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { addToWaitlist } from "@/app/actions/waitlist";
import { ArrowRight } from "lucide-react";

const initialState = {
  error: undefined,
  success: false,
};

function SubmitButton({ text, pendingText }: { text: string, pendingText: string }) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="bg-lime text-[#181817] hover:bg-lime/90 font-bold text-base h-14 px-8 rounded-lg w-full sm:w-auto flex-shrink-0"
    >
      {pending ? pendingText : text}
      {!pending && <ArrowRight className="ml-2 h-4 w-4" />}
    </Button>
  );
}

export function WaitlistForm({ dictionary }: { dictionary: any }) {
  const [state, formAction] = useFormState(addToWaitlist, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast.success(dictionary.success_toast);
      formRef.current?.reset();
    } else if (state.error === "duplicate") {
      toast.error(dictionary.error_toast_duplicate);
    } else if (state.error === "generic") {
      toast.error(dictionary.error_toast_generic);
    }
  }, [state, dictionary]);

  return (
    <div className="max-w-3xl mx-auto bg-[#1C1C1B] border border-[#353634] p-8 rounded-2xl">
      <span className="inline-block text-lime border border-lime/50 rounded-full px-4 py-1 text-xs font-medium tracking-widest uppercase">
        {dictionary.form_badge}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold my-4 bg-gradient-to-b from-white to-[#9EA09A] bg-clip-text text-transparent">
        {dictionary.form_title}
      </h2>
      <p className="text-muted-foreground mb-8">
        {dictionary.form_subtitle}
      </p>
      <form ref={formRef} action={formAction} className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Input
          type="email"
          name="email"
          placeholder={dictionary.form_placeholder}
          required
          className="bg-[#353634] border-[#565754] text-white placeholder:text-muted-foreground h-14 px-6 rounded-lg flex-grow w-full"
        />
        <SubmitButton text={dictionary.form_button} pendingText="Enviando..." />
      </form>
      <p className="mt-6 text-sm text-muted-foreground">
        {dictionary.form_footer}
      </p>
    </div>
  );
}