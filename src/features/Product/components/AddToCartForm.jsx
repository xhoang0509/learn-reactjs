import { yupResolver } from '@hookform/resolvers/yup';
import { createTheme, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import QuantityField from 'components/form-controls/QuantityField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const theme = createTheme();

const useStyles = makeStyles(() => ({
    root: {},

    quantity: {
        margin: theme.spacing(2, 0),
    },

    submit: {
        maxWidth: '400px',
    },
}));

AddToCartForm.propTypes = {
    onSubmit: PropTypes.func,
};

const schema = yup.object().shape({
    quantity: yup
        .number()
        .typeError('Vui lòng nhập một số')
        .required('Yêu cầu nhập số lượng')
        .min(1, 'Số lượng tối thiểu 1')
        .max(50, 'Số lượng tối đa 50'),
});
function AddToCartForm({ onSubmit = null }) {
    const classes = useStyles();

    const form = useForm({
        defaultValues: {
            quantity: 1,
        },
        resolver: yupResolver(schema),
    });

    const formSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values);
        }
    };

    return (
        <form onSubmit={form.handleSubmit(formSubmit)}>
            <QuantityField
                className={classes.quantity}
                label="Nhập số lượng"
                name="quantity"
                form={form}
            />

            <Button
                type="submit"
                className={classes.submit}
                variant="contained"
                fullWidth
                color="error"
                size="large"
            >
                Thêm vào giỏ hàng
            </Button>
        </form>
    );
}

export default AddToCartForm;
