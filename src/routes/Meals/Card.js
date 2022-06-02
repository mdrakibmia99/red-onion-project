import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const Cards = ({ meal, setDisplayItems }) => {
    const { id, title, description, thumbnail, price } = meal;
    const navigate = useNavigate();

    const handleMealDetail = (id) => {
        setDisplayItems(false);
        
        if (id[0] === 'b') {
            navigate(`/home/breakfast/menuItem/${id}`);
        } else if (id[0] === 'l') {
            navigate(`/home/lunch/menuItem/${id}`);
        } else if (id[0] === 'd') {
            navigate(`/home/dinner/menuItem/${id}`);
        }
    };
    
    return (
        <div
            className='col-4 pt-2'
            id='card-select'
            onClick={()=>handleMealDetail(id)}
        >
            <Card
                style={{ width: '18rem' }}
                className="border-0 text-center mx-auto"
            >
                <Card.Img
                    variant="top"
                    src={thumbnail}
                />
                <Card.Body>
                    <Card.Title className='border-bottom border-danger pb-1'>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <p className='fs-4'><span className='fs-6 text-danger'>$</span><span className='fw-bold'>{price}</span></p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cards;