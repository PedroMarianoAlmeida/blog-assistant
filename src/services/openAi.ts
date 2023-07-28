"use server";

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openAi = new OpenAIApi(configuration);

const generateImage = async (title: string) => {
  const response: any = await openAi.createImage({
    prompt: title,
    n: 1,
    size: "1024x1024",
  });

  const imageUrl = response.data.data[0].url as string;
  return imageUrl
};

export const generateSEO = async (title: string) => {
  const imageUrl = await generateImage(title);
  return { imageUrl };
};
