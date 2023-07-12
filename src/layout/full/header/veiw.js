import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Grid,
  CardMedia,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./drawer";
import { Outlet } from 'react-router-dom'


export const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const headers = theme.palette.Header;


  return (
    <React.Fragment>
      <AppBar sx={{ background: "white" }}>
        <Grid container pL={10}>
            <Grid item lg={10} sx={{margin: 'auto'}} sm={12} md={12} xs={12} >

        <Toolbar>
          {/* <AddBusinessRoundedIcon sx={{ transform: "scale(2)" , color: 'black'}} /> */}
          <CardMedia
          component="img"
          alt="Image Description"
          sx={headers.img}
          image="https://www.pdfsmart.com/img/app/logo.svg"
          />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" , color: 'black'}}>
                Shoppee
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                sx={{color: 'black', marginLeft: "auto" }}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Products" />
                <Tab label="Services" />
                <Tab label="About Us" />
                <Tab label="Contact" />
              </Tabs>
              {/* <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button> */}
              <Button sx={{ marginLeft: "auto" , border: "1px solid " , padding:'5px 20px'}}>
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
            </Grid>

        </Grid>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;