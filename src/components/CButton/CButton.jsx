import React from 'react';
import { Button } from '@mui/material';

const CButton = (props) => {
  return (
    <Button
      onClick={props.onClick}
      variant={props.variant}
      style={{
        color: props.color ? props.color : '',
        width: props.width ? props.width : 'auto',
        background: props.background ? props.background : 'auto',
      }}
    >
      {props.label}
    </Button>
  );
};

export default CButton;
