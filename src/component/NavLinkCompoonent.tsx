import { Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import { defaultUser, User } from "../model/User";

export const NavLinkCompoonent = () => {
  const navigate = useNavigate();
  const [savedUser, setSavedUser] = useLocalStorage<User>(
    "saved-user",
    defaultUser
  );
  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary `}>
      <div className="container-fluid">
        <div className="navbar-brand">TypeScript</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                dashboard
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={() => {
                setSavedUser(defaultUser);
                navigate("/login");
              }}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
