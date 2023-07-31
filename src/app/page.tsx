"use client";

import Link from "next/link";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <main>
      <h1>Landing Page</h1>
      <Link href="/sign-in">
        <Button variant="contained">Sign In</Button>
      </Link>
      <Link href="/sign-up">
        <Button variant="contained">Sign Up</Button>
      </Link>
    </main>
  );
}
