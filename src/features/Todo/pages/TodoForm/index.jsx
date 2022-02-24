import { Button } from '@mui/material';
import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const { onSubmit } = props;

    const form = useForm({
        defaultValues: {
            title: '',
        },
    });

    const handleSubmit = (values) => {
        if (!values.title) {
            alert('You must enter todo !');
            return;
        }

        if (onSubmit) {
            onSubmit(values);
            form.reset();
        }
    };

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="Enter todo" form={form} />
            <Button variant="contained" type="submit">
                add todo
            </Button>
        </form>
    );
}

export default TodoForm;
