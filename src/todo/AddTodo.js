import React, {useState} from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue);

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

export default function AddTodo({onCreate}) {
    const input = useInputValue('');

    function handleSubmit(e) {
        e.preventDefault();

        if (input.value().trim()) {
            onCreate(input.value());
            input.clear();
        }
    }

    return (
        <form style={{marginBottom: '1rem', paddingInlineStart: '40px'}} onSubmit={handleSubmit}>
            <input {...input.bind} />
            <button type="submit">Add</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func,
};

AddTodo.defaultProps = {
    onCreate: () => {
    }
}

