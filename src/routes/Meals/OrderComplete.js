import React, { useState } from 'react';
import deliveryBoy from './deliveryBoy.png';
import helmet from './helmet.png';

const OrderComplete = () => {
    const [deliverComplete, setDeliverComplete] = useState(false);

    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getMinutes();

    return (
        <div>
            <div
                className='row'
            >
                <div
                    className='col-6'
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977795363!2d90.34928585186965!3d23.78077774443207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1654168050988!5m2!1sen!2sbd"
                        title='google map'
                        width={"600px"}
                        height={"450px"}
                        style={{ border: "0px" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        className='rounded'
                    />
                </div>
                <div
                    className='col-4 bg-light p-3 rounded-3'
                >
                    <div>
                        <div
                            className='mb-3'
                        >
                            {
                                deliverComplete
                                    ?
                                    <div class="alert alert-success" role="alert">
                                        Open your door and receive your desired food, <span className='fw-bold'>TYSM</span>!
                                    </div>
                                    :
                                    <img
                                        src={deliveryBoy}
                                        alt="delivery boy"
                                        className='mw-100 w-25'
                                    />
                            }
                        </div>
                        <hr />
                        <div
                            className='bg-light rounded mb-3'
                        >
                            <ul className='list-unstyled ps-0 mb-0'>
                                <li className='border-2 border-start border-dark rounded-top ps-3'>
                                    <h4>Your Location</h4>
                                    <p className='text-muted'>107 Rd No 8</p>
                                </li>
                                <li className='border-2 border-start border-danger rounded-bottom ps-3'>
                                    <h4>Shop Address</h4>
                                    <p className='text-muted mb-0'>Gulshan Plaza Restaura GPR</p>
                                </li>
                            </ul>
                        </div>
                        <hr />
                        <div className='border-2 border-end border-success rounded'>
                            <h3>{time}</h3>
                            <p className='text-muted'>Estimated delivery time</p>
                        </div>
                        <hr />
                        <div
                            className='d-flex align-items-center mb-3'
                        >
                            <div>
                                <img
                                    src={helmet}
                                    alt="helmet"
                                    className='mw-100 me-3'
                                    style={{ width: "4rem" }}
                                />
                            </div>
                            <div>
                                <h4 className='mb-0'>Hamim</h4>
                                <p className='text-muted mb-0'>Your Rider</p>
                            </div>
                        </div>
                        <button className={`btn btn-outline-danger w-100 ${deliverComplete && 'd-none'}`}
                            onClick={()=>setDeliverComplete(true)}
                        >Contact & Complete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderComplete;