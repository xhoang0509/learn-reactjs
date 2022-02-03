import { useEffect, useState } from "react";
import queryString from "query-string";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import PostFilterForm from "./components/PostFilterForm";
import Clock from "./components/Clock";
import MagicBox from "./components/MagicBox";

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
        <>
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
        </>
    );
};

export default App;
