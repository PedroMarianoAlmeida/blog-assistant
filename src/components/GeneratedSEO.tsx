import Image from "next/image";

import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

import { SeoResponseData } from "@/types/openAiResponse";

const imageSize = 500;

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

      {loading ? (
        <Skeleton variant="rounded" width={imageSize} height={imageSize} />
      ) : (
        <Image
          src={imageUrl}
          width={imageSize}
          height={imageSize}
          alt="AI Generated Image"
        />
      )}

      <Typography variant="subtitle1" gutterBottom>
        Hashtags
      </Typography>
      {loading
        ? [1, 2, 3].map(() => (
            <Skeleton
              variant="rounded"
              width={Math.random() * 40 + 50}
              height={30}
            />
          ))
        : hashtags.map((hashtag) => <Chip label={hashtag} key={hashtag} />)}
    </section>
  );
};
