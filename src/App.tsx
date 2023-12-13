import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Historic from "./pages/Historic";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/historico" element={<Historic />} />
    </Routes>
  );
}

export default App;
