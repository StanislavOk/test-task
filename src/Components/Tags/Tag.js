import React from 'react';
import PropTypes from 'prop-types'; 

const Tag = (props) => <button className="btn btn-secondary">{props.children}</button>

Tag.propTypes = {
    children: PropTypes.string
}

export default Tag;