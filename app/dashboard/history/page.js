"use client";
import Templates from "@/app/(data)/Templates";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CopyButton from "../_components/CopyButton";
import DetailsDialog from "./_components/DetailsDialog";
import ResultDialog from "./_components/ResultDialog";

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

      <div className="grid grid-cols-3 md:grid-cols-7 gap-4 bg-gray-100 p-2 font-bold">
        <div className="md:col-span-2">Template</div>
        <div className="hidden md:block col-span-2">Risultato</div>
        <div>Data</div>
        <div className="hidden md:block">Parole</div>
        <div className="md:hidden block">Espandi</div>
      </div>
      {history.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-4 md:grid-cols-7 gap-4 border-b p-2 hover:bg-gray-100"
        >
          <div className="p-2 flex gap-2 items-center md:col-span-2">
            <Image
              src={getTemplate(item.templateSlug).icon}
              alt="icon"
              width={25}
              height={25}
            />
            <div className="hidden md:block">
              {getTemplate(item.templateSlug).name}
            </div>
          </div>
          <div className="hidden md:block p-2 overflow-hidden col-span-2">
            <ResultDialog item={item} />
          </div>
          <div className="p-2">{item.createdAt}</div>
          <div className="hidden md:block p-2">
            {item.aiResponse.split(" ").length}
          </div>
          <div className=" text-primary cursor-pointer flex justify-start">
            <CopyButton content={item.aiResponse} variant={"ghost"}>
              Copia
            </CopyButton>
          </div>
          <div className="md:hidden block">
            <DetailsDialog
              item={item}
              template={getTemplate(item.templateSlug)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default History;
