import queryString from "query-string";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

function TodoFeature() {
    const [todoList, setTodoList] = useState(initTodoList);

    const location = useLocation();
    let navigate = useNavigate();
    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(location.search);
        console.log(params.status);
        return params.status || "all";
    });
    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilteredStatus(params.status || "all");
    }, [location.search]);

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
        const queryParams = { status: "all" };
        navigate({
            search: queryString.stringify(queryParams),
        });
    };
    const handleShowCompletedClick = () => {
        const queryParams = { status: "completed" };
        navigate({
            search: queryString.stringify(queryParams),
        });
    };
    const handleShowNewClick = () => {
        const queryParams = { status: "new" };
        navigate({
            search: queryString.stringify(queryParams),
        });
    };

    const renderedTodoList = useMemo(() => {
        return todoList.filter(
            (todo) => filteredStatus === "all" || filteredStatus === todo.status
        );
    }, [todoList, filteredStatus]);

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
