import React from 'react';

import './loader.css';

const Loader = () => (
    <div style={{display: 'flex', justifyContent: 'center', margin: '.5rem'}}>
        <div className="lds-dual-ring" />
    </div>
)

export default Loader;
