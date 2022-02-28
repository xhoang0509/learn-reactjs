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
        onChange(newFilters);
        console.log(newFilters);
    };

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">DỊCH VỤ</Typography>

            <FormGroup>
                {[
                    { value: 'isPromotion', label: 'Giảm giá' },
                    { value: 'isFreeShip', label: 'Miễn phí vận chuyển' },
                ].map((service) => (
                    <FormControlLabel
                        key={service.value}
                        name={service.value}
                        onChange={handleChange}
                        checked={filters[service.value]}
                        value={service.value}
                        control={<Checkbox />}
                        label={service.label}
                    />
                ))}
            </FormGroup>
        </Box>
    );
}

export default FilterByPrice;
