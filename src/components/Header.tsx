"use client";
import { UserButton } from "@clerk/nextjs";

import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Header = () => (
  <AppBar position="static">
    <Box display="flex" alignItems="center" justifyContent="space-between" px={2}>
      <Typography component="div" align="center" py={2}>
        Blog Assistant
      </Typography>
      <UserButton afterSignOutUrl="/" />
    </Box>
  </AppBar>
);
