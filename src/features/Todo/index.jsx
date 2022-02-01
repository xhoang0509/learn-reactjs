import React, { useState } from "react";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};
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


function TodoFeature(props) {
    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredSatte, setFilteredSatte] = useState("all");

    const handleTodoClick = (todo, index) => {
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

    const handleShowAllClick = () => {
        setFilteredSatte("all");
    };
    const handleShowCompletedClick = () => {
        setFilteredSatte("completed");
    };
    const handleShowNewClick = () => {
        setFilteredSatte("new");
    };

    const renderedTodoList = todoList.filter(
        (todo) => filteredSatte === "all" || filteredSatte === todo.status
    );

    return (
        <div>
            <h1>Todo List - check jobs</h1>
            <TodoList
                todoList={renderedTodoList}
                onTodoClick={handleTodoClick}
            />
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>
                    Show Completed
                </button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;
