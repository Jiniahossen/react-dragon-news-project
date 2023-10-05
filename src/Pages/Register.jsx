
import { Link } from "react-router-dom";
import Navbar from "./Shortpages/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";


const Register = () => {
    const {createUser}= useContext( AuthContext)

 const handleRegisterSubmit=e=>{
    
    e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name= form.get('name');
        const email = form.get('email');
        const password = form.get('password')
        console.log(email,password,name);

        createUser(email,password)
        .then(result=>{
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
                        <h2 className=" text-center pt-4 text-lg font-poppins font-semibold">Register your account</h2>
                        <hr className=" mx-4 mt-2" />
                        <form className="card-body" onSubmit={handleRegisterSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your name</span>
                                </label>
                                <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email"  placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <div className=" flex gap-2 ps-2 mt-4">
                                    <input type="checkbox" name="" id="" />
                                    <h2 className=" text-sm text-gray-400 font-poppins font-normal">Accept <span className=" text-sm text-gray-400 font-poppins font-semibold">
                                    Term & Conditions</span></h2>

                                </div>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-[#403F3F] text-white hover:text-black">Register</button>
                            </div>
                            <div>
                                <h2>
                                    Already have an account? <Link to='/login' className="text-red-500">Login</Link>
                                </h2>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;