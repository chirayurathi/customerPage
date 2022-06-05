import React, {memo} from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useFirestore from "../../hooks/useFirestore";

const DeleteDialog = ({
  open,
  setOpen,
  id,
  toggleDrawer,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  id: string;
  toggleDrawer: (open: boolean) => void;
}) => {
  const { deleteCustomer } = useFirestore();

  const handleClose = () => {
    setOpen(false);
  };
  const deleteHandler = () => {
    deleteCustomer(id);
    setOpen(false);
    toggleDrawer(false);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Delete Customer</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this customer?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={deleteHandler}
          autoFocus
          variant="contained"
          color="error"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(DeleteDialog);
