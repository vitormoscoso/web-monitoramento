import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Historic from "./pages/Historic";

function App() {
  return (
    <Routes>
      <Route path="/web-monitoramento/" element={<Login />} />
      <Route path="/web-monitoramento/home" element={<Home />} />
      <Route path="/web-monitoramento/historico" element={<Historic />} />
    </Routes>
  );
}

export default App;
