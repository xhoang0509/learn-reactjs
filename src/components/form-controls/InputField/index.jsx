import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import React from 'react';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled } = props;
    
    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field }) => {
                return (
                    <TextField
                        {...field}
                        fullWidth
                        label={label}
                        disabled={disabled}
                    />
                );
            }}
        />
    );
}

export default InputField;
