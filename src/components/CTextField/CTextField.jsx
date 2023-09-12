import { TextField } from '@mui/material';
import React from 'react';

const CTextField = (props) => {
  return (
    <TextField
      style={{ width: props.width ? props.width : 'auto', margin: props.margin ? props.margin : 'auto' }}
      fullWidth={props.full ? props.full : false}
      size="small"
      onChange={props.onChange}
      id="outlined-basic"
      label={props.label}
      variant="outlined"
      name={props.name}
      defaultValue={props.defaultValue}
    />
  );
};

export default CTextField;
