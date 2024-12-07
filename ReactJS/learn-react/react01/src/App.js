import "./App.css";
import Header from "./components/header/index.js";
import Footer from "./components/footer/index.js";
import NavigationMenu from "./components/NavigationMenu/index.js";
import MainContent from "./components/MainContent/index.js";
import Content from "./components/content/index.js";
function App() {
  return (
    <>
      <Header />
      <NavigationMenu />
      <div className="main">
        <Content text="Content1" number={10} active={true} />
        <MainContent />
        <Content text="Content2" number={1} active={false} />
      </div>
      <Footer />
    </>
  );
}

export default App;
