import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const { handleSignUp, setUser, handleUpdateProfile } = useContext(AuthContext);
    const [error, setError] = useState(null)
    const handleSubmit = e => {
        setError('');
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conPassword = e.target.conPassword.value;
        if (password !== conPassword) {
            setError("Password didn't match!");
            setUser(null);
            return;
        }
        if (password.length < 6) {
            setError("Password must contain at least 6 characters or longer");
            setUser(null);
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter!");
            setUser(null);
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter!");
            setUser(null);
            return;
        }

        handleSignUp(email, password)
            .then(res => {
                setUser(res.user)
                handleUpdateProfile(name, photo)
                    .then((res) => {

                    }).catch((error) => {
                        toast.error(`${err.message}`, {
                            position: "top-center"
                        });
                        setUser(null)
                    });
                toast.success("Successfully Registered!", {
                    position: "top-center"
                });
                console.log(res.user)

            })
            .catch(err => {
                toast.error(`${err.message}`, {
                    position: "top-center"
                });
                setUser(null)
            })


    }
    return (
        <div className='flex flex-col justify-center items-center mt-12 md:mt-24'>
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Register now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body p-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Name :</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Photo URL :</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter your photo url" className="input input-bordered" required />
                    </div>
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
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Confirm Password :</span>
                        </label>
                        <input type="password" name="conPassword" placeholder="Confirm password" className="input input-bordered" required />
                    </div>
                    {error && <p className='text-red-500 font-medium text-lg'>{error}</p>}
                    <div className="form-control mt-2">
                        <button type="submit" className="btn btn-primary text-lg">Register</button>
                    </div>
                </form>
                <p className='mx-auto mb-5 font-medium'>Already have an account? Please <NavLink className='text-xl text-blue-600 font-semibold' to='/login'>Login</NavLink></p>
            </div>
        </div>
    );
};
export default Register;