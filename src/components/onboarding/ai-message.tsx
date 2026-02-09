import { motion } from "framer-motion";

interface AiMessageProps {
  message: string;
  showCursor?: boolean;
  isProcessing?: boolean;
}

export function AiMessage({ message, showCursor = true, isProcessing = false }: AiMessageProps) {
  return (
    <div className="flex items-center space-x-2">
      <p className="text-2xl md:text-3xl font-medium text-foreground">
        {message}
        {showCursor && (
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="ml-1 inline-block h-7 w-2 bg-foreground relative top-0.5"
          >
          </motion.span>
        )}
         {isProcessing && (
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="ml-2 inline-block h-6 w-2 bg-lime relative top-0.5"
          >
          </motion.span>
        )}
      </p>
    </div>
  );
}