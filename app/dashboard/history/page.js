"use client";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function History() {
  const [history, setHistory] = useState([]);

  const fetchData = async () => {
    const data = await db.select().from(AIOutput);
    setHistory(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getTemplate = (slug) => {
    return Templates.find((item) => item.slug === slug);
  };

  return (
    <div className="bg-white p-5 m-5 rounded-lg shadow-sm border">
      <h2 className="font-bold text-3xl mb-4">Cronologia</h2>
      <p className="text-gray-500 mb-7">Cerca tra le tue attività</p>

      <div className="grid grid-cols-7 gap-4 bg-gray-100 p-2 font-bold">
        <div className="col-span-2">Template</div>
        <div className="col-span-2">AI Response</div>
        <div>Date</div>
        <div>Words</div>
        <div>Copy</div>
      </div>
      {history.map((item, index) => (
        <div key={index} className="grid grid-cols-7 gap-4 border-b p-2">
          <div className="p-2 flex gap-2 items-center col-span-2">
            <Image
              src={getTemplate(item.templateSlug).icon}
              alt="icon"
              width={25}
              height={25}
            />
            <div>{getTemplate(item.templateSlug).name}</div>
          </div>
          <div className="p-2 overflow-hidden col-span-2">
            <p className=" line-clamp-3">{item.aiResponse}</p>
          </div>
          <div className="p-2">{item.createdAt}</div>
          <div className="p-2">{item.aiResponse.split(" ").length}</div>
          <div className=" text-primary cursor-pointer flex justify-start">
            <Button
              variant="ghost"
              onClick={() => navigator.clipboard.writeText(item.aiResponse)}
              className="text-primary font-semibold text-md"
            >
              Copia
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default History;
