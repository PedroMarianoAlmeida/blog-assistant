"use client";
import { useState, FormEvent } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import { generateSEO } from "@/services/openAi";
import { SeoResponseData } from "@/types/openAiResponse";

export interface ArticleTitleAssistantFormProps {
  setSeoResponseData: (data: SeoResponseData) => void;
}

export const ArticleTitleAssistantForm = ({
  setSeoResponseData,
}: ArticleTitleAssistantFormProps) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSeoResponseData({ loading: true, imageUrl: "", hashtags: [] });
    const { imageUrl, hashtags } = await generateSEO(title);
    setSeoResponseData({ loading: false, imageUrl, hashtags });
  };

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      alignItems="center"
      onSubmit={handleSubmit}
      my={3}
      gap={1}
      mx={4}
    >
      <TextField
        required
        id="outlined-required"
        label="Article Title"
        placeholder="How to be ranked in first page on Google"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained">
        Create Data
      </Button>
    </Box>
  );
};
