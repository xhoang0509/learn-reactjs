import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import TodoList from './components/TodoList';
import TodoForm from './pages/TodoForm';


TodoFeature.propTypes = {};
const initTodoList = JSON.parse(localStorage.getItem('todo-list')) || [];

function TodoFeature() {
    const [todoList, setTodoList] = useState(() => initTodoList);

    const location = useLocation();
    let navigate = useNavigate();
    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || 'all';
    });
    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilteredStatus(params.status || 'all');
    }, [location.search]);

    const handleTodoClick = (todo, index) => {
        // copy todolist to new one
        const newTodoList = [...todoList];
        // update status
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        };
        // set state todolist
        setTodoList(newTodoList);
    };

    const handleShowAllClick = () => {
        const queryParams = { status: 'all' };
        navigate({
            search: queryString.stringify(queryParams),
        });
    };
    const handleShowCompletedClick = () => {
        const queryParams = { status: 'completed' };
        navigate({
            search: queryString.stringify(queryParams),
        });
    };
    const handleShowNewClick = () => {
        const queryParams = { status: 'new' };
        navigate({
            search: queryString.stringify(queryParams),
        });
    };

    const renderedTodoList = useMemo(() => {
        return todoList.filter(
            (todo) => filteredStatus === 'all' || filteredStatus === todo.status
        );
    }, [todoList, filteredStatus]);

    const handleTodoFormSubmit = (values) => {
        const newTodo = {
            id: uuid(),
            status: 'new',
            ...values,
        };
        const newTodoList = [...todoList];
        newTodoList.push(newTodo);
        setTodoList(newTodoList);
    };

    useEffect(() => {
        localStorage.setItem('todo-list', JSON.stringify(todoList));
    }, [todoList]);

    return (
        <div >
            <h1>Todo List - check jobs</h1>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <TodoList
                todoList={renderedTodoList}
                onTodoClick={handleTodoClick}
            />
            {todoList.length === 0 ? (
                <h1>Empty todo</h1>
            ) : (
                <div>
                    <button onClick={handleShowAllClick}>Show All</button>
                    <button onClick={handleShowCompletedClick}>
                        Show Completed
                    </button>
                    <button onClick={handleShowNewClick}>Show New</button>
                </div>
            )}
        </div>
    );
}

export default TodoFeature;
