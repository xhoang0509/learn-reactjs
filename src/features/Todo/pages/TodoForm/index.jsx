import InputField from 'components/form-controls/InputField';
// import InputField from '../../../../components/form-controls/InputField';

import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const form = useForm({
        defaultValues: {
            title: '',
        },
    });

    const handleSubmit = (values) => {
        console.log('TODO FORM: ', values);
    };

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="Enter todo" form={form} />
        </form>
    );
}

export default TodoForm;
