export default function Footer() {
  return (
    // Footer ki initial padding-top bilkul khatam (pt-0)
    <footer className="w-full bg-white pt-0">
      <div className="max-w-7xl mx-auto px-6">
        {/* Is banner ko upar kheechne ke liye -mt-4 use kiya hai */}
        <div className="relative overflow-hidden rounded-[1.2rem] bg-gradient-to-r from-[#0066FF] to-[#99C2FF] p-6 -mt-4 z-20">
          <div className="flex flex-col items-center justify-between gap-4 text-center">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Start your journey today
            </h2>
            <a href="#" className="bg-white text-[#0066FF] px-6 py-2 rounded-lg font-semibold text-sm">
              Schedule Demo
            </a>
          </div>
        </div>
      </div>

      {/* Blue background wala hissa */}
      <div className="w-full bg-[#EDF4FF] -mt-10 pt-16 pb-6">
        {/* Footer links content... */}
      </div>
    </footer>
  );
}