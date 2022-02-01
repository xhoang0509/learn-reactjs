import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
};

function TodoList(props) {
    const { todos, onTodoClick } = props;
    const handleClick = (index) => {
        if (onTodoClick) {
            onTodoClick(index);
        }
    };
    return (
        <>
            <h1>Todo List - remove jobs</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo.id} onClick={() => handleClick(index)}>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;
