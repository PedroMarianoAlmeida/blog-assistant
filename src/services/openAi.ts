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
  return imageUrl;
};

const completion = async () => {
  const response: any = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Hello world" },
    ],
  });

  const rawTextAnswer = response.data.choices[0].message.content;

  console.log({ rawTextAnswer });
};

export const generateSEO = async (title: string) => {
  //const imageUrl = await generateImage(title);
  const imageUrl = "Temporary - not run out my credits =S";
  const hastags = await completion();
  return { imageUrl };
};
