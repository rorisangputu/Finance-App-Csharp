import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/useAuth";

function App() {
  return (
    <>
      <UserProvider>
        <Navbar />
        <div className="w-[90%] md:w-[80%] mx-auto">
          <Outlet />
        </div>
        <ToastContainer />
      </UserProvider>
    </>
  );
}

export default App;
