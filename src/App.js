import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JournalList from "./pages/JournalList";
import JournalForm from "./pages/JournalForm";
import JournalView from "./pages/JournalView";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container" style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<JournalList />} />
          <Route path="/add" element={<JournalForm />} />
          <Route path="/edit/:id" element={<JournalForm />} />
          <Route path="/view/:id" element={<JournalView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
