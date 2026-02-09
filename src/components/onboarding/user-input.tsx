"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

interface UserInputProps {
  type: "text" | "cnpj" | "credentials";
  placeholder: string;
  onSubmit: (value: any) => void;
}

export function UserInput({ type, placeholder, onSubmit }: UserInputProps) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [isFocused, setIsFocused] = useState(false);

  const handleMask = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'cnpj') {
      let value = e.target.value.replace(/\D/g, "");
      value = value.replace(/^(\d{2})(\d)/, "$1.$2");
      value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
      value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
      value = value.replace(/(\d{4})(\d)/, "$1-$2");
      e.target.value = value.slice(0, 18);
    }
  };

  const formSubmit: SubmitHandler<any> = (data) => {
    if (type === 'text' || type === 'cnpj') {
      onSubmit(data.mainInput);
    } else {
      onSubmit(data);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      onSubmit={handleSubmit(formSubmit)}
      className="w-full"
    >
      {type === 'credentials' ? (
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="w-full relative">
            <input
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              type="email"
              placeholder={placeholder}
              autoComplete="off"
              className="w-full bg-transparent text-2xl md:text-3xl font-bold text-foreground placeholder:text-muted-foreground placeholder:font-light focus:outline-none border-b-2 border-foreground py-2"
            />
          </div>
          <div className="w-full relative">
            <input
              {...register("password", { required: true, minLength: 6 })}
              type="password"
              placeholder="Sua senha"
              autoComplete="off"
              className="w-full bg-transparent text-2xl md:text-3xl font-bold text-foreground placeholder:text-muted-foreground placeholder:font-light focus:outline-none border-b-2 border-foreground py-2"
            />
          </div>
          <button type="submit" className="bg-primary text-primary-foreground font-bold px-8 py-4 rounded-lg text-lg h-full">
            Finalizar
          </button>
        </div>
      ) : (
        <div className="relative">
          <input
            {...register("mainInput", { required: true })}
            type="text"
            placeholder={placeholder}
            autoComplete="off"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleMask}
            className="w-full bg-transparent text-2xl md:text-3xl font-bold text-foreground placeholder:text-muted-foreground placeholder:font-light focus:outline-none"
          />
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-foreground"
            initial={{ width: "0%" }}
            animate={{ width: isFocused || watch("mainInput") ? "100%" : "0%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
      )}
    </motion.form>
  );
}