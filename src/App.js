import { useState } from "react";
import uuid from "react-uuid";
import "./App.scss";

import ColorBox from "./components/ColorBox";
import Counter from "./components/Counter";
import Header from "./components/Header";
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
