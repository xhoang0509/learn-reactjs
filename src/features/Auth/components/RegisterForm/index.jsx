import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Button, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const useStyles = makeStyles(() => {
    const theme = createTheme();
    return {
        root: {
            paddingTop: theme.spacing(4),
        },

        avatar: {
            margin: '0 auto',
            background: theme.palette.error.main,
        },

        title: {
            margin: theme.spacing(2, 0, 3, 0),
            textAlign: 'center',
        },

        submit: {
            margin: theme.spacing(3, 0, 2, 0),
        },
    };
});

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
    onSubmit: null,
};
const schema = yup.object().shape({
    fullName: yup
        .string()
        .required('Please enter your full name.')
        .test(
            'should has at least two words',
            'Please enter at least two words',
            (value) => {
                value = value.trim();
                return value.split(' ').length >= 2;
            }
        ),
    email: yup
        .string()
        .required('Please enter your email')
        .email('Please enter a valid email address'),
    password: yup
        .string()
        .required('Please enter your passsword')
        .min(6, 'Please enter at least 6 characters'),
    retypePassword: yup
        .string()
        .required('Please retype your password')
        .oneOf([yup.ref('password')], 'Password does not match'),
});
function RegisterForm(props) {
    const classes = useStyles();

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema),
    });

    const formSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
            form.reset({
                fullName: '',
                email: '',
                password: '',
                retypePassword: '',
            });
        }
    };
    return (
        <div>
            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>

            <Typography className={classes.title} component="h3" variant="h5">
                Create An Account
            </Typography>

            <form onSubmit={form.handleSubmit(formSubmit)}>
                <InputField label="Full name" name="fullName" form={form} />
                <InputField label="Email" name="email" form={form} />
                <PasswordField label="Password" name="password" form={form} />
                <PasswordField
                    label="Retype password"
                    name="retypePassword"
                    form={form}
                />
                <Button
                    type="submit"
                    className={classes.submit}
                    variant="contained"
                    fullWidth
                    color="primary"
                >
                    Create an account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;
