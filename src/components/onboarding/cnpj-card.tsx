import { motion } from "framer-motion";
import { Button } from "../ui/button";

interface CnpjCardProps {
  onConfirm: () => void;
}

export function CnpjCard({ onConfirm }: CnpjCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      className="border border-[#181817] rounded-lg p-6"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <p className="text-sm text-gray-500">Razão Social</p>
          <p className="text-xl font-bold text-[#181817]">VOLCANA TECNOLOGIA LTDA</p>
          <p className="text-sm text-gray-500 mt-2">Localização</p>
          <p className="text-lg font-medium text-[#181817]">São Paulo/SP</p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <Button
            onClick={onConfirm}
            className="w-full md:w-auto bg-[#181817] text-white hover:bg-black/80 font-bold px-6 py-3 rounded-lg"
          >
            CONFIRMAR
          </Button>
          <Button variant="ghost" className="w-full md:w-auto">EDITAR</Button>
        </div>
      </div>
      <p className="mt-4 text-sm font-medium flex items-center gap-2">
        Status: <span className="text-green-600 font-bold flex items-center">Ativa ✅</span>
      </p>
    </motion.div>
  );
}