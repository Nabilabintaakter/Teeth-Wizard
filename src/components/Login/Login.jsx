import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { BiSolidError } from "react-icons/bi";
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const { handleLogin, setUser, handleGoogleSignIn } = useContext(AuthContext);
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        handleLogin(email, password)
            .then(res => {
                setUser(res.user)
                toast.success("Successfully logged in!", {
                    position: "top-center"
                });
                setTimeout(() => {
                    navigate('/')
                }, 1000)
                console.log(res.user)
            })
            .catch(err => {
                setError(`${err.message.slice(9)}`)
                setUser(null)
            })

    }
    return (
        <div className='flex flex-col justify-center items-center mt-12 md:mt-24'>
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Login now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body p-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Email :</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Password :</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                    </div>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    {error && <p className='text-red-500 font-medium text-lg flex items-center gap-1'><BiSolidError />{error}</p>}
                    <div className="form-control mt-2">
                        <button type="submit" className="btn btn-primary hover:bg-white hover:text-black text-white hover:border-blue-500  text-lg">Login</button>
                    </div>

                </form>
                <div className="px-6 -mt-4">
                    <div className="form-control mb-2">
                        <button onClick={handleGoogleSignIn} type="submit" className="flex items-center gap-3 hover:bg-white hover:text-black text-white btn bg-red-500 hover:border-red-500  text-lg"><FcGoogle className="text-xl" />Login with Google</button>
                    </div>
                    <div className="form-control">
                        <button type="submit" className="flex items-center gap-3 hover:bg-white hover:text-black text-white btn hover:border-black bg-black text-lg"><SiGithub className="text-xl" /> Login with Github</button>
                    </div>
                </div>
                <p className='mx-auto my-5 font-medium'>New to this website? Please <NavLink className='text-xl text-blue-600 font-semibold' to='/register'>Register</NavLink></p>
            </div>
        </div>
    );
};

export default Login;