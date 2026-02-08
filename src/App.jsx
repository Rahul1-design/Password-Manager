import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./Components/Footer";
import Manager from "./Components/Manager";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          <Manager />
        </div>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={1800}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
        />
      </div>
    </>
  );
}

export default App;
