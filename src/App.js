import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Cart from "./components/Cart";


import "./styles/main.css";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
