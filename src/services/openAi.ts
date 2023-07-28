"use server";

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openAi = new OpenAIApi(configuration);

const generateImage = async () => {
  const response = await openAi.createImage({
    prompt: "A cute baby sea otter",
    n: 2,
    size: "1024x1024",
  });

  console.log(response);
};

export const generateSEO = async () => {
  generateImage();
};
