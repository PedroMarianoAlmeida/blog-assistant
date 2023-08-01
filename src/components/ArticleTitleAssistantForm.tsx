"use client";
import { useState, FormEvent } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { generateSEO } from "@/services/openAi";
import { SeoResponseData } from "@/types/openAiResponse";
import { CreateImageRequestSizeEnum } from "openai";

export interface ArticleTitleAssistantFormProps {
  setSeoResponseData: (data: SeoResponseData) => void;
}

export const ArticleTitleAssistantForm = ({
  setSeoResponseData,
}: ArticleTitleAssistantFormProps) => {
  const [title, setTitle] = useState("");
  const [imageResolution, setImageResolution] =
    useState<CreateImageRequestSizeEnum>("256x256");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSeoResponseData({
      loading: true,
      imageUrl: "",
      hashtags: [],
      error: false,
      usage: 0
    });
    const { imageUrl, hashtags, error, usage } = await generateSEO(
      title,
      imageResolution
    );
    setSeoResponseData({ loading: false, imageUrl, hashtags, error, usage });
  };

  const handleResolutionChange = (event: SelectChangeEvent) => {
    setImageResolution(event.target.value as CreateImageRequestSizeEnum);
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
      <Typography variant="subtitle1" gutterBottom>
        Provide an article title and I will create an image and hashtags for
        your article
      </Typography>

      <InputLabel id="article-title">Article Title</InputLabel>
      <TextField
        required
        id="article-title"
        label="Article Title"
        placeholder="How to be ranked in first page on Google"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />

      <InputLabel id="image-resolution">Image Resolution</InputLabel>
      <Select
        labelId="image-resolution"
        id="demo-simple-select"
        value={imageResolution}
        label="Age"
        onChange={handleResolutionChange}
      >
        <MenuItem value={"256x256"}>256x256</MenuItem>
        <MenuItem value={"512x512"}>512x512</MenuItem>
        <MenuItem value={"1024x1024"}>1024x1024</MenuItem>
      </Select>
      <Button type="submit" variant="contained">
        Create Data
      </Button>
    </Box>
  );
};
