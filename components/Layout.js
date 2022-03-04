import { AppBar, Container, Link, Toolbar, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import NextLink from "next/link";
import useStyles from "../utils/styles";

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography style={{ fontSize: "30px" }} className={classes.bold}>
                amazona
              </Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link style={{ fontSize: "22px" }} className={classes.bold}>
                Cart
              </Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link style={{ fontSize: "22px" }} className={classes.bold}>
                Login
              </Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography className={classes.bold}>
          All rights reserved. Next Amazona
        </Typography>
      </footer>
    </div>
  );
}
