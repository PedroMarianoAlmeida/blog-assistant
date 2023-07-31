import { ReactNode } from "react";
import Box from "@mui/material/Box";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <Box display="flex" justifyContent="center" mt={4}>
    {children}
  </Box>
);

export default AuthLayout;
