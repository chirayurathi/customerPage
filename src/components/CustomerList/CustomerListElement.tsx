import {
  Avatar,
  Divider,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { CustomerListInterface } from "../../interfaces/customerInterface";
import { HoverListItem } from "./StyledComponents";

const CustomerListElement = ({
  customerId,
  handleClick,
  customers
}: {
  customerId: string;
  handleClick: (customerId: string) => void;
  customers: CustomerListInterface
}) => {
  return (
    <React.Fragment>
      <HoverListItem
        alignItems="flex-start"
        onClick={() => {
          handleClick(customerId);
        }}
      >
        <ListItemAvatar>
          <Avatar
            alt={customers !== undefined ? customers[customerId]?.name : ""}
            src="/static/images/avatar/1.jpg"
          />
        </ListItemAvatar>
        <ListItemText
          primary={customers !== undefined ? customers[customerId]?.name : null}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {customers !== undefined ? customers[customerId]?.email : null}
              </Typography>
            </React.Fragment>
          }
        />
      </HoverListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
};

export default CustomerListElement;
