import "./App.css";
import Main from "./Components/Logo";
import Logo from "./Components/Logo";
import Background from "./Components/Background";
import Product from "./Components/Product";
import Slider from "./Components/Slider";
function App() {
  return (
    <>
      {/* Mobile Section */}
      <div className="h-screen w-full flex items-center justify-center flex-col overflow-hidden  md:hidden">
          <Background />

      </div>

      {/* Desktop Section */}
      <div className="hidden md:block"></div>
    </>
  );
}

export default App;
