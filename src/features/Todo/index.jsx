import React, { useState } from "react";
import PropTypes from "prop-types";

import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: "Eat",
            status: "new",
        },
        {
            id: 2,
            title: "Code",
            status: "new",
        },
        {
            id: 3,
            title: "Sleep",
            status: "completed",
        },
        {
            id: 4,
            title: "Do homework",
            status: "new",
        },
    ];
    const [todoList, setTodoList] = useState(initTodoList);
    const handleTodoClick = (todo, index) => {
        console.log(todo, index);
        // copy todolist to new one
        const newTodoList = [...todoList];
        // update status
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === "new" ? "completed" : "new",
        };
        // set state todolist
        setTodoList(newTodoList);
    };
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
        </div>
    );
}

export default TodoFeature;
