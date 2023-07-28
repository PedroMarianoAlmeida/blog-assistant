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

export const generateSEO = async (title: string) => {
  //Temporary: No need to call open ai while handling UI

  // const [imageUrl, hashtags] = await Promise.all([
  //   await generateImage(title),
  //   await generateHashtags(title),
  // ]);
  return {
    imageUrl:
      "https://oaidalleapiprodscus.blob.core.windows.net/private/org-OKO2YcoQP4a0sXZ1wHpXPWPJ/user-W6zVmBCkIs5ggRlPNuEwWaZx/img-cq0uo2B25rPMrjAi0vt4dmgO.png?st=2023-07-28T03%3A41%3A37Z&se=2023-07-28T05%3A41%3A37Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-07-27T15%3A36%3A55Z&ske=2023-07-28T15%3A36%3A55Z&sks=b&skv=2021-08-06&sig=bkJfR0M5EcswaX0WW2Lo1Lr2jAbHPf8VWSdhiDCxSmo%3D",
    hashtags: ["Value1", "Value 2"],
  };
};
