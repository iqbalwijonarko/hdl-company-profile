import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";

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

function MenuBar() {
  return (
    <AppBar position="static">
      <Grid container>
        <Grid className="menu-bar" md={2} sm={2}>
          <img src={"/hdl-logo.svg"} alt="hdl-logo" />
        </Grid>
        <Grid className="menu-bar" md={10} sm={10}>
          {MenuList.map((data) => (
            <>
              <Typography
                className="menu-bar__label"
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                {data.label}
              </Typography>
            </>
          ))}
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default MenuBar;
