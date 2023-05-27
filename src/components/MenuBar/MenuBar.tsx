import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid, Theme, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
import MobileMenuBar from "../MobileMenuBar/MobileMenuBar";

export type MenuOption = {
  label: string;
  url: string;
};

export const MenuList: Array<MenuOption> = [
  {
    label: "Home",
    url: "/",
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
];

function MenuBar() {
  const router = useRouter();
  const pathRoute: string = router.pathname;
  const theme = useTheme();
  const isMobile = useMediaQuery((baseTheme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <AppBar position="static">
      {isMobile ? (
        <MobileMenuBar />
      ) : (
        <Grid container>
          <Grid className="menu-bar" md={2} sm={2}>
            {MenuList.map(
              (data) =>
                data.label === "Home" && (
                  <>
                    <Link href={data.url}>
                      <img src={"/logo_compressed.png"} alt="hdl-logo" />
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
                    ["menu-bar__labelActive"]: data?.url === pathRoute,
                  })}
                >
                  <Link href={data.url}>{data.label}</Link>
                </span>
              </>
            ))}
          </Grid>
        </Grid>
      )}
    </AppBar>
  );
}

export default MenuBar;
