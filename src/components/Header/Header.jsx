import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Auth Master</a>

        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        {/* <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link> */}
        <Link className="btn btn-ghost normal-case text-xl" to="/orders">
          Orders
        </Link>
        {user && (
          <Link className="btn btn-ghost normal-case text-xl" to="/profile">
            Profile
          </Link>
        )}
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>

        <div className="absolute right-0">
          {user ? (
            <>
              <span className="mr-2">{user.email}</span>
              <button onClick={handleLogOut}>
                <Link className="btn btn-ghost normal-case text-xl">Log out</Link>
              </button>
            </>
          ) : (
            <Link className="btn btn-ghost normal-case text-xl" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
