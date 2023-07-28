"use client";

import { useState } from "react";

import { ArticleTitleAssistantForm } from "@/components/ArticleTitleAssistantForm";
import { SeoResponseData } from "@/types/openAiResponse";

export default function Home() {
  const [seoResponseData, setSeoResponseData] =
    useState<SeoResponseData | null>(null);

  console.log(seoResponseData);

  return (
    <main>
      <ArticleTitleAssistantForm setSeoResponseData={setSeoResponseData} />
    </main>
  );
}
