"use client";

import { useAuth } from "@clerk/clerk-react";

import Link from "next/link";
import Button from "@mui/material/Button";

const CallToAction = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn)
    return (
      <Link href="/dashboard">
        <Button variant="contained">Go to dashboard</Button>
      </Link>
    );

  return (
    <>
      <Link href="/sign-in">
        <Button variant="contained">Sign In</Button>
      </Link>
      <Link href="/sign-up">
        <Button variant="outlined">Sign Up</Button>
      </Link>
    </>
  );
};

export default CallToAction;
