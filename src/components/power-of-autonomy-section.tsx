export function PowerOfAutonomySection({ dictionary }: { dictionary: any }) {
  const columns = [
    {
      title: dictionary.insights.title,
      text: dictionary.insights.text,
    },
    {
      title: dictionary.execution.title,
      text: dictionary.execution.text,
    },
    {
      title: dictionary.agents.title,
      text: dictionary.agents.text,
    },
  ];

  return (
    <div className="dark">
      <section className="bg-background py-20 md:py-32">
        <div className="container max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
              {dictionary.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {columns.map((column, index) => (
              <div key={index} className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="relative h-48 w-48 mb-8">
                  <video
                    src="https://a.storyblok.com/f/314917/x/168e5e4f12/ai_solutions-loop.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight mb-4 text-lime uppercase">
                  {column.title}
                </h3>
                <p className="text-lg text-muted-foreground">{column.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}