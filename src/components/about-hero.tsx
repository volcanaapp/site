"use client";

export function AboutHero() {
  return (
    <div className="dark">
      <section className="w-full h-[70vh] relative overflow-hidden bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/volcana-ai-engenharia-brasileira-ecommerce-autonomo.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-volcana-lime/5 rounded-full blur-[150px] pointer-events-none z-0" />
      </section>
    </div>
  );
}