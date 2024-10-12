import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GridPattern from "./components/magicui/grid-pattern";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Meteors from "./components/magicui/meteors";
import Chats from "./pages/Chats/Chats";
import Chat from "./pages/Chat/Chat";
import { SocketProvider } from "./context/socket";

function App() {
  return (
    <Router>
      <SocketProvider>
        <div className="flex flex-col items-center">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <div className="overflow-y-hidden ">
          <GridPattern />
          <Meteors />
        </div>
      </SocketProvider>
    </Router>
  );
}

export default App;
