import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Button, Typography, LinearProgress } from '@mui/material';
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
            position: 'relative',
            paddingTop: theme.spacing(4),
        },

        avatar: {
            margin: '0 auto',
            backgroundColor: [theme.palette.error.main, "!important"],
        },

        title: {
            margin: theme.spacing(2, 0, 2, 0),
            textAlign: 'center',
        },

        submit: {
            margin: theme.spacing(3, 0, 2, 0),
        },

        progress: {
            position: 'absolute',
            top: theme.spacing(1.5),
            left: 0,
            right: 0,
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

    const formSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }
    };
    const { isSubmitting } = form.formState;
    return (
        <div>
            {isSubmitting && <LinearProgress className={classes.progress} />}
            <Avatar className={classes.avatar}>
                <LockOutlined />
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
                    disabled={isSubmitting}
                    type="submit"
                    className={classes.submit}
                    variant="contained"
                    fullWidth
                    color="primary"
                    size="large"
                >
                    Create an account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;
