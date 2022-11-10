import ScrollToTopOnMount from "../template/ScrollToTopOnMount";
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
      <ScrollToTopOnMount />
      <div className="container-xs h-100 d-flex justify-content-center align-items-center">
        <form className="container p-5 bg-light">
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
