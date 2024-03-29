import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CSelect(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    props.setValue(event.target.value);
  };

  return (
    // <Box sx={{ minWidth: props.width ? props.width : 120 }}>
    //   <FormControl fullWidth>
    //     <InputLabel id="demo-simple-select-label">Add</InputLabel>
    //     <Select
    //       size="medium"
    //       labelId="demo-simple-select-label"
    //       id="demo-simple-select"
    //       value={props.value}
    //       // label="Select your profile type"
    //       onChange={handleChange}
    //     >
    //       {props.data.map((item) => (
    //         <MenuItem key={item.value} value={item.value}>
    //           {item.name}
    //         </MenuItem>
    //       ))}
    //     </Select>
    //   </FormControl>
    // </Box>
    <Box sx={{ minWidth: props.width ? props.width : 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          //       // label="Select your profile type"
          onChange={handleChange}
          label={props.label}
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
