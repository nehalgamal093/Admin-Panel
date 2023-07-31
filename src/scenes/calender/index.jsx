import React from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";
const Calender = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="CALENDER" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};
export default Calender;
