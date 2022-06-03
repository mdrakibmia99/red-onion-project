import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Footer = () => {
    const customStyle = "width: 60px; background-color: #7c4dff; height: 2px";
    const year = new Date().getFullYear();

    const facebook = 'https://www.facebook.com/rakibmia.dev';
    const twitter = 'https://twitter.com/MdRakib63447617';
    const stackoverflow = 'https://stackoverflow.com/users/18387450/md-rakib-mia';
    const linkedin = 'https://www.linkedin.com/in/md-rakib-mia/';
    const pofo = '#';

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
                                    <a target={'_blank'} rel="noreferrer" href="https://drive.google.com/file/d/11efNCXU8MFW-HFXUV2GGSz6YVY-Yopbi/view?usp=sharing" className="text-white">My Resume</a>
                                </p>
                                <p>
                                    <a target={'_blank'} rel="noreferrer" href="https://drive.google.com/file/d/1lpAo-K5WYMTKQJJgjhxgUVtLU9srfg5x/view?usp=sharing" className="text-white">Cover Letter</a>
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
                            <div className="col-md-4 col-lg-3 col-xl-3 mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ customStyle }}
                                />
                                <p><i className="fa fa-envelope me-2"></i>
                                    <a target={'_blank'} rel="noreferrer"
                                        href="mailto:rakibmia.dev@gmail.com"
                                        className='text-white text-decoration-none'
                                    >
                                        rakibmia.dev@gmail.com</a>
                                </p>
                                <p><i className="fa fa-phone me-2"></i>
                                    <a target={'_blank'} rel="noreferrer"
                                        href="tel:+8801913547448"
                                        className='text-white text-decoration-none'
                                    >
                                        +880 1913-547448</a>
                                </p>
                                <p><i className="fa fa-github me-2 fs-5" aria-hidden="true"></i>
                                    <a target={'_blank'} rel="noreferrer"
                                        href="https://github.com/rkrakibhasan680"
                                        className='text-white text-decoration-none'
                                    >
                                        Md Rakib Mia</a>
                                </p>
                                <p><i className="fa fa-linkedin-square fs-5 me-2" aria-hidden="true"></i>
                                    <a target={'_blank'} rel="noreferrer"
                                        href={linkedin}
                                        className='text-white text-decoration-none'
                                    >
                                        md-rakib-mia</a>
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
