import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "../src/styles/App.scss";
import Home from "./components/Home";
import Contact from "./components/contact";
import Information from "./components/Information";
import Guide from "./components/Guide";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/information" element={<Information />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
