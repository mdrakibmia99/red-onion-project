import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Footer = () => {
    const customStyle = "width: 60px; background-color: #7c4dff; height: 2px";
    const year = new Date().getFullYear();

    const facebook = 'https://www.facebook.com/hasibulislam999.dev/';
    const twitter = 'https://twitter.com/hasibulislam999';
    const stackoverflow = 'https://stackoverflow.com/users/16820211/hasibul-islam';
    const linkedin = 'https://www.linkedin.com/in/hasibulislam999/';
    const pofo = 'https://hasibulislam999.netlify.app/';

    return (
        <div>
            <footer
                className="text-center text-lg-start text-white"
                style={{ backgroundColor: "#1c2331" }}
            >
                {/* <!-- Section: Links  --> */}
                <section className="pt-1">
                    <div className="container text-center text-md-start mt-5">
                        {/* <!-- Grid row --> */}
                        <div className="row mt-3">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <Link
                                    to={'/'}
                                >
                                    <img
                                        src={logo}
                                        alt="footer logo"
                                        className='mw-100 w-50'
                                    />
                                </Link>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold">Job Productivity</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ customStyle }}
                                />
                                <p>
                                    <a target={'_blank'} rel="noreferrer" href="https://drive.google.com/file/d/1Gdbax82oaBWz2_0-OYh44E7QvfB53wNS/view?usp=sharing" className="text-white">My Resume</a>
                                </p>
                                <p>
                                    <a target={'_blank'} rel="noreferrer" href="https://drive.google.com/file/d/1WPyODG14JDxSjZBbxt_mSlimP1O4R38e/view?usp=sharing" className="text-white">Cover Letter</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ customStyle }}
                                />
                                <p>
                                    <a target={'_blank'} rel="noreferrer" href={pofo} className="text-white">Portfolio</a>
                                </p>
                                <p>
                                    <a target={'_blank'} rel="noreferrer" href={facebook} className="text-white">Facebook</a>
                                </p>
                                <p>
                                    <a target={'_blank'} rel="noreferrer" href={twitter} className="text-white">Twitter</a>
                                </p>
                                <p>
                                    <a target={'_blank'} rel="noreferrer" href={stackoverflow} className="text-white">StackOverflow</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ customStyle }}
                                />
                                <p><i className="fa fa-envelope me-2"></i>
                                    <a target={'_blank'} rel="noreferrer"
                                        href="mailto:hasib143sl@gmail.com"
                                        className='text-white text-decoration-none'
                                    >
                                        hasib143sl@gmail.com</a>
                                </p>
                                <p><i className="fa fa-phone me-2"></i>
                                    <a target={'_blank'} rel="noreferrer"
                                        href="tel:+8801906315901"
                                        className='text-white text-decoration-none'
                                    >
                                        +880 1906-315901</a>
                                </p>
                                <p><i className="fa fa-github me-2 fs-5" aria-hidden="true"></i>
                                    <a target={'_blank'} rel="noreferrer"
                                        href="https://github.com/hasibulislam999"
                                        className='text-white text-decoration-none'
                                    >
                                        hasibulislam999</a>
                                </p>
                                <p><i className="fa fa-linkedin-square fs-5 me-2" aria-hidden="true"></i>
                                    <a target={'_blank'} rel="noreferrer"
                                        href={linkedin}
                                        className='text-white text-decoration-none'
                                    >
                                        hasibulislam999</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}

                {/* <!-- Copyright --> */}
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    All rights reserved © {year} Copyright by <span className='text-danger fw-bold'>Red Onion</span>.
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </div>
    );
};

export default Footer;
