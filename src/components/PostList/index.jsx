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
            <h1>Post list with useEffect</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.description}</p>
                        <img src={post.imageUrl} alt={post.title} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default PostList;
