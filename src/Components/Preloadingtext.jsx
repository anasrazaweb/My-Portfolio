import React from 'react';

const Preloadingtext = () => {
    return (
        <div className='w-full h-full bg-red-400'>
            <svg viewBox="0 0 1320 300">
                <text x="50%" y="40%" dy=".35em" textAnchor="middle" >
                    anas raza
                </text>
           
                <text className=' mt-5' x="50%" y="80%" dy=".35em" textAnchor="middle" >
                webDeveloper
                </text>
            </svg>
        </div>
    );
}

export default Preloadingtext;
