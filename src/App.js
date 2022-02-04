import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Album from "./features/Album";
import Todo from "./features/Todo";
import TodoDetail from "./features/Todo/pages/TodoDetail";

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/todo/:todoId" element={<TodoDetail />} />
                <Route path="/album" element={<Album />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;
