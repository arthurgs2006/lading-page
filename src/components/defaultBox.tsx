import { useState } from 'react';

type cardInfo = {
    src: string,
    alt: string,
    title: string,
    description: string
}

export default function ({src, alt, title, description}: cardInfo) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            className='bg-light rounded text-dark position-relative'
            style={{ width: '20rem', height: '20rem' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className={`initial-content w-100 h-100 d-flex flex-column pt-5
                justify-content-top align-items-center text-center bg-gradient
                ${hovered ? 'animate-out' : 'animate-in'}`}>
                <img src={src} className='img-fluid w-75' 
                alt={alt} />
                <div className='position-absolute bottom-0 pb-4 w-100'>
                    <h4>{title}</h4>
                </div>
            </div>
            <div className={`new-content w-100 h-100 d-flex justify-content-center text-center
                align-items-center ${hovered ? 'animate-in' : 'animate-out'}`}>
                <p>{description}</p>
            </div>
        </div>
    )
}
