const Body = () => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow-lg" style={{width: "400px"}}>
          <div className="text-center mb-4">
            <h2 className="fw-bold">Login</h2>
            <p>Please enter your credentials</p>
          </div>
          <form>
            {/* <!-- Email Field --> */}
            <div className="mb-3">
              <label for="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* <!-- Password Field --> */}
            <div className="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* <!-- Remember Me Checkbox --> */}
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" for="rememberMe">
                Remember Me
              </label>
            </div>

            {/* <!-- Login Button --> */}
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>

          {/* <!-- Additional Links --> */}
          <div className="text-center mt-3">
            <p className="small">
              <a href="/">Forgot Password?</a> |<a href="/">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
