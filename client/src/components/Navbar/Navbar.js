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
        <Link to="/" className="link hvr-rectangle-out">
          HOME
        </Link>
      </li>
      <li>
        <Link to="/reviews" className="link hvr-rectangle-out">
          REVIEWS
        </Link>
      </li>
      <li>
        <Link to="/mediums" className="link hvr-rectangle-out">
          MEDIUMS
        </Link>
      </li>
      <li onClick={logout}>
        <Link className="link hvr-rectangle-out">LOGOUT</Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="right hide-on-med-and-down">
      <li>
        <Link to="/" className="link hvr-rectangle-out">
          HOME
        </Link>
      </li>
      <li>
        <Link to="/reviews" className="link hvr-rectangle-out">
          REVIEWS
        </Link>
      </li>
      <li>
        <Link to="/mediums" className="link hvr-rectangle-out">
          MEDIUMS
        </Link>
      </li>
      <li>
        <Link to="/login" className="link hvr-rectangle-out">
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
            <Link to="/reviews" className="hvr-underline-from-center">
              REVIEWS
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
