import { Checkbox, createTheme, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
FilterByPrice.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {
        padding: theme.spacing(1),
        borderTop: `1px solid ${theme.palette.grey[300]}`,
    },

    list: {
        padding: 0,
        margin: 0,
        listStyleType: 'none',

        '& > li': {
            marginTop: 0,
        },
    },
}));

function FilterByPrice({ filters = {}, onChange }) {
    const classes = useStyles();

    const handleChange = (e) => {
        if (!onChange) return;

        const { name, checked } = e.target;
        const newFilters = { [name]: checked };

        // if (newFilters[name] === false) {
        //     delete newFilters[name];
        // }
        onChange(newFilters);
    };

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">DỊCH VỤ</Typography>

            <ul className={classes.list}>
                {[
                    { value: 'isPromotion', label: 'Có khuyến mãi' },
                    { value: 'isFreeShip', label: 'Giao hàng miễn phí' },
                ].map((service) => (
                    <li key={service.value}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Boolean(filters[service.value])}
                                    onChange={handleChange}
                                    name={service.value}
                                    color="primary"
                                />
                            }
                            label={service.label}
                        />
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByPrice;
