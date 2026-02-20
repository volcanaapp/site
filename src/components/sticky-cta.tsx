"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ActionSection } from "@/components/action-section";

export function StickyCTA({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed bottom-0 left-0 w-full z-50 shadow-[0_-4px_14px_rgba(0,0,0,0.05)]"
        >
          <ActionSection />
        </motion.div>
      )}
    </AnimatePresence>
  );
}