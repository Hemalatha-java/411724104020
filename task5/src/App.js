import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Book Pages
import AtomicHabits from "./books/AtomicHabits";
import Alchemist from "./books/Alchemist";
import RichDad from "./books/RichDad";
import Ikigai from "./books/Ikigai";
import DeepWork from "./books/DeepWork";
import PsychologyMoney from "./books/PsychologyMoney";

// Author Pages
import JamesClear from "./authors/JamesClear";
import PauloCoelho from "./authors/PauloCoelho";
import RobertKiyosaki from "./authors/RobertKiyosaki";
import HectorGarcia from "./authors/HectorGarcia";
import CalNewPort from "./authors/CalNewPort";
import MorganHousel from "./authors/MorganHousel";

function App() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Books */}
      <Route path="/books" element={<Books />} />
      <Route path="/books/atomic-habits" element={<AtomicHabits />} />
      <Route path="/books/the-alchemist" element={<Alchemist />} />
      <Route path="/books/rich-dad-poor-dad" element={<RichDad />} />
      <Route path="/books/ikigai" element={<Ikigai />} />
      <Route path="/books/deep-work" element={<DeepWork />} />
      <Route
        path="/books/the-psychology-of-money"
        element={<PsychologyMoney />}
      />

      {/* Authors */}
      <Route path="/authors" element={<Authors />} />
      <Route path="/authors/james-clear" element={<JamesClear />} />
      <Route path="/authors/paulo-coelho" element={<PauloCoelho />} />
      <Route path="/authors/robert-kiyosaki" element={<RobertKiyosaki />} />
      <Route path="/authors/hector-garcia" element={<HectorGarcia />} />
      <Route path="/authors/cal-newport" element={<CalNewPort />} />
      <Route path="/authors/morgan-housel" element={<MorganHousel />} />

      {/* About */}
      <Route path="/about" element={<About />} />

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;