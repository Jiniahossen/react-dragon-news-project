import { Link } from "react-router-dom";
import Navbar from "./Shortpages/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";


const Login = () => {

    const { signInUser } = useContext(AuthContext)

    const handleLoginSubmit = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password);
        signInUser(email, password)
            .then( result=>{
                console.log(result.user)
            })
            .catch(error=>{
                console.error(error)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen">
                <div className="">
                    <div className="card w-full  shadow-2xl">
                        <h2 className=" text-center pt-4 text-lg font-poppins font-semibold">Login your account!</h2>
                        <hr className=" mx-4 mt-2" />
                        <form className="card-body" onSubmit={handleLoginSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#403F3F] text-white hover:text-black">Login</button>
                            </div>

                            <div>
                                <h2>
                                    Dont’t Have An Account ? <Link to='/register' className="text-red-500">Register</Link>
                                </h2>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;