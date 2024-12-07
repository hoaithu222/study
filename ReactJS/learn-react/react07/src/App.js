
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Errors from "./pages/Errors";
import LayoutDefault from "./Layout/LayoutDefault";
import Blog from "./pages/Blog";
import BlogNews from "./pages/Blog/BlogNews";
import BlogRelated from './pages/Blog/BlogRelated';
import BlogAll from './pages/Blog/BlogAll';
import BlogDetail from './pages/Blog/BlogDetail';
import InfoUser from './pages/InfoUser/InfoUser';
import Login from './pages/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<LayoutDefault />} >
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Blog" element={<Blog />}>
            <Route index element={<BlogAll />} />
            <Route path="News" element={<BlogNews />} />
            <Route path="related" element={<BlogRelated />} />
            <Route path=":id" element={<BlogDetail />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="info-user" element={<InfoUser />} />

          </Route>

        </Route>
        <Route path="*" element={<Errors />} />

      </Routes>
    </>
  );
}

export default App;
