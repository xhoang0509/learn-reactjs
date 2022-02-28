import { Button, createTheme, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
ProductByPrice.propTypes = {
    onChange: PropTypes.func,
};

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <NumberFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
        />
    );
});
const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {
        padding: theme.spacing(1),
        borderTop: `1px solid ${theme.palette.grey[300]}`,
    },

    range: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',

        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),

        '& > span': {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
    },

    button: {
        marginLeft: [theme.spacing(1), '!important'],
    },
}));

function ProductByPrice({ onChange }) {
    const classes = useStyles();
    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        if (!onChange) return;
        onChange(values);
    };

    const handleSubmitCancel = () => {
        if (!onChange) return;
        setValues({
            salePrice_gte: '',
            salePrice_lte: '',
        });
        onChange({
            salePrice_gte: null,
            salePrice_lte: null,
        });
    };

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">LỌC THEO GIÁ</Typography>
            <Box className={classes.range}>
                <TextField
                    variant="standard"
                    name="salePrice_gte"
                    value={values.salePrice_gte}
                    onChange={handleChange}
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />
                <span>-</span>
                <TextField
                    variant="standard"
                    name="salePrice_lte"
                    value={values.salePrice_lte}
                    onChange={handleChange}
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />
            </Box>
            <Button size="small" variant="outlined" color="primary" onClick={handleSubmit}>
                ÁP DỤNG
            </Button>
            <Button
                className={classes.button}
                size="small"
                variant="outlined"
                color="error"
                onClick={handleSubmitCancel}
            >
                HỦY LỌC
            </Button>
        </Box>
    );
}

export default ProductByPrice;
