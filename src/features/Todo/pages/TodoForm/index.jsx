import { Button } from '@mui/material';
import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    title: yup.string().required('ban can nhap noi dung'),
});

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const { onSubmit } = props;

    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    });

    const formSubmit = (values) => {
        console.log('From submit: ', values);
        if (!values.title) {
            alert('You must enter todo !');
            return;
        }

        if (onSubmit) {
            onSubmit(values);
            form.reset({ title: '' });
        }
    };

    return (
        <form onSubmit={form.handleSubmit(formSubmit)}>
            <InputField name="title" label="Enter todo..." form={form} />
            <Button variant="contained" type="submit">
                add todo
            </Button>
        </form>
    );
}

export default TodoForm;
