import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import "./App.css";
import Navbar from "./components/navbar";
import CustomerList from "./components/CustomerList";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { LoadingContext } from "./context";

function App() {
  const { state } = useContext(LoadingContext);
  return (
    <div className="App">
      <Box sx={{ width: "100%", position: "fixed", top: "0", left: "0" }}>
        {state.loading && <LinearProgress />}
      </Box>
      <Grid container paddingLeft={5} paddingRight={5} paddingTop={2}>
        <Navbar />
        <CustomerList />
      </Grid>
    </div>
  );
}

export default App;
