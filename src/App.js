import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import productApi from './api/productApi';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Album from './features/Album';
import Todo from './features/Todo';
import TodoDetail from './features/Todo/pages/TodoDetail';

const App = () => {
    useEffect(() => {
        const fetchProducts = async () => {
            const params = {
                _limit: 10,
            };
            const productList = await productApi.getAll(params);
            console.log(productList);
        };
        fetchProducts();
    }, []);
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
