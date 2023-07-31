"use client";

import { useState } from "react";

import { ArticleTitleAssistantForm } from "@/components/ArticleTitleAssistantForm";
import { SeoResponseData } from "@/types/openAiResponse";
import { GeneratedSEO } from "@/components/GeneratedSEO";

const Dashboard = () => {
    const [seoResponseData, setSeoResponseData] = useState<SeoResponseData>({
        loading: false,
        imageUrl: "",
        hashtags: [],
        error: false,
      });
    
      return (
        <main>       
          <ArticleTitleAssistantForm setSeoResponseData={setSeoResponseData} />
          <GeneratedSEO seoResponseData={seoResponseData} />
        </main>
      );
};

export default Dashboard;
