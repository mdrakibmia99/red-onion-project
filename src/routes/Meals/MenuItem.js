import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cartUnit } from '../../utilities/cartUnit';

const MenuItem = () => {
    const [meals, setMeals] = useState([]);
    const [QTY, setQTY] = useState(1);
    const [gray, setGray] = useState(false);
    const { id } = useParams();

    let url;
    if (id[0] === 'b') {
        url = '/breakfast.json';
    } else if (id[0] === 'l') {
        url = '/lunch.json';
    } else if (id[0] === 'd') {
        url = '/dinner.json';
    }

    useEffect(() => {
        const getMeal = async () => {
            const request = await fetch(url);
            const response = await request.json();
            setMeals(response);
        }; getMeal();
    }, [url]);

    const meal = meals.filter(meal => meal.id === id);

    const handleAddToCart = (id, qty) => {
        cartUnit(id, qty);
        setGray(true);
        window.location.reload();
    };

    return (
        <div
            className={`${!id && 'd-none'} mt-5`}
        >
            <div
                className='d-flex'
            >
                <div
                    className='w-50 pe-5'
                >
                    <div>
                        <h2
                            className='fs-1 mb-4'
                        >{meal[0]?.title}</h2>
                        <p
                            className='text-muted mb-3'
                        >{meal[0]?.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. A excepturi laboriosam non, nisi repellendus, aut obcaecati optio, fuga nostrum voluptatibus vitae quo aperiam. Possimus sit adipisci eos odit officia error.</p>
                        <div
                            className='d-flex mt-4 align-items-center'
                        >
                            <p
                                className='mb-0'
                            >
                                <span className='text-danger fs-3'>$</span>
                                <span className='ms-1 fs-1'>{meal[0]?.price * QTY}</span>
                            </p>
                            <div
                                className='d-flex ms-3 border-1 border border-danger rounded-pill px-3 py-2'
                                style={{ height: "fit-content" }}
                            >
                                <button
                                    className='border-0 bg-transparent'
                                    onClick={() => {
                                        if (QTY >= 1) {
                                            setQTY(QTY + 1);
                                        }
                                    }}
                                >
                                    <i className="fa fa-plus-circle fs-4" aria-hidden="true"></i>
                                </button>
                                <input
                                    type="number"
                                    name="qty"
                                    id="qty"
                                    value={QTY}
                                    className="text-center border-0"
                                    readOnly
                                />
                                <button
                                    className='border-0 bg-transparent'
                                    onClick={() => {
                                        if (QTY !== 1) {
                                            setQTY(QTY - 1)
                                        }
                                    }}
                                >
                                    <i className="fa fa-minus-circle fs-4" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                        <button
                            className='btn btn-danger rounded-pill mt-4'
                            onClick={() => handleAddToCart(id, QTY)}
                            disabled={gray}
                        >
                            <i className="fa fa-cart-plus me-2" aria-hidden="true"></i>
                            <span className=''>Add to cart</span>
                        </button>
                    </div>
                    <div></div>
                </div>
                <div
                    className='w-50 ps-5'
                >
                    <img
                        src={meal[0]?.thumbnail}
                        alt="meal-item"
                        className='mw-100'
                    />
                </div>
            </div>
        </div>
    );
};

export default MenuItem;