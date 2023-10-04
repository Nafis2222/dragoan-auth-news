import  { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Shared/Navbar';
import { AuthContext } from './AuthProvider';



const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault()
        //  const email = e.target.name.value
        //   const password = e.target.password.value
        // console.log( email)
    
        const form = new FormData(e.currentTarget)
        const email = form.get('Email')
        const password = form.get('password')
        const name = form.get('name')
        const photo = form.get('photoUrl')
        console.log(email,password,name,photo)
    
    
        createUser(email,password)
        .then(res =>{
            const user = res.user
            console.log(user)
        })
        .catch()
    }

    

   
    return (
        <div>
            <Navbar></Navbar>
             <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
   
   <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onClick={handleRegister}  className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name'  placeholder="Name" className="input input-bordered" required />
        </div><div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="photo" name='photoUrl'  placeholder="Photo Url" className="input input-bordered" required />
        </div>
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
          <button  className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className=" mb-3 text-center">Already have an account ?<Link to="/login" className="link link-accent">Login</Link></p>

    </div>
   
  </div>
</div>
        </div>
    );
};

export default Register;