import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import { Link, Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import "./Signup.scss";

const Signup = ({ register, isAuthenticated }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = form;

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

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Toast.fire({
        icon: "error",
        title: "Passwords do not match",
      });
    } else {
      register({ name, email, password });
      Toast.fire({
        icon: "success",
        title: `Welcome to Divine ${name}!`,
        iconColor: "#a98ef7",
      });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="Signup">
      <div className="row">
        <form onSubmit={onSubmit} className="col s12">
          <h4>Sign Up</h4>
          <div className="row">
            <div className="input-field col s12">
              <input
                onChange={onChange}
                id="name"
                type="text"
                className="validate"
                name="name"
                value={name}
                required
              />
              <label htmlFor="name">Name</label>
            </div>
          </div>
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
          <div className="row">
            <div className="input-field col s12">
              <input
                onChange={onChange}
                id="confirmPassword"
                type="password"
                className="validate"
                name="confirmPassword"
                value={confirmPassword}
                required
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
          </div>
          <button
            className="waves-effect waves-light btn-large"
            type="submit"
            name="action"
          >
            Register
          </button>
          <h6>
            Aleady have an account?{" "}
            <Link className="account-login" to="/login">
              Login
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

export default connect(mapStateToProps, { register })(Signup);
