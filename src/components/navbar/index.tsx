import React, { useContext } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import useFirestore from "../../hooks/useFirestore";
import { Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AddButton, SearchBox, SearchInput } from "./StyledComponents";
import FormDialog from "../FormDialog";
import { ADD_CUSTOMER } from "../../constants";
import { LoadingContext } from "../../context";
import { setSearch } from "../../actions";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const { state, dispatch } = useContext(LoadingContext);

  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="space-between"
      alignItems="center"
      paddingBottom={5}
    >
      <Grid item xs={4} textAlign="left">
        <Typography variant="h4" paddingLeft={2}>
          Customers
        </Typography>
      </Grid>
      <Grid
        item
        container
        xs={4}
        justifyContent="flex-end"
        spacing={2}
        alignItems="center"
      >
        <Grid item>
          <SearchBox>
            <SearchIcon />
            <SearchInput
              id="input-with-sx"
              hiddenLabel
              placeholder="search"
              onChange={(e) => {
                setSearch(dispatch, e.target.value);
              }}
              value={state.search}
            />
          </SearchBox>
        </Grid>
        <Grid item>
          <AddButton
            sx={{ bgcolor: "lightgray" }}
            onClick={() => {
              setOpen(true);
            }}
          >
            <AddRoundedIcon />
          </AddButton>
        </Grid>
      </Grid>
      <FormDialog open={open} setOpen={setOpen} type={ADD_CUSTOMER} />
    </Grid>
  );
};

export default Navbar;
