export default function RonaldoProfile() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <a href="/" className="text-xl font-semibold tracking-tight">The Locker</a>
        <div className="flex gap-6 text-sm text-white/50">
          <a href="#" className="hover:text-white transition">Players</a>
          <a href="#" className="hover:text-white transition">Leagues</a>
          <a href="#" className="hover:text-white transition">Latest</a>
        </div>
      </nav>
      <section className="px-8 pt-16 pb-12 border-b border-white/10 max-w-5xl">
        <p className="text-xs text-white/30 uppercase tracking-widest mb-6">Forward · Al Nassr · Portugal</p>
        <h1 className="text-7xl font-semibold tracking-tight leading-none mb-4">Cristiano<br />Ronaldo</h1>
        <p className="text-white/40 text-lg max-w-2xl leading-relaxed">Football&apos;s first billionaire. 973 career goals and counting. A boy from the slums of Madeira who became the most followed human on the internet.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {[{num:"973",label:"Career goals",sub:"Chasing 1,000"},{num:"143",label:"International goals",sub:"Men's all-time record"},{num:"41",label:"Years old",sub:"Still scoring 40+ a year"},{num:"$1.2B",label:"Net worth",sub:"Football's first billionaire"}].map((s)=>(<div key={s.label} className="border border-white/10 rounded-xl p-5"><p className="text-3xl font-semibold mb-1">{s.num}</p><p className="text-sm text-white/60">{s.label}</p><p className="text-xs text-white/30 mt-1">{s.sub}</p></div>))}
        </div>
      </section>
      <div className="max-w-5xl px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-14">
          <section>
            <p className="text-xs text-white/30 uppercase tracking-widest mb-4">Origin story</p>
            <h2 className="text-2xl font-semibold mb-4">From Madeira to the world</h2>
            <div className="space-y-4 text-white/60 text-sm leading-relaxed">
              <p>Cristiano Ronaldo dos Santos Aveiro was born on 5 February 1985 in Funchal, Madeira — the youngest of four children. His family lived in a cramped house in Santo António, one of the island&apos;s poorest neighbourhoods. His father José worked as a municipal gardener and part-time kit man. His mother Maria Dolores cleaned floors to keep the family fed.</p>
              <p>His mother has spoken publicly about how doctors advised her to terminate the pregnancy due to exhaustion. She refused. He emerged premature and underweight. The family sometimes didn&apos;t have enough to eat.</p>
              <p>At 8 he joined Andorinha, where his father worked. By 10 he was at Nacional. Sporting CP scouts spotted him at 11 — a life-changing offer that required a 12-year-old to leave his family and travel 900km alone to Lisbon. He cried every night for weeks. He left school at 14 to commit fully to football.</p>
              <p>In 2003, aged 18, he signed for Manchester United for £12.24M after one extraordinary pre-season friendly convinced Sir Alex Ferguson on the spot. His father José died in 2005 from liver failure — before he could witness a single trophy.</p>
            </div>
          </section>
          <section>
            <p className="text-xs text-white/30 uppercase tracking-widest mb-4">Career</p>
            <h2 className="text-2xl font-semibold mb-6">The football story</h2>
            <div className="space-y-6">
              {[{period:"2002–2003",club:"Sporting CP",detail:"Professional debut at 17. One match against Man United changed everything."},{period:"2003–2009",club:"Manchester United",detail:"3 Premier League titles, 1 Champions League, 1 Ballon d'Or. Transformed from raw winger to world-class forward under Ferguson."},{period:"2009–2018",club:"Real Madrid",detail:"450 goals in 438 games. 4 Champions League titles. 4 Ballon d'Or awards. All-time top scorer. Sold for €117M."},{period:"2018–2021",club:"Juventus",detail:"2 Serie A titles. 101 goals in 134 games. Proved he could dominate a third major league in his 30s."},{period:"2021–2022",club:"Manchester United",detail:"Difficult return. No trophies. Contract terminated November 2022 after a candid Piers Morgan interview."},{period:"2023–present",club:"Al Nassr",detail:"127 goals in 146 games. Back-to-back Saudi Golden Boots. Only player to score 100+ for four different clubs. Contract runs to June 2027."}].map((c)=>(<div key={c.period} className="flex gap-6"><div className="flex flex-col items-center"><div className="w-2 h-2 rounded-full bg-white/40 mt-1.5 flex-shrink-0"/><div className="w-px flex-1 bg-white/10 mt-2"/></div><div className="pb-6"><p className="text-xs text-white/30 mb-1">{c.period}</p><p className="font-medium mb-1">{c.club}</p><p className="text-sm text-white/50 leading-relaxed">{c.detail}</p></div></div>))}
            </div>
          </section>
          <section>
            <p className="text-xs text-white/30 uppercase tracking-widest mb-4">Personal life</p>
            <h2 className="text-2xl font-semibold mb-4">The man behind the goals</h2>
            <div className="space-y-4 text-white/60 text-sm leading-relaxed">
              <p>In late 2016 Ronaldo walked into a Gucci store in Madrid. Georgina Rodríguez, then 22, was working as a sales assistant. They began dating quietly. On 11 August 2025, after nine years together, he proposed. She posted a photo of a 37-carat oval diamond ring, estimated at $3 million, captioned: &quot;Yes I do. In this and in all my lives.&quot;</p>
              <p>In April 2022, during the birth of their twins, their son Ángel died. Bella Esmeralda survived. Ronaldo: &quot;I say to the kids — Ángel, he go to Heaven. He is part of their lives. I am not gonna lie to my kids.&quot;</p>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
              {[{name:"Cristiano Jr.",age:"15",detail:"Born June 2010. Al Nassr academy. Portugal U15. Ronaldo's dream: play alongside him."},{name:"Eva & Mateo",age:"7",detail:"Twins born June 2017 via surrogate. Eva quiet, Mateo competitive."},{name:"Alana Martina",age:"7",detail:"Born November 2017. Georgina's first biological child with Ronaldo."},{name:"Bella Esmeralda",age:"3",detail:"Born April 2022. Survived twin birth in which brother Ángel did not."}].map((child)=>(<div key={child.name} className="border border-white/10 rounded-xl p-4"><div className="flex items-center gap-3 mb-2"><p className="font-medium text-sm">{child.name}</p><span className="text-xs text-white/30">age {child.age}</span></div><p className="text-xs text-white/40 leading-relaxed">{child.detail}</p></div>))}
            </div>
          </section>
        </div>
        <div className="space-y-6">
          <div className="border border-white/10 rounded-xl p-5">
            <p className="text-xs text-white/30 uppercase tracking-widest mb-4">Fast facts</p>
            {[["Born","5 Feb 1985, Funchal, Madeira"],["Age","41"],["Position","Centre-forward"],["Club","Al Nassr"],["Contract","Until June 2027"],["Shirt","#7"],["Height","1.87m"],["Fiancée","Georgina Rodríguez"],["Kids","5"]].map(([k,v])=>(<div key={k} className="flex justify-between py-2.5 border-b border-white/5 last:border-0"><span className="text-xs text-white/30">{k}</span><span className="text-xs text-white/70 text-right">{v}</span></div>))}
          </div>
          <div className="border border-white/10 rounded-xl p-5">
            <p className="text-xs text-white/30 uppercase tracking-widest mb-3">Wealth</p>
            <p className="text-2xl font-semibold mb-1">$1.2 billion</p>
            <p className="text-xs text-white/30 mb-4">Football&apos;s first billionaire, June 2025</p>
            {[["Salary","~$224M/year","€4M per week"],["Total package","~$275M/year","Inc. bonuses + commercial"],["Equity","15% of Al Nassr","~$45M value"],["Nike deal","$18M/year","Lifetime contract"],["Endorsements","~$60M/year","Herbalife, Binance +"],["CR7 Hotels","6 properties","Riyadh flagship 2026"]].map(([k,v,s])=>(<div key={k} className="py-2.5 border-b border-white/5 last:border-0"><div className="flex justify-between"><span className="text-xs text-white/40">{k}</span><span className="text-xs text-white font-medium">{v}</span></div><p className="text-xs text-white/20 text-right">{s}</p></div>))}
          </div>
          <div className="border border-white/10 rounded-xl p-5">
            <p className="text-xs text-white/30 uppercase tracking-widest mb-4">What&apos;s next</p>
            {["1,000 career goals — 29 away","FIFA World Cup 2026 with Portugal","Win Al Nassr's first Saudi title","Play alongside Cristiano Jr.","Marry Georgina Rodríguez","CR7 Hotel Riyadh opens 2026"].map((g)=>(<div key={g} className="flex gap-2 items-start py-1.5"><span className="text-white/20 text-xs mt-0.5">→</span><p className="text-xs text-white/50">{g}</p></div>))}
          </div>
        </div>
      </div>
    </main>
  );
}
