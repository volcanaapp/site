import { Logo } from "./logo";

export function SimpleFooter() {
  return (
    <footer className="py-8 bg-white">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <Logo className="h-7" />
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Volcana™. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}