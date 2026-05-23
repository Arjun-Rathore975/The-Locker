export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <span className="text-xl font-semibold tracking-tight">The Locker</span>
        <div className="flex gap-6 text-sm text-white/50">
          <a href="#" className="hover:text-white transition">Players</a>
          <a href="#" className="hover:text-white transition">Leagues</a>
          <a href="#" className="hover:text-white transition">Latest</a>
        </div>
      </nav>

      <section className="px-8 py-20 max-w-4xl">
        <p className="text-sm text-white/40 uppercase tracking-widest mb-4">Access all areas</p>
        <h1 className="text-6xl font-semibold tracking-tight leading-tight mb-6">
          Inside the lives of<br />football&apos;s biggest stars.
        </h1>
        <p className="text-lg text-white/50 max-w-xl leading-relaxed">
          Career. Family. Wealth. Lifestyle. Follow your favourite footballers the way you follow celebrities — the full story, not just the highlights.
        </p>
      </section>

      <section className="px-8 pb-20">
        <p className="text-sm text-white/40 uppercase tracking-widest mb-6">Featured players</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Jude Bellingham", "Mohamed Salah", "Erling Haaland"].map((name) => (
            <div key={name} className="border border-white/10 rounded-xl p-6 hover:border-white/30 transition cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white/10 mb-4" />
              <h3 className="font-medium text-lg mb-1">{name}</h3>
              <p className="text-sm text-white/40">View full profile →</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}