import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";



function App() {
  

  return (
    <>
      <Navbar/>
      <div className="w-[90%] md:w-[80%] mx-auto">
        <Outlet/>
      </div>
    </>
  );
}

export default App;
