import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddUser from './AddUser';
import EditUser from './EditUser';
import AddOrganiztion from './AddOrganization';
import EditOrganization from './EditOrganization';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 1,
  borderRadius: '4px',
};

export default function CModel(props) {
  // console.log(props);
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={props.open}
        onClose={() => props.setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {props.filter == 'add-user' ? (
            <AddUser />
          ) : props.filter == 'edit-user' ? (
            <EditUser data={props.data} open={props.open} setOpen={props.setOpen} />
          ) : props.filter == 'add-organization' ? (
            <AddOrganiztion setOpen={props.setOpen} />
          ) : props.filter == 'edit-organization' ? (
            <EditOrganization data={props.data} open={props.open} setOpen={props.setOpen} />
          ) : (
            ''
          )}
        </Box>
      </Modal>
    </div>
  );
}
