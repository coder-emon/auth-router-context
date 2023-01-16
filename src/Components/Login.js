import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../UserContext/UserContext";

const Login = () => {
  const { logIn, setUser, signInWithGoogle } = useContext(userContext);
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        Navigate("/home");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        Navigate("/home");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    New to this site please register
                  </Link>
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary" onClick={handleGoogleLogin}>
                  Google Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
