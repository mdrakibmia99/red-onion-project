import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import logo from './logo2.png';
import Loading from '../../shared/Loading';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        errorEP,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true});
    const [
        updateProfile,
        updating,
        errorUP
    ] = useUpdateProfile(auth);
    const [displayPasswordError, setDisplayPasswordError] = useState(false);

    const handleSignUp = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password1 = event.target.password1.value;
        const password2 = event.target.password2.value;

        if (password1 === password2) {
            setDisplayPasswordError(false);
            await createUserWithEmailAndPassword(email, password2);
            await updateProfile({ displayName: name });

            event.target.reset();
        } else {
            setDisplayPasswordError(true);
        }
    };

    if (user) {
        console.log(user);
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
                        (loading || updating)
                        &&
                        <Loading />
                    }
                    {
                        displayPasswordError
                        &&
                        <div
                            className="alert alert-danger mb-5"
                            role="alert"
                        >
                            <b>Given password</b> and <b>Confirm password</b> won't match. Please, check again!
                        </div>
                    }
                    {
                        (errorEP || errorUP)
                        &&
                        <div
                            className="alert alert-danger mb-5"
                            role="alert"
                        >
                            {errorEP?.message || errorUP?.message}
                        </div>
                    }
                    {
                        user?.user
                        &&
                        <div
                            className="alert alert-success mb-5"
                            role="alert"
                        >
                            Successfully created account for <b>{user?.user?.displayName}</b>
                        </div>
                    }
                </div>

                <Form onSubmit={handleSignUp}>
                    {/* ask for name */}
                    <Form.Group className="mb-4" controlId="formBasicText">
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            className='bg-light'
                            name='name'
                            required
                        />
                    </Form.Group>

                    {/* ask for email */}
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            className='bg-light'
                            name='email'
                            required
                        />
                    </Form.Group>

                    {/* ask for password */}
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            className='bg-light'
                            name='password1'
                            required
                        />
                    </Form.Group>
                    {/* ask for confirm password */}
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            placeholder="Confirm password"
                            className='bg-light'
                            name='password2'
                            required
                        />
                    </Form.Group>

                    {/* button to register a user */}
                    <Button
                        variant="danger"
                        type="submit"
                        className='w-100'
                    >
                        Register
                    </Button>
                </Form>
                <p
                    className='mt-3 text-center'
                >
                    <Link
                        to="/login"
                        className='text-danger text-decoration-none'
                    >
                        Already have an account?
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default Register;