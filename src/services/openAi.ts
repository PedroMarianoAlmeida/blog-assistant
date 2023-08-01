"use server";

import { Configuration, OpenAIApi, CreateImageRequestSizeEnum } from "openai";

import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openAi = new OpenAIApi(configuration);

const generateImage = async (
  title: string,
  imageResolution: CreateImageRequestSizeEnum
) => {
  const response: any = await openAi.createImage({
    prompt: title,
    n: 1,
    size: imageResolution,
  });

  const imageUrl = response.data.data[0].url as string;
  return imageUrl;
};

const generateHashtags = async (title: string) => {
  const response: any = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You will work as a SEO assistant, providing the best hashtags for my text, please provide only the hashtags without any other text. Each hashtag should have a own # symbol, and separate with a single space",
      },
      { role: "user", content: title },
    ],
  });

  const rawTextAnswer = response.data.choices[0].message.content as string;
  const hashtags = rawTextAnswer.split(" ");

  return hashtags;
};

export const generateSEO = async (
  title: string,
  imageResolution: CreateImageRequestSizeEnum
) => {
  try {
    const usage = await checkApiLimit();
    if (usage > 3) throw new Error('"Free trial has expired".');

    const [imageUrl, hashtags] = await Promise.all([
      await generateImage(title, imageResolution),
      await generateHashtags(title),
    ]);

    await increaseApiLimit();

    return {
      imageUrl,
      hashtags,
      error: false,
    };
  } catch (e) {
    return {
      imageUrl: "",
      hashtags: [],
      error: true,
    };
  }
};
