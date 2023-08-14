import AmmosPage from "./pages/directory/AmmosPage";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ammos" element={<AmmosPage />} />
      </Routes>
    </>
  );
}

export default App;
