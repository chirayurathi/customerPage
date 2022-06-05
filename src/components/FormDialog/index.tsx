import React, { useEffect, useState, memo } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  CustomerInterface,
  ExistingCustomerInterface,
} from "../../interfaces/customerInterface";
import { ADD_CUSTOMER, UPDATE_CUSTOMER } from "../../constants";
import useFirestore from "../../hooks/useFirestore";

const FormDialog = ({
  open,
  setOpen,
  type,
  data,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  type: string;
  data?: ExistingCustomerInterface;
}) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>();
  const { addCustomer, updateCustomer } = useFirestore();

  useEffect(() => {
    if (type === UPDATE_CUSTOMER && data) {
      setName(data?.name);
      setEmail(data?.email);
      setNumber(data?.phone.toString());
    }
  }, [data, type]);

  const handleClose = () => {
    setOpen(false);
    setName("");
    setEmail("");
    setNumber(undefined);
  };

  const handlePublish = () => {
    let num = number !== undefined ? parseInt(number) : 0;
    let newData: CustomerInterface = {
      name: name,
      email: email,
      phone: num,
    };
    if (type === ADD_CUSTOMER) {
      addCustomer(newData);
    } else if (data && type === UPDATE_CUSTOMER) {
      let updatedData: ExistingCustomerInterface = {
        ...newData,
        id: data.id,
      };
      updateCustomer(updatedData);
    }
    handleClose();
    setName("");
    setEmail("");
    setNumber(undefined);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {type === ADD_CUSTOMER ? "New Customer" : "Update Customer Details"}
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          autoFocus
          margin="dense"
          id="number"
          label="Phone Number"
          type="number"
          fullWidth
          variant="standard"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={handlePublish}
          variant="contained"
          disabled={
            name === "" || email === "" || number === undefined || number === ""
          }
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(FormDialog);
