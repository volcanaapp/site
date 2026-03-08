"use client";

export function AboutVideoHero() {
  return (
    <section className="h-screen w-full relative overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-80"
        src="/volcana-ai-engenharia-brasileira-ecommerce-autonomo.mp4"
      />
      <div className="absolute inset-0 bg-black/30" />
    </section>
  );
}