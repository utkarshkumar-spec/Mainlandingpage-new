export default function MasteryGrid() {
  const points = [
    { title: "Project 1: Career Digital Twin", desc: "Build and deploy your own Agent to represent you to potential future employers." },
    { title: "Project 2: SDR Agent", desc: "An instant business application - create Sales Representatives that craft and send professional emails." },
    { title: "Project 3: Deep Research", desc: "Make your own version of the essential Agentic use case - a team of Agents that carry out extensive research." },
    { title: "Project 4: Career Digital Twin", desc: "Build and deploy your own Agent to represent you to potential future employers." },
    { title: "Project 5: SDR Agent", desc: "An instant business application - create Sales Representatives that craft and send professional emails." },
    { title: "Project 6: Deep Research", desc: "Make your own version of the essential Agentic use case - a team of Agents that carry out extensive research." },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <div className="mb-12">
        <h2 
          className="text-gray-900 mb-4"
          style={{ fontFamily: 'Manrope, sans-serif', fontSize: '36px', fontWeight: 600, letterSpacing: '-0.04em' }}
        >
          What you'll master
        </h2>
        <p className="text-gray-500 max-w-md">
          Designed for ed-tech businesses that need full branding control, scalable infrastructure, and modern learning workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {points.map((point, i) => (
          <div 
            key={i}
            className="p-8 bg-[#F9FAFB] border border-gray-100 flex flex-col gap-4"
            style={{ borderRadius: '32px' }} // Match Figma Radius
          >
            <div className="text-[#0066FF] text-xl font-bold">✓</div>
            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '16px' }}>
              <span className="font-bold">{point.title}.</span> {point.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}