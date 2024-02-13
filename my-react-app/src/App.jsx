import "./App.css";
import Background from "./Components/Background";
import Slider from "./Components/Desktop/Slider";
function App() {
  return (
    <>
      {/* Mobile Section */}
      <div className="h-full  w-full flex  items-center justify-center sm:hidden flex-col overflow-hidden ">
          <Background />
    
      </div>

      {/* Desktop Section */}
      <div className="hidden ">
          <Slider />
      </div>
    </>
  );
}

export default App;
