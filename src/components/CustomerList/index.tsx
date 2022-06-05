import React, { memo, useContext, useEffect, useState } from "react";
import List from "@mui/material/List";
import { Grid } from "@mui/material";
import useFirestore from "../../hooks/useFirestore";
import CustomerDetail from "../CustomerDetail";
import { ExistingCustomerInterface } from "../../interfaces/customerInterface";
import { LoadingContext } from "../../context";
import CustomerListElement from "./CustomerListElement";
const CustomerList = () => {
  const { customers, getCustomerList } = useFirestore();
  const { state } = useContext(LoadingContext);
  const [drawState, setDrawState] = useState(false);
  const [data, setData] = useState<ExistingCustomerInterface>();
  const handleClick = (id: string) => {
    if (customers) setData({ ...customers[id], id: id });
    setDrawState(true);
  };
  useEffect(() => {
    let unsubscribe = getCustomerList();
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    if (data && customers) {
      if (
        customers[data?.id] &&
        (data.name !== customers[data?.id].name ||
          data.phone !== customers[data?.id].phone ||
          data.email !== customers[data?.id].email)
      ) {
        setData({ ...customers[data.id], id: data.id });
      } else if (!customers[data.id]) {
        setData(undefined);
      }
    }
  }, [customers, data]);
  return (
    <>
      {customers && (
        <Grid item xs={12}>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {Object.keys(customers as Object).map(
              (customerId) =>
                (customers !== undefined
                  ? customers[customerId]?.name
                  : ""
                ).includes(state.search) && (
                  <CustomerListElement
                    handleClick={handleClick}
                    customerId={customerId}
                    customers = {customers}
                  />
                )
            )}
          </List>
          <CustomerDetail
            state={drawState}
            setState={setDrawState}
            data={data}
          />
        </Grid>
      )}
    </>
  );
};

export default memo(CustomerList);
