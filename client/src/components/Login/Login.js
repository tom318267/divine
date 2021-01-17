import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../actions/auth";
import "./Login.scss";
import Swal from "sweetalert2";

const Login = ({ isAuthenticated, login }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated) {
    Toast.fire({
      icon: "success",
      title: "Successfully logged in",
      iconColor: "#a98ef7",
    });
    return <Redirect to="/" />;
  }

  return (
    <div className="Login">
      <div className="row">
        <form onSubmit={onSubmit} className="col s12">
          <h4>Login</h4>
          <div className="row">
            <div className="input-field col s12">
              <input
                onChange={onChange}
                id="email"
                type="email"
                className="validate"
                name="email"
                value={email}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                onChange={onChange}
                id="password"
                type="password"
                className="validate"
                name="password"
                value={password}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <button
            class="waves-effect waves-light btn-large"
            type="submit"
            name="action"
          >
            Login
          </button>
          <h6>
            Don't have an account?{" "}
            <Link className="account-register" to="/register">
              Register
            </Link>
          </h6>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
