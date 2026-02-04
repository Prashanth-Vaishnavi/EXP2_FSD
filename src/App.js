import "./App.css";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {

  const [page, setPage] = useState("home");

  const renderPage = () => {
    if (page === "home") return <Home />;
    if (page === "about") return <About />;
    if (page === "contact") return <Contact />;
  };

  return (
    <div>

      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">

        <div className="container">
          <h3 className="text-white">My Website</h3>

          <div>
            <button className="btn btn-light m-2" onClick={() => setPage("home")}>
              Home
            </button>

            <button className="btn btn-light m-2" onClick={() => setPage("about")}>
              About
            </button>

            <button className="btn btn-light m-2" onClick={() => setPage("contact")}>
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {renderPage()}

    </div>
  );
}

export default App;
