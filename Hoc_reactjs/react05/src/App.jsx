import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className=" container">
        <div className="row">
          <div className="col-3">
            <h2>Menu</h2>
            <Menu />
          </div>
          <div className="col-9">
            <h2>Trang chủ</h2>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />} />
              <Route path="/san-pham" element={<Product />} />
              <Route path="/lien-he" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
