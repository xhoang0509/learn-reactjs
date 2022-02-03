import { useEffect, useState } from "react";
import uuid from "react-uuid";
import queryString from "query-string";

import "./App.scss";

import ColorBox from "./components/ColorBox";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";

function App() {
    const [todoList, setTodoList] = useState([
        { id: uuid(), title: "I love Easy Frontend!" },
        { id: uuid(), title: "We love Easy Frontend!" },
        { id: uuid(), title: "They love Easy Frontend!" },
    ]);
    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 11,
    });
    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1,
    });
    useEffect(() => {
        const paramsString = queryString.stringify(filters);
        console.log(paramsString);
        const fetchPostList = async () => {
            try {
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                console.log({ responseJSON });
                const { data, pagination } = responseJSON;
                setPostList(data);
                setPagination(pagination);
            } catch (error) {
                console.log("Failed to fetch post list: ", error.message);
            }
        };

        fetchPostList();
    }, [filters]);
    const handlePageChange = (newPage) => {
        setFilters({
            ...filters,
            _page: newPage,
        });
    };

    const handleTodoClick = (index) => {
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    };

    const handleTodoFormSubmit = (formValues) => {
        const newTodoList = [...todoList];
        newTodoList.push(formValues);
        setTodoList(newTodoList);
    };
    return (
        <div className="app">
            <PostList posts={postList} />
            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            />
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <TodoList todos={todoList} onTodoClick={handleTodoClick} />
            <Header />
            <TodoFeature />
            <AlbumFeature />
            <ColorBox />
            <Counter />
        </div>
    );
}

export default App;
