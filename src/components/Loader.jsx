import React from 'react';
import { Spinner } from "react-bootstrap";

const Loader = () => {
    return (
        <Spinner
            animation='border'
            role='status'
            style={{
                width: '30px',
                height: '30px',
                margin: 'auto',
                display: 'block',
                color: 'white', 
            }} />
    );
};

export default Loader;