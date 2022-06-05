import React, { useEffect, useState, memo } from "react";
import { Grid, Drawer, Card, Avatar, Typography, Button } from "@mui/material";
import { ExistingCustomerInterface } from "../../interfaces/customerInterface";
import FormDialog from "../FormDialog";
import { UPDATE_CUSTOMER } from "../../constants";
import DeleteDialog from "../DeleteDialog";

const CustomerDetail = ({
  state,
  setState,
  data,
}: {
  state: boolean;
  setState: (state: boolean) => void;
  data: ExistingCustomerInterface | undefined;
}) => {
  const [updateOpen, setUpdateOpen] = useState<boolean>(false);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState(open);
    };

  useEffect(() => {
    if (data === undefined) {
      setState(false);
      console.log("trigger");
    }
  }, [data]);

  return (
    <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
      <Card sx={{ width: 250, height: "100%", paddingTop: "20px" }}>
        <Grid container>
          <Grid item xs={12} justifyContent="space-around" textAlign="center">
            <Avatar
              alt={data?.name}
              src="/static/images/avatar/1.jpg"
              sx={{ width: 210, height: 210, margin: "auto" }}
            />
          </Grid>
          <Grid item container xs={12} padding="20px" rowSpacing={1}>
            <Grid item xs={12}>
              <Typography variant="h6">Name</Typography>
              <Typography variant="body1">{data?.name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Email</Typography>
              <Typography variant="body1">{data?.email}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Phone Number</Typography>
              <Typography variant="body1">{data?.phone}</Typography>
            </Grid>
          </Grid>
          <Grid item container xs={12} justifyContent="space-around">
            <Grid item>
              <Button
                variant="contained"
                onClick={() => {
                  setUpdateOpen(true);
                }}
              >
                Update
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  setDeleteOpen(true);
                }}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Card>
      <FormDialog
        open={updateOpen}
        setOpen={setUpdateOpen}
        type={UPDATE_CUSTOMER}
        data={data}
      />
      {data && (
        <DeleteDialog
          open={deleteOpen}
          setOpen={setDeleteOpen}
          id={data?.id}
          toggleDrawer={toggleDrawer}
        />
      )}
    </Drawer>
  );
};

export default memo(CustomerDetail);
