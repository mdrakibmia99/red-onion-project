import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo2.png';
import auth from '../firebase.init';
import Cart from './Cart';

const Header = () => {
    const navigate = useNavigate();
    const [openCart, setOpenCart] = useState(false);
    const [user, loading] = useAuthState(auth);

    return (
        <section
            className='bg-white py-3 shadow'
        >
            <div
                className='d-flex 
                align-items-center 
                justify-content-between
                container'
            >
                <div>
                    <Link
                        to={'/home'}
                    >
                        <img
                            src={logo}
                            alt="red onion logo"
                            className='mw-100 w-25'
                        />
                    </Link>
                </div>
                <div
                    className='d-flex align-items-center'
                >
                    <div
                        className='position-relative'
                    >
                        <i
                            className="fa fa-shopping-cart me-2 fs-5 p-2 border border-danger rounded-circle"
                            aria-hidden="true"
                            role={'button'}
                            onClick={() => setOpenCart(!openCart)}
                        />
                        {
                            openCart
                            &&
                            <div
                                className='position-absolute top-100 start-0'
                                style={{ width: "200px" }}
                            >
                                <Cart />
                            </div>
                        }
                    </div>
                    {
                        user
                            ?
                            <div>
                                <button
                                    type="button"
                                    className="btn btn-danger position-relative rounded-pill"
                                    onClick={() => signOut(auth)}
                                >
                                    <span className='fw-bold'>Logout</span>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                                        {
                                            loading
                                                ?
                                                '...'
                                                :
                                                user?.displayName?.split(' ')[0]
                                        }
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                            </div>
                            :
                            <div>
                                <Button
                                    variant="light"
                                    className='rounded-pill mx-2 px-4'
                                    onClick={() => navigate('/login')}
                                >
                                    Sign in
                                </Button>
                                <Button
                                    variant="danger"
                                    className='rounded-pill ms-2 px-4'
                                    onClick={() => navigate('/register')}
                                >
                                    Sign up
                                </Button>
                            </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Header;
