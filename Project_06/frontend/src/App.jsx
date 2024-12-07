import { Routes, Route } from "react-router-dom";
import LayoutDefault from "./components/Layouts/LayoutDefault/LayoutDefault";
import TableUser from "./components/Pages/TableUser/TableUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/TableUser" element={<TableUser />} />
      </Route>
    </Routes>
  );
}

export default App;
