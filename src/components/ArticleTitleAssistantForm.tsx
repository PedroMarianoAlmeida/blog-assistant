"use client";
import { useState, FormEvent } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { generateSEO } from "@/services/openAi";
import { SeoResponseData } from "@/types/openAiResponse";

export interface ArticleTitleAssistantFormProps {
  setSeoResponseData: (data: SeoResponseData | null) => void;
}

export const ArticleTitleAssistantForm = ({
  setSeoResponseData,
}: ArticleTitleAssistantFormProps) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSeoResponseData({ loading: true, imageUrl: "" });
    const { imageUrl } = await generateSEO(title);
    setSeoResponseData({ loading: false, imageUrl });
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
