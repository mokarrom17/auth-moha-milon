import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const navigate = useNavigate();
    const { signInUser, signInWithGoogle } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // Create User
        signInUser(email, password)
            .then(result => {
                console.log(result)
                e.target.reset()
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p> New to this site? Please <Link to="/register">
                            <button className="btn btn-link">Register</button>
                        </Link> </p>
                        <p><button onClick={handleSignInWithGoogle} className="btn btn-ghost">Google</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
