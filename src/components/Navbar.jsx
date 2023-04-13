import { Stack, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar, Account } from "./";

const Navbar = () => (
  <Stack
    // maxHeight="45px"
    direction="row"
    alignItems="center"
    display="flex"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
      zIndex: "1000",
    }}
  >
    <Link
      to="/"
      style={{ display: "flex", alignItems: "center" }}
      sx={{ sx: { direction: "column" } }}
    >
      <img src={logo} alt="logo" height={45} />
      {/* <Typography sx={{color:'#fff', fontSize:'30px', pl:2 }}> You</Typography>
      <Typography sx={{color:'#F31503', fontSize:'30px', pr:2}}> Noob</Typography> */}
    </Link>
    {/* <Box direction="row" display="flex">*/}
    <Box>
      <SearchBar></SearchBar>
      {/* <Account sx={{ mr: 0}} /> */}
    </Box>
  </Stack>
);

export default Navbar;
