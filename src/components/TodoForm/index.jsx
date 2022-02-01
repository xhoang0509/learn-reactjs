import PropTypes from "prop-types";
import React, { useState } from "react";
import uuid from "react-uuid";

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
};

function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState("");

    const handleValueChange = (e) => {
        setValue(e.target.value);
    };
    const handleTodoFormSubmit = (e) => {
        e.preventDefault();
        if (!onSubmit) return;
        onSubmit({
            id: uuid(),
            title: value,
        });

        setValue("");
    };
    return (
        <form onSubmit={handleTodoFormSubmit}>
            <h1>Enter a new todo</h1>
            <input
                type="text"
                placeholder="Enter todo.."
                value={value}
                onChange={(e) => handleValueChange(e)}
            />
        </form>
    );
}

export default TodoForm;
