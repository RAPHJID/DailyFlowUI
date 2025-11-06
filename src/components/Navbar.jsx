import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        background: "#2d3436",
        color: "white",
        borderRadius: "0 0 10px 10px",
      }}
    >
      <h2>📝 JournalApp</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link
          to="/"
          style={{
            color: location.pathname === "/" ? "#00cec9" : "white",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
        <Link
          to="/add"
          style={{
            color: location.pathname === "/add" ? "#00cec9" : "white",
            textDecoration: "none",
          }}
        >
          Add Entry
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
