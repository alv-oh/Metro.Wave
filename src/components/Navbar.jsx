import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; // Add a CSS file for custom styling
import "bootstrap-icons/font/bootstrap-icons.css"; 

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <nav className="navbar navbar-expand-md bg-white shadow-sm py-3">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand fw-bold text-dark">
          MetroWave
        </Link>

        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark fw-semibold">
              <i class="bi bi-house">Home</i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addproduct" className="nav-link text-dark fw-semibold">
              <i class="bi bi-bag-plus">Add Product</i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link text-dark fw-semibold">
              <i class="bi bi-file-person-fill">About Us</i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reviews" className="nav-link text-dark fw-semibold">
              <i class="bi bi-star-fill">Reviews</i>
              </Link>
            </li>
          </ul>

          {/* User Actions */}
          <div className="navbar-nav ms-auto">
            {user ? (
              <>
                <span className="nav-link text-success fw-semibold">
                <i class="bi bi-file-person">Hello, {user.username}</i>
                </span>
                <button
                  className="btn btn-outline-dark btn-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signin" className="btn btn-outline-dark btn-sm me-2">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-dark btn-sm">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;