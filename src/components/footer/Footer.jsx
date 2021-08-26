import React from 'react';
import PropTypes from 'prop-types';

import useFilter from "../../hooks/useFilter";

import './footer.css';

const FILTERS_BTN = [
    {
        text: 'All',
        id: 'all',
    },
    {
        text: 'Active',
        id: 'active',
    },
    {
        text: 'Completed',
        id: 'completed'
    }
];

export default function Footer({activeTaskAmount}) {
    const {activeFilter, setActiveFilter} = useFilter();

    return (
        <div className="footer">
            <span className="amount">{`${activeTaskAmount} Tasks left`}</span>
            <div className="btn-group">
                {FILTERS_BTN.map(({text, id}) => (
                    <button
                        onClick={() => setActiveFilter(id)}
                        key={id}
                        className={id === activeFilter ? "filter-btn active" : 'filter-btn'}
                    >{text}</button>
                ))}
            </div>
        </div>
    )
}

Footer.propTypes = {
    activeTaskAmount: PropTypes.number,
}

Footer.defaultProps = {
    activeTaskAmount: 0,
}
