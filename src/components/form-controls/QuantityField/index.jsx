import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { createTheme, FormHelperText, IconButton, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {},

    box: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',

        maxWidth: '150px',
    },
}));

QuantityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function QuantityField(props) {
    const classes = useStyles();
    const { form, name, label, disabled } = props;
    const {
        formState: { errors },
        setValue,
    } = form;
    const hasError = !!errors[name];

    return (
        <FormControl error={hasError} margin="normal" fullWidth variant="outlined">
            <Typography>{label}</Typography>
            <Controller
                name={name}
                control={form.control}
                render={({ field: { onChange, onBlur, value, name } }) => {
                    return (
                        <Box className={classes.box}>
                            <IconButton
                                onClick={() =>
                                    setValue(
                                        name,
                                        Number.parseInt(value) ? Number.parseInt(value) - 1 : 1
                                    )
                                }
                            >
                                <RemoveCircleOutlineIcon />
                            </IconButton>
                            <OutlinedInput
                                onChange={onChange}
                                onBlur={onBlur}
                                name={name}
                                value={value}
                                disabled={disabled}
                                id={name}
                                size="small"
                                type="number"
                            ></OutlinedInput>
                            <IconButton
                                onClick={() =>
                                    setValue(
                                        name,
                                        Number.parseInt(value) ? Number.parseInt(value) + 1 : 1
                                    )
                                }
                            >
                                <AddCircleOutlineIcon />
                            </IconButton>
                        </Box>
                    );
                }}
            />
            <FormHelperText>{errors[name]?.message}</FormHelperText>
        </FormControl>
    );
}

export default QuantityField;
