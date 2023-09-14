import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import AddUser from './AddUser';
import EditUser from './EditUser';
import AddOrganiztion from './AddOrganization';
import EditOrganization from './EditOrganization';
import UserOrderTable from '../../pages/user/OrderTable';
import OperationLog from '../../pages/user/OperationLog';
import AddVenue from './AddVenue';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 1,
  borderRadius: '4px',
  // minWidth: '70%',
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
        <Box sx={style} width={props.filter == 'edit-user' ? '30%' : '60%'}>
          {props.filter == 'edit-user' ? (
            <EditUser data={props.data} open={props.open} setOpen={props.setOpen} />
          ) : props.filter == 'add-organization' ? (
            <AddOrganiztion setOpen={props.setOpen} />
          ) : props.filter == 'edit-organization' ? (
            <EditOrganization data={props.data} open={props.open} setOpen={props.setOpen} />
          ) : props.filter == 'user-order-table' ? (
            <UserOrderTable data={props.data} open={props.open} setOpen={props.setOpen} />
          ) : props.filter == 'user-opration-log' ? (
            <OperationLog data={props.data} open={props.open} setOpen={props.setOpen} />
          ) : props.filter == 'add-venue' ? (
            <AddVenue data={props.data} open={props.open} setOpen={props.setOpen} />
          ) : (
            ''
          )}
        </Box>
      </Modal>
    </div>
  );
}
