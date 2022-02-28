import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import categoryApi from 'api/categoryApi';
import { Box, createTheme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

FilterByCategories.propTypes = {
    onChange: PropTypes.func,
};

const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {
        padding: theme.spacing(1),
    },

    menu: {
        padding: 0,
        margin: 0,
        listStyleType: 'none',
    },

    item: {
        paddingTop: theme.spacing(1),
        '&:hover': {
            cursor: 'pointer',
            color: theme.palette.primary.dark,
        },
    },
}));

function FilterByCategories({ onChange }) {
    const classes = useStyles();
    const [categoriesList, setCategoriesList] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const response = await categoryApi.getAll();
                const newResponse = response.map((x) => ({ id: x.id, name: x.name }));
                setCategoriesList(newResponse);
                console.log(newResponse);
            } catch (error) {
                console.log('Failed to fetch category', error);
            }
        })();
    }, []);

    const handleCategoryClick = (category) => {
        if (onChange) onChange(category.id);
    };

    const handleCategoryClickAll = (category) => {
        if (onChange) onChange(null);
    };
    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
            <ul className={classes.menu}>
                <Typography
                    className={classes.item}
                    variant="body2"
                    onClick={handleCategoryClickAll}
                >
                    Tất cả sản phẩm
                </Typography>
                {categoriesList.map((category) => (
                    <li
                        className={classes.item}
                        key={category.id}
                        onClick={() => handleCategoryClick(category)}
                    >
                        <Typography variant="body2">{category.name}</Typography>
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByCategories;
