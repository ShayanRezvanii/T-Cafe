import "./App.css";
import Main from "./Components/Logo";
import Logo from "./Components/Logo";
import Background from "./Components/Background";
import Product from "./Components/Product";
import Slider from "./Components/Desktop/Slider";
function App() {
  return (
    <>
      {/* Mobile Section */}
      <div className="h-full  w-full flex  items-center justify-center sm:hidden flex-col overflow-hidden">
          <Background />
    
      </div>

      {/* Desktop Section */}
      <div className="hidden md:block ">
          <Slider />
      </div>
    </>
  );
}

export default App;
