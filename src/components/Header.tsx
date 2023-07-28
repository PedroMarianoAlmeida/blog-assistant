import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

export const Header = () => (
  <AppBar position="static">
    <Typography component="div" align="center" py={2}>
      Blog Assistant
    </Typography>
  </AppBar>
);
