"use client";

import { useState } from "react";

import { ArticleTitleAssistantForm } from "@/components/ArticleTitleAssistantForm";
import { SeoResponseData } from "@/types/openAiResponse";
import { GeneratedSEO } from "@/components/GeneratedSEO";

export default function Home() {
  const [seoResponseData, setSeoResponseData] = useState<SeoResponseData>({
    loading: true,
    imageUrl: "",
    hashtags: [],
  });

  return (
    <main>
      <ArticleTitleAssistantForm setSeoResponseData={setSeoResponseData} />
      <GeneratedSEO seoResponseData={seoResponseData} />
    </main>
  );
}
