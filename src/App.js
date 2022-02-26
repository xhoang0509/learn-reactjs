import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import productApi from './api/productApi';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Product from './components/Product';
import Album from './features/Album';
import Counter from './features/Counter';
import Todo from './features/Todo';
import TodoDetail from './features/Todo/pages/TodoDetail';

const App = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const params = {};
            const productList = await productApi.getAll(params);
            setProductList(productList);
        };
        fetchProducts();
    }, []);

    const showNoti = () => {
        enqueueSnackbar('Register successfully', { variant: 'success' });
    };
    return (
        <div>
            <Header />

            <Button onClick={showNoti}>Show noti</Button>

            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/todo/:todoId" element={<TodoDetail />} />
                    <Route path="/album" element={<Album />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route
                        path="/product"
                        element={<Product products={productList} />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
