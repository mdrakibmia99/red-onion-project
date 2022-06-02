import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Cards from './Card';

const Breakfast = () => {
    const [breakfasts, setBreakfasts] = useState([]);
    const [displayItems, setDisplayItems] = useState(true);

    useEffect(() => {
        const url = `/breakfast.json`;
        const getBreakfast = async () => {
            const request = await fetch(url);
            const response = await request.json();
            setBreakfasts(response);
        }; getBreakfast();
    }, []);

    return (
        <section>
            <div
                className={`row ${!displayItems && 'd-none'}`}
            >
                {
                    breakfasts?.map(breakfast => <Cards
                        key={breakfast.id}
                        meal={breakfast}
                        setDisplayItems={setDisplayItems}
                    />)
                }
            </div>
            <Outlet />
        </section>
    );
};

export default Breakfast;