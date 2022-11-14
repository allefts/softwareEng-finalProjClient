import loginBG from "../bg.jpg";

const Login = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${loginBG})`,
        backgroundSize: "cover",
      }}
      className="bg-image"
    >
      <div className="container-xs h-100 d-flex justify-content-center align-items-center flex-column p-5">
        <div
          className="container text-light p-5"
          style={{ maxWidth: "1000px" }}
        >
          <h1>Login</h1>
        </div>
        <form
          className="container p-5 shadow-sm"
          style={{ maxWidth: "1000px", backgroundColor: "#CFCDD4" }}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
