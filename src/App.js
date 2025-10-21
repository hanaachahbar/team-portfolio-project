import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AyaMouffok from "./pages/Aya-mouffok";
import HanaaChahbar from "./pages/Hanaa-chahbar";
import IlafeNamra from "./pages/Ilafe-namra-hamdat";
import MohamedSaad from "./pages/Mohamed-alamin-saad";
import DanilOuakli from "./pages/Danil-ouakli";
import AymenZahzouh from "./pages/Aymen-zahzouh";

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aya-mouffok" element={<AyaMouffok />} />
        <Route path="/Hanaa-chahbar" element={<HanaaChahbar />} />
        <Route path="/Ilafe-namra-hamdat" element={<IlafeNamra />} />
        <Route path="/Mohamed-alamin-saad" element={<MohamedSaad />} />
        <Route path="/Danil-ouakli" element={<DanilOuakli />} />
        <Route path="/Aymen-zahzouh" element={<AymenZahzouh />} />
      </Routes>
    </Router>
  );
}
