import Torstein from "./components/sections/torstein";
import Technologies from "./components/sections/technologies";

function App() {
  const checkscroll = () => {
    const element = document.getElementById("root")!;
    console.log(element.scrollHeight - element.scrollTop);
  };

  return (
    <div className="flex flex-col h-screen w-screen" id="root">
      <div className="fixed z-50">
        <div className="bg-accent">Torstein Eide</div>
        <button onClick={checkscroll}></button>
      </div>
      {/* Main content takes all space above navbar */}
      <main className="flex-grow  overflow-auto ">
        <Torstein></Torstein>
        <Technologies></Technologies>
      </main>

      {/* Hovering navbar at the bottom */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[var(--color-nav)] bg-opacity-90 shadow-lg rounded-full px-6 py-3 flex space-x-8 items-center w-[40%] justify-evenly">
        <a href="#home" className="cursor-pointer ">
          Home
        </a>
        <a href="#about" className="cursor-pointer">
          About
        </a>
        <a href="#contact" className="cursor-pointer">
          Contact
        </a>
      </nav>
    </div>
  );
}

export default App;
