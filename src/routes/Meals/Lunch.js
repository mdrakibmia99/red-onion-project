import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Cards from './Card';

const Lunch = () => {
    const [lunches, setLunches] = useState([]);
    const [displayItems, setDisplayItems] = useState(true);

    useEffect(() => {
        const url = `/lunch.json`;
        const getBreakfast = async () => {
            const request = await fetch(url);
            const response = await request.json();
            setLunches(response);
        }; getBreakfast();
    }, []);

    return (
        <section>
            <div
                className={`row ${!displayItems && 'd-none'}`}
            >
                {
                    lunches?.map(breakfast => <Cards
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

export default Lunch;