import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';
import "./_menuBar.scss"

export type MenuOption = {
  label: string;
  url: string;
};

export const MenuList: Array<MenuOption> = [
  {
    label: "Home",
    url: "/home",
  },
  {
    label: "About Us",
    url: "/about-us",
  },
  {
    label: "Products and Services",
    url: "/products-and-services",
  },
  {
    label: "CSR Programs",
    url: "/csr-programs",
  },
  {
    label: "Contact Us",
    url: "/contact-us",
  },
];

const MenuBar = () => {
  return (
    <AppBar position="static">
      <Grid className="menu-bar">
        {MenuList.map((data) => (
          <>
            <Typography
              className="label"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              {data.label}
            </Typography>
          </>
        ))}
        <Button color="inherit">Login</Button>
      </Grid>
    </AppBar>
  );
};

export default MenuBar;
