import React, { useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import clsx from "clsx";
import { useRouter } from "next/router";

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

function MobileMenuBar() {
  const router = useRouter();
  const pathRoute: string = router.pathname;
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction={"left"}
        size={300}
        enableOverlay={true}
        className="mobile-menu-bar"
      >
        <Grid className="mobile-menu-bar__logo" md={2} sm={2}>
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
        {MenuList.map((data) => (
          <>
            <List
              className="mobile-menu-bar__drawer drawer"
              style={{ padding: 0 }}
            >
              <ListItem onClick={toggleDrawer} className="drawer__list-item">
                <>
                  <ListItemText
                    className={clsx({
                      ["drawer__label"]: true,
                      ["menu-bar__labelActive"]: data?.url === pathRoute,
                    })}
                  >
                    <Link href={data.url}>{data.label}</Link>
                  </ListItemText>
                </>
              </ListItem>
            </List>
          </>
        ))}
      </Drawer>
      <Grid style={{ padding: 0 }}>
        <Grid className="mobile-menu-bar__outside">
          <Grid md={1} sm={1}>
            <Button onClick={toggleDrawer}>
              <MenuIcon />
            </Button>
          </Grid>
          <Grid className="mobile-menu-bar__main-logo" md={11} sm={11}>
            {MenuList.map(
              (data) =>
                data.label === "Home" && (
                  <>
                    <Link
                      href={data.url}
                      // className="menu-bar__label"
                    >
                      <img src={"/logo_compressed.png"} alt="hdl-logo" />
                    </Link>
                  </>
                )
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default MobileMenuBar;
