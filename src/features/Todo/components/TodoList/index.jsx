import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
    const handleTodoClick = (todo, index) => {
        onTodoClick(todo, index);
    };
    return (
        <ul className="todo-list">
            {todoList.map((todo, index) => (
                <li
                    className={classNames({
                        'todo-item': true,
                        completed: todo.status === 'completed',
                    })}
                    key={todo.id}
                    onClick={() => handleTodoClick(todo, index)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
