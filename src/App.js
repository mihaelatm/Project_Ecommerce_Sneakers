import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/contacts" element={}/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
