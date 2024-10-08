import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/contacts" element={}/> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
