import React from 'react'
import PropTypes from 'prop-types';

function Navbar(props) {
    return(
        <div>
            <h6>{props.title}</h6>
        </div>
    )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : "default appss"
}

export default Navbar;