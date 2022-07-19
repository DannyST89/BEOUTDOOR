import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>BEOUTDOORS</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          background: "green",
        }}
      >
        <Link to="/AboutUs">About Us</Link> |{" "}
        <Link to="/OurTours">Out Tours</Link>
      </nav>
    </div>
  );
}

export default App;
