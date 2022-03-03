import CartFeature from 'features/Cart';
import ProductFeature from 'features/Product';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Album from './features/Album';
import Counter from './features/Counter';
import Todo from './features/Todo';
import TodoDetail from './features/Todo/pages/TodoDetail';

const App = () => {
    return (
        <div>
            <Header />

            <div className="container">
                <Routes>
                    <Route path="/*" element={<ProductFeature />} />
                    {/* <Route path="/" element={<Home />} /> */}
                    <Route path="todo" element={<Todo />} />
                    <Route path="todo/:todoId" element={<TodoDetail />} />
                    <Route path="album" element={<Album />} />
                    <Route path="counter" element={<Counter />} />
                    <Route path="cart" element={<CartFeature />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
