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
import { yupResolver } from '@hookform/resolvers/yup';

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

function RegisterForm(props) {
    const classes = useStyles();

    const schema = yup.object().shape({
        fullName: yup.string().required('Please enter your full name !'),
    });
    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
            form.reset();
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

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullName" label="Full name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <PasswordField
                    name="retypePassword"
                    label="Retype password"
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
