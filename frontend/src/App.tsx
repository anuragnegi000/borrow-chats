
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GridPattern from "./components/magicui/grid-pattern";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Meteors from "./components/magicui/meteors";
import Chat from "./pages/Chat/Chat";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <div className="overflow-y-hidden ">
        <GridPattern />
        <Meteors/>
      </div>
    </Router>
  );
}

export default App;
