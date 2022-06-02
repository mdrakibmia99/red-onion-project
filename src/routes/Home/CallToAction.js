import React, { useEffect, useState } from 'react';
import './css/CallToAction.css'

const CallToAction = () => {
    const [CTA, setCTA] = useState([]);
    useEffect(() => {
        const url = `/cta.json`;
        const getCTA = async () => {
            const request = await fetch(url);
            const response = await request.json();
            setCTA(response);
        }; getCTA();
    }, []);
    
    return (
        <section
            className='container my-5'
        >
            <article
                className='w-50'
            >
                <h2
                    className='mb-2'
                >
                    Why Choose us?
                </h2>
                <p
                    className='text-muted'
                >
                    Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded.
                </p>
            </article>
            <div
                className='grid row g-5 mt-3'
            >
                {
                    CTA.map(cta => <Card
                        key={cta.id}
                        callToAction={cta}
                    />)
                }
            </div>
        </section>
    );
};

function Card({ callToAction }) {
    const [readMore, setReadMore] = useState(false);

    return (
        <div
            className='col-4'
        >
            <div>
                <img
                    src={callToAction?.thumbnail}
                    alt="cta thumb"
                    className='mw-100'
                />
            </div>
            <div
                className='d-flex mt-3'
            >
                <div>
                    <img
                        src={callToAction?.thumbnail}
                        alt="thumb"
                        id='cta-thumb'
                        className='me-3 border border-3 border-danger'
                    />
                </div>
                <div>
                    <div>
                        <h3>
                            {callToAction?.title}
                        </h3>
                    </div>
                    <div>
                        <p
                            className='text-muted'
                        >
                            {!readMore ? callToAction?.description.slice(0, 100) + "..." : callToAction?.description}
                            <span
                                className='text-danger'
                                role={"button"}
                                onClick={()=>setReadMore(!readMore)}
                            >
                                {!readMore && "Read more"}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CallToAction;
