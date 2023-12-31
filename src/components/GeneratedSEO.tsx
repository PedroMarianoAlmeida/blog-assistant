import Image from "next/image";
import Box from "@mui/material/Box";

import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

import { SeoResponseData } from "@/types/openAiResponse";

const imageSize = 500;

interface SeoResponseDataProps {
  seoResponseData: SeoResponseData;
}

export const GeneratedSEO = ({ seoResponseData }: SeoResponseDataProps) => {
  const { loading, imageUrl, hashtags, error, usage } = seoResponseData;

  if (error)
    return (
      <Box component="section" display="flex" justifyContent="center" gap={2}>
        <Typography variant="subtitle1" gutterBottom>
          {error === "Free trial has expired"
            ? "Free trial has expired, try again tomorrow"
            : "Something went wrong, try again later"}
        </Typography>
      </Box>
    );

  const shouldRender = loading || imageUrl !== "" || hashtags.length > 0;
  if (!shouldRender) return null;

  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
    >
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
      <Box display="flex" flexDirection="row" gap={1}>
        <Typography variant="subtitle1" gutterBottom>
          Hashtags:
        </Typography>
        {loading
          ? [1, 2, 3].map((key) => (
              <Skeleton
                variant="rounded"
                width={Math.random() * 40 + 50}
                height={30}
                key={key}
              />
            ))
          : hashtags.map((hashtag) => <Chip label={hashtag} key={hashtag} />)}
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography variant="subtitle1" gutterBottom>
          Usage:{" "}
        </Typography>
        {loading ? (
          <Skeleton variant="rounded" width={15} height={30} />
        ) : (
          usage
        )}
        <Typography>/3</Typography>
      </Box>
    </Box>
  );
};
