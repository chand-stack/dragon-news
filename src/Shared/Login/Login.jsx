import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    const { signIn } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        // console.log(email,password);
        signIn(email,password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="bg-base-200 py-5">
            <Navbar></Navbar>
            <div className="hero bg-base-200 md:px-20 py-10">
  <div className="hero-content flex-col md:w-3/4 bg-white py-10">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login your account</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
           placeholder="email"
           name="email"
            className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" 
          placeholder="password" 
          name="password"
          className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary bg-black text-white">Login</button>
        </div>
        <p className="font-semibold text-center my-5">Do Not Have An Account ? <Link to="/register" className="text-red-500">Register</Link></p>
      </form>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;