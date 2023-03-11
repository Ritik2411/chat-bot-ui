import { ToastContainer } from "react-toastify";
import "./App.css";
import ChatBoard from "./components/ChatBoard.component";

function App() {
  return (
    <div className="App">
      <ChatBoard />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
