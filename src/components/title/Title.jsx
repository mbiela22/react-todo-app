import PropTypes from "prop-types";

import './title.css';

export default function Title({title}) {
    return (
        <h1 className="title">{title}</h1>
    )
}

Title.propTypes = {
    title: PropTypes.string,
}

Title.defaultProps = {
    title: 'Default Title',
}
