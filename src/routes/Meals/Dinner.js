import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Cards from './Card';

const Dinner = () => {
    const [dinners, setDinners] = useState([]);
    const [displayItems, setDisplayItems] = useState(true);

    useEffect(() => {
        const url = `/dinner.json`;
        const getBreakfast = async () => {
            const request = await fetch(url);
            const response = await request.json();
            setDinners(response);
        }; getBreakfast();
    }, []);

    return (
        <section>
            <div
                className={`row ${!displayItems && 'd-none'}`}
            >
                {
                    dinners?.map(breakfast => <Cards
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

export default Dinner;