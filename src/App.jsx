//import ScrollFloat from "./components/ScrollFloat";
import SplitText from "./components/SplitText";

export default function GameStormUI() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] pt-17">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
        <nav className="bg-[#1a1a1a] border-b border-green-400">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-green-400 tracking-wide">GameStorm</h1>
            <ul className="hidden md:flex space-x-4 text-sm uppercase font-semibold tracking-wide transition-all">
              <li><a href="#" className="hover:text-green-400 px-4 py-2 rounded transition shadow ease-in-out hover:bg-black">Home</a></li>
              <li><a href="#" className="hover:text-green-400 px-4 py-2 rounded transition shadow ease-in-out hover:bg-black">Games</a></li>
              <li><a href="#" className="hover:text-green-400 px-4 py-2 rounded transition shadow ease-in-out hover:bg-black">Esports</a></li>
              <li><a href="#" className="hover:text-green-400 px-4 py-2 rounded transition shadow ease-in-out hover:bg-black">Contact</a></li>
            </ul>
            <button className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded text-sm font-bold uppercase">
              Join Now
            </button>
          </div>
        </nav>
      </div>

      {/* Scroll Animation Section */}
        <section className="bg-green-700 mb-10 py-30">
        <SplitText
          text="Welcome to GameStorm Studios!"
          className="text-6xl text-center font-extrabold text-green-900"
          delay={0.1} // Use seconds, not 100ms integers
          duration={0.6}
          ease="power3.out"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          rootMargin="-100px"
        />
      </section>

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-400 mb-4 drop-shadow-lg">
          Unleash Your Inner Gamer
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
          Dive into immersive worlds, compete in tournaments, and be part of the GameStorm legacy.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-md text-lg font-bold uppercase shadow">
          Explore Games
        </button>
      </section>


      {/* Features */}
      <section className="py-16 bg-[#121212]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            { title: "Epic Titles", desc: "Experience adrenaline-packed, next-gen games." },
            { title: "Global Tournaments", desc: "Compete with elite players across the world." },
            { title: "Gamer Community", desc: "Join a growing tribe of pro and casual gamers on our discord channel." },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] p-6 rounded-lg border border-gray-800 hover:border-green-500 transition shadow hover:shadow-green-500/20 hover:bg-gray-950"
            >
              <h3 className="text-xl font-bold text-green-400 mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} GameStorm. All rights reserved.
      </footer>
    </div>
  );
}
