import React, { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import meals from './meals.json';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
    const [user] = useAuthState(auth);
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    
    const handlePlaceOrder = (event) => {
        event.preventDefault();
    };

    const cartItems = JSON.parse(localStorage.getItem('cart'));
    let itemKeys, itemValues, matchedMeals, subTotal = 0, newMeals;

    if (cartItems) {
        itemKeys = Object.keys(cartItems); // as id -> array
        itemValues = Object.values(cartItems); // as qty -> array
        matchedMeals = meals.filter(meal => itemKeys.includes(meal?.id));
        newMeals = matchedMeals;
    }

    newMeals.forEach((newMeal, index) => subTotal = subTotal + (newMeal?.price * itemValues[index]));

    return (
        <div>
            <div
                className='grid row'
            >
                <div
                    className='col-5'
                >
                    <Form onSubmit={handlePlaceOrder}>
                        {/* approach email */}
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                className='bg-light'
                                value={user?.email}
                                disabled
                            />
                        </Form.Group>

                        {/* approach name */}
                        <Form.Group className="mb-4" controlId="formBasicText">
                            <Form.Control
                                type="text"
                                className='bg-light'
                                value={user?.displayName}
                                disabled
                            />
                        </Form.Group>

                        {/* approach deliver style */}
                        <Form.Group className="mb-4" controlId="formBasicText">
                            <Form.Control
                                type="text"
                                className='bg-light'
                                value={"Deliver to door"}
                                disabled
                            />
                        </Form.Group>

                        {/* approach route no */}
                        <Form.Group className="mb-4" controlId="formBasicText">
                            <Form.Control
                                type="text"
                                className='bg-light'
                                value={"107 Rd No 8"}
                                disabled
                            />
                        </Form.Group>

                        {/* approach house no */}
                        <Form.Group className="mb-4" controlId="formBasicText">
                            <Form.Control
                                type="text"
                                className='bg-light'
                                placeholder='Flat, Suite or floor'
                                name='house'
                                required
                            />
                        </Form.Group>

                        {/* approach business name */}
                        <Form.Group className="mb-4" controlId="formBasicText">
                            <Form.Control
                                type="text"
                                className='bg-light'
                                placeholder='Business Name'
                                name='business'
                                required
                            />
                        </Form.Group>

                        {/* approach delivery instructor */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control
                                as="textarea"
                                rows={3}
                                className='bg-light'
                                placeholder='Add delivery instructor'
                                required
                            />
                        </Form.Group>

                        {/* button to register a user */}
                        <Button
                            variant="outline-danger"
                            type="submit"
                            className='w-100'
                            disabled={visible}
                            onClick={() => setVisible(true)}
                        >
                            Save & Continue
                        </Button>
                    </Form>
                </div>
                <div
                    className='col-5'
                >
                    <p>From <b>Gulshan Plaza Restaurant</b></p>
                    <p className='mb-1'>Arriving within 20 to 30 minutes</p>
                    <p>107 Rd No 8</p>
                    <div>
                        {
                            matchedMeals?.map((matchedMeal, index) => <OrderCard
                                key={matchedMeal?.id}
                                matchedMeal={matchedMeal}
                                index={index}
                                itemValue={itemValues[index]}
                            />)
                        }
                    </div>
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Subtotal • <span className='text-danger'>{matchedMeals?.length}</span></th>
                                    <th>Tax</th>
                                    <th>Delivery Fee</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span className='text-danger me-1'>$</span>{subTotal}</td>
                                    <td><span className='text-danger me-1'>$</span>5</td>
                                    <td><span className='text-danger me-1'>$</span>2</td>
                                    <td><span className='text-danger me-1'>$</span>{subTotal + 7}</td>
                                </tr>
                            </tbody>
                        </Table>

                        <button
                            className='btn btn-outline-danger'
                            onClick={() => navigate('/home/orderComplete')}
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

function OrderCard({ matchedMeal, itemValue }) {
    return (
        <div
            className='d-flex justify-content-between align-items-center bg-light p-3 rounded mb-3'
        >
            <div
                className='d-flex align-items-center'
            >
                <div>
                    <img
                        src={matchedMeal?.thumbnail}
                        alt="product_image"
                        className='mw-100 border border-2 border-danger rounded-circle'
                        style={{ width: "4rem" }}
                    />
                </div>
                <div
                    className='ms-3'
                >
                    <p className='mb-0'>{matchedMeal?.title}</p>
                    <p className='mb-0'><span className='text-danger'>$</span><span className='fw-bold ms-1'>{matchedMeal?.price * parseInt(itemValue)}</span></p>
                </div>
            </div>
            <div>
                <button type="button" className="btn btn-outline-dark position-relative">
                    QTY
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {itemValue}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
            </div>
        </div>
    );
}

export default PlaceOrder;