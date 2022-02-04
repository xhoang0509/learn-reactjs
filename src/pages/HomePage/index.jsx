import queryString from "query-string";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Clock from "./components/Clock";
import MagicBox from "./components/MagicBox";
import Pagination from "./components/Pagination";
import PostFilterForm from "./components/PostFilterForm";
import PostList from "./components/PostList";
import Album from "./features/Album";
import Todo from "./features/Todo";

const App = () => {
    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 11,
    });
    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1,
        title_like: "",
    });
    const [showClock, setShowClock] = useState(true);
    useEffect(() => {
        const fetchPostList = async () => {
            try {
                const paramsString = queryString.stringify(filters);
                const requestUrl = `https://js-post-api.herokuapp.com/api/posts?${paramsString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
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
    const handleFiltersChange = (newFilters) => {
        setFilters({
            ...filters,
            _page: 1,
            title_like: newFilters.searchTerm,
        });
    };

    return (
        <div>
            Header
            <ul>
                <li>
                    <Link to="/todo">Todo</Link>
                </li>
                <li>
                    <Link to="/album">Album</Link>
                </li>
            </ul>
            <Routes>
                <Route path="todo" element={<Todo />} />
                <Route path="album" element={<Album />} />
            </Routes>
            <MagicBox />
            {showClock && <Clock />}
            <button onClick={() => setShowClock(false)}>Hidden clock</button>
            <button onClick={() => setShowClock(true)}>Show clock</button>
            <PostFilterForm onSubmit={handleFiltersChange} />
            <PostList posts={postList} />
            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            />
            Footer
        </div>
    );
};

export default App;
