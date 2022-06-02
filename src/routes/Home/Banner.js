import React, { useEffect, useState } from 'react';
import './css/Banner.css';

const Banner = () => {
    const [mealName, setMealName] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        if (mealName !== '') {
            const url = `/meals.json`;
            const getMealName = async () => {
                const request = await fetch(url);
                const response = await request.json();
                setMeals(response);
            }; getMealName();
        }
    }, [mealName]);

    const matchedMeals = meals?.filter(meal => meal?.title?.toLowerCase().includes(mealName?.toLowerCase()));

    return (
        <section
            id='banner'
        >
            <div>
                <div
                    className='mb-4'
                >
                    <h1>Best food waiting for your belly</h1>
                </div>
                <div
                    className='d-flex justify-content-center position-relative'
                >
                    <p
                        className='bg-white rounded-pill d-flex justify-content-between w-75'
                        id='search-bar'
                    >
                        <input
                            type="text"
                            name="search"
                            id="search"
                            className='rounded-pill border-0 py-2 ps-4 w-100'
                            placeholder='search any food name'
                            onChange={(e) => setMealName(e.target.value)}
                        />
                        <button
                            className='btn btn-danger rounded-pill px-4'
                        >
                            Search
                        </button>
                    </p>
                    <div
                        className={`position-absolute top-100 left-0 w-75 overflow-auto ${mealName === '' && 'd-none'}`}
                        style={{ height: '17rem' }}
                    >
                        {
                            matchedMeals.map(matchedMeal => <div
                                key={matchedMeal.id}
                                className="d-flex align-items-center bg-danger py-2 rounded mb-2 ps-3"
                            >
                                <div>
                                    <img
                                        src={matchedMeal?.thumbnail}
                                        alt="meal-thumb"
                                        className=''
                                        style={{ width: '3rem' }}
                                    />
                                </div>
                                <div
                                    className='ms-2 text-white'
                                >
                                    {matchedMeal?.title}
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;