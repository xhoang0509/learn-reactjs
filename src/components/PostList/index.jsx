import React from "react";
import PropTypes from "prop-types";

PostList.propTypes = {
    posts: PropTypes.array,
};

PostList.defaultProps = {
    posts: [],
};

function PostList(props) {
    const { posts } = props;
    return (
        <>
            <h1>Call API with useEffect</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    );
}

export default PostList;
