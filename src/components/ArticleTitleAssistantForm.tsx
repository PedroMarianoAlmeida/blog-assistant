"use client";
import { useState, FormEvent } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { generateSEO } from "@/services/openAi";

export const ArticleTitleAssistantForm = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title);
    generateSEO();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        required
        id="outlined-required"
        label="Article Title"
        placeholder="How to be hanked in first page on Google"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button type="submit" variant="contained">
        Contained
      </Button>
    </form>
  );
};