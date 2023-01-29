import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const pathRoute: string = router.pathname;

  return (
    <AppBar position="static">
      <Grid container>
        <Grid className="menu-bar" md={2} sm={2}>
          {MenuList.map(
            (data) =>
              data.label === "Home" && (
                <>
                  <Link href={data.url} className="menu-bar__label">
                    <img src={"/hdl-logo.svg"} alt="hdl-logo" />
                  </Link>
                </>
              )
          )}
        </Grid>
        <Grid
          className="menu-bar"
          md={10}
          sm={10}
          style={{ justifyContent: "flex-end" }}
        >
          {MenuList.map((data) => (
            <>
              <span
                className={clsx({
                  ["menu-bar__label"]: true,
                  ["menu-bar__labelActive"]: Boolean(pathRoute),
                })}
              >
                <Link href={data.url} className="menu-bar__label">
                  {data.label}
                </Link>
              </span>
            </>
          ))}
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default MenuBar;
