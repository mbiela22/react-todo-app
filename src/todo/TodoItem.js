import React from "react";
import PropTypes from 'prop-types';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}


export default function TodoItem({todo, index, onChange}) {
    const {title, completed, id} = todo;
    const classes = [];
    if (completed) {
        classes.push('done');
    }
    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input style={styles.input} type="checkbox" checked={completed} onChange={() => onChange(id)}/>
            <strong>{index + 1}</strong>
                &nbsp;
                {title}
                </span>
            <button className="rm" type="submit">&times;</button>
        </li>

    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func
};

