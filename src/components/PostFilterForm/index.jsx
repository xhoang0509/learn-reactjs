import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

PostFilterForm.propTypes = {
    obSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
    onSubmit: null,
};

function PostFilterForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState("");
    const typingTimeoutRef = useRef(null);

    const handleSearchTermChange = (e) => {
        const value = e.target.value;

        setSearchTerm(value);

        if (!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value,
            };
            onSubmit(formValues);
        }, 400);
    };
    return (
        <form>
            <h1>Search post</h1>
            <input
                type="text"
                placeholder="search title..."
                value={searchTerm}
                onChange={(e) => handleSearchTermChange(e)}
            />
        </form>
    );
}

export default PostFilterForm;
