import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../shared/Loading';
import logo from './logo2.png';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleSignIn = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password);

        event.target.reset();
    };

    if (user?.user) {
        navigate(from, { replace: true });
    }

    return (
        <section
            className='my-5'
        >
            <div
                className='w-25 mx-auto'
            >
                <div
                    className='mb-5 text-center'
                >
                    <img
                        src={logo}
                        alt="site logo"
                        className='mw-100 w-50 '
                    />
                </div>

                {/* firebase conduction */}
                <div>
                    {
                        (loading)
                        &&
                        <Loading />
                    }
                    {
                        (error)
                        &&
                        <div
                            className="alert alert-danger mb-5"
                            role="alert"
                        >
                            {error?.message}
                        </div>
                    }
                    {
                        user?.user
                        &&
                        <div
                            className="alert alert-success mb-5"
                            role="alert"
                        >
                            Successfully logged in for <b>{user?.user?.displayName}</b>
                        </div>
                    }
                </div>

                <Form onSubmit={handleSignIn}>
                    {/* ask for email */}
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            className='bg-light'
                            name='email'
                        />
                    </Form.Group>

                    {/* ask for password */}
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            className='bg-light'
                            name='password'
                        />
                        <p
                            className='mt-2'
                        >
                            <Link
                                to="/reset"
                                className='text-danger text-decoration-none'
                            >
                                Forgot password?
                            </Link>
                        </p>
                    </Form.Group>

                    {/* button to login a user */}
                    <Button
                        variant="danger"
                        type="submit"
                        className='w-100'
                    >
                        Login
                    </Button>
                </Form>
                <p
                    className='mt-3 text-center'
                >
                    <Link
                        to="/register"
                        className='text-danger text-decoration-none'
                    >
                        Won't have an account?
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default Login;