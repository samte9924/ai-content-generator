"use client";
import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import Templates from "@/app/(data)/Templates";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { chatSession } from "@/utils/aiModel";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment/moment";

function CreateNewContent(props) {
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState();

  const { user } = useUser();

  const selectedTemplate = Templates?.find((item) => {
    return item.slug === props.params["template-slug"];
  });

  const generateAIResponse = async (formData) => {
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;

    const finalAIPrompt = JSON.stringify(formData) + ", " + selectedPrompt;
    const result = await chatSession.sendMessage(finalAIPrompt);

    setAiOutput(result?.response.text());
    await saveToDatabase(
      formData,
      result?.response.text(),
      selectedTemplate.slug
    );
    setLoading(false);
  };

  const saveToDatabase = async (formData, aiResponse, slug) => {
    const result = await db.insert(AIOutput).values({
      formData: formData,
      aiResponse: aiResponse,
      templateSlug: slug,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD/MM/yyyy"),
    });

    console.log(result);
  };

  return (
    <div className="p-8">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={generateAIResponse}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
