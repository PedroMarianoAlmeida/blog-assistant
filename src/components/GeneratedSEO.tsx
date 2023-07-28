import Image from "next/image";

import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

import { SeoResponseData } from "@/types/openAiResponse";

interface SeoResponseDataProps {
  seoResponseData: SeoResponseData;
}

export const GeneratedSEO = ({ seoResponseData }: SeoResponseDataProps) => {
  const { loading, imageUrl, hashtags } = seoResponseData;

  return (
    <section>
      <Typography variant="subtitle1" gutterBottom>
        Image
      </Typography>
      <Image src={imageUrl} width={500} height={500} alt="AI Generated Image" />

      <Typography variant="subtitle1" gutterBottom>
        Hashtags
      </Typography>
      {hashtags.map((hashtag) => (
        <Chip label={hashtag} key={hashtag} />
      ))}
    </section>
  );
};
