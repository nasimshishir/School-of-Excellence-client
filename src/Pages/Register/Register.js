import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-4xl font-bold text-center px-24">Register</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="your full name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="repeat password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className="form-control mt-6">
                                <h4 className='font-semibold text-center mb-2'>Sign up with</h4>
                                <button className="btn btn-outline mb-2"> <FaGoogle className='mr-3'></FaGoogle> Google</button>
                                <button className="btn btn-outline mb-2"> <FaGithub className='mr-3'></FaGithub> GitHub</button>
                            </div>
                            <div className='mt-2'>
                                <p className='text-center'><small>Already have an account? <Link className='text-cyan-700 font-medium' to="/register">Login here</Link></small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;