import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    console.log('This is my login page',location)
    const navigate = useNavigate()
    const handleLogin = e =>{
        e.preventDefault()
        //  const email = e.target.password.value
        // //  const password = e.target.password.value
        // console.log( email,password)
        const form = new FormData(e.currentTarget)
        const email = form.get('Email')
        const password = form.get('password')
        console.log(email,password)
        signIn(email,password)
        .then(res =>{
            const user = res.user
            console.log(user)
            navigate(location ?.state ? location.state : "/")
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
   
   <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onClick={handleLogin}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='Email' required placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" required placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className=" mb-3 text-center">Don't have account ?<Link to="/register" className="link link-accent">Register</Link></p>

    </div>
   
  </div>
</div>
        </div>
    );
};

export default Login;