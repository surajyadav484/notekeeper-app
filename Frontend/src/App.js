import { Routes, Route } from "react-router-dom";
import { HomePage } from "./features/components/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
