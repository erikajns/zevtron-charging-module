import React from 'react';
import InputMask from 'react-input-mask';
import { TextField } from '@mui/material';

const PhoneInput = ({ value, onChange }) => {
  return (
    <InputMask
      mask="(999)999-9999"
      value={value}
      onChange={onChange}
    >
      {(inputProps) => (
        <TextField
          {...inputProps}
          name="phone"
          label="Phone Number"
          variant="outlined"
          fullWidth
          required
        />
      )}
    </InputMask>
  );
};

export default PhoneInput;
