import React from 'react';

const Header = ({ title }) => {
    return (
        <div className=" text-white py-2 text-center">
            <h2>{title}</h2>
        </div>
    );
};

export default Header;
