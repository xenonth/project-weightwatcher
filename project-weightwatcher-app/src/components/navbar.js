import React, { useState, useEffect } from 'react';

//Material UI Dependencies
import { AppBar, Toolbar, makeStyles, Button, IconButton, 
  Drawer, Link, MenuItem,} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';


//for React link navigation
import { Link as RouterLink } from "react-router-dom";

const headersData = [
  {
    label: "P/Board",
    href: "/pboard",
  },
  {
    label: "W/R Board",
    href: "/wrboard",
  },
  {
    label: "UNISPAN",
    href: "/unispan",
  },
  {
    label: "VILLA",
    href: "/villa",
  },
];

//Materials UI layout
const useStyles = makeStyles(() => ({
  header: {
     "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  menuButton: {
    size: "18px",
    marginLeft: "38px",
 },
 toolbar: {
  display: "flex",
  justifyContent: "space-between",
},
drawerContainer: {
  padding: "20px 30px",
},
}));

function Header() {
  
  //css styles for header
  const {header, menuButton, toolbar, drawerContainer} = useStyles();
  
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  })

const { mobileView, drawerOpen } = state;
  //responsive material-ui via state

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);


    const displayDesktop = () => {
      return <Toolbar className={toolbar}> 
        <div>{getMenuButtons()}</div> 
      </Toolbar>;
    };

    const displayMobile = () => {
      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
  
      return (
        <Toolbar>
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
  
          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={drawerContainer}>{getDrawerChoices()}</div>
          </Drawer>
  
        </Toolbar>
      );
    };
    
    const getDrawerChoices = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Link
            {...{
              component: RouterLink,
              to: href,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label,
            }}
          >
            <MenuItem>{label}</MenuItem>
          </Link>
        );
      });
    };

    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton
            }}
          >
            {label}
          </Button>
        );
      });
    };

    return (
      <header className={header}>
        <AppBar position="sticky">{mobileView ? displayMobile() : displayDesktop()}</AppBar>
      </header>
    );
}

export default Header;