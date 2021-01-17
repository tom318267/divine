import React from "react";
import { connect } from "react-redux";
import crystalBall from "../../assets/crystal-ball.png";
import divineLogo from "../../assets/Divine.png";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import "./Navbar.scss";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className="right hide-on-med-and-down">
      <li>
        <Link className="link hvr-rectangle-out" to="/">
          HOME
        </Link>
      </li>
      <li>
        <Link className="link hvr-rectangle-out" href="badges.html">
          FREE READING
        </Link>
      </li>
      <li>
        <Link to="/mediums" className="link hvr-rectangle-out">
          MEDIUMS
        </Link>
      </li>
      <li onClick={logout}>
        <Link className="link hvr-rectangle-out" href="mobile.html">
          LOGOUT
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="right hide-on-med-and-down">
      <li>
        <Link className="link hvr-rectangle-out" to="/">
          HOME
        </Link>
      </li>
      <li>
        <Link className="link hvr-rectangle-out" href="badges.html">
          FREE READING
        </Link>
      </li>
      <li>
        <Link to="/mediums" className="link hvr-rectangle-out">
          MEDIUMS
        </Link>
      </li>
      <li>
        <Link to="/login" className="link hvr-rectangle-out" href="mobile.html">
          LOGIN
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="Navbar">
      <nav className="transparent z-depth-0">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            <div className="divine-div">
              <img id="ball" src={crystalBall} alt="crystal_ball" />{" "}
              <img id="divine-logo" src={divineLogo} alt="divine_logo" />
            </div>
          </Link>
          <Link href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <div className="mobile-overlay">
          <li>
            <Link to="/" className="hvr-underline-from-center">
              HOME
            </Link>
          </li>
          <li>
            <Link className="hvr-underline-from-center" href="badges.html">
              FREE READING
            </Link>
          </li>
          <li>
            <Link to="/mediums" className="hvr-underline-from-center">
              MEDIUMS
            </Link>
          </li>
          <li>
            {!loading && (
              <>
                {isAuthenticated ? (
                  <Link onClick={logout} className="hvr-underline-from-center">
                    LOGOUT
                  </Link>
                ) : (
                  <Link to="/login" className="hvr-underline-from-center">
                    LOGIN
                  </Link>
                )}
              </>
            )}
          </li>
        </div>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
