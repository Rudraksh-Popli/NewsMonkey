import React from 'react';
import loading from './loading.gif'

const Spinner = () => {
    return (
        <div className='text-center'>
            <img width="10%" src={loading} alt="Loading..." />
        </div>
    )
}

export default Spinner;
