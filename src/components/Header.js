import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ titulo }) => (
    <nav className='nav-wrapper light-blue darken-3'>
        {/* eslint-disable-next-line */}
        <a className='brand-logo center'>{titulo}</a>
    </nav>
);

Header.propType = {
    titulo: PropTypes.string.isRequired
};

export default Header;
