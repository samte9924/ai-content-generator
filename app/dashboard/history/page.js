"use client";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { Expand } from "lucide-react";

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

      <div className="grid grid-cols-3 md:grid-cols-7 gap-4 bg-gray-100 p-2 font-bold">
        <div className="md:col-span-2">Template</div>
        <div className="hidden md:block col-span-2">Risultato</div>
        <div>Data</div>
        <div className="hidden md:block">Parole</div>
        <div className="hidden md:block">Copia</div>
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
            <p className=" line-clamp-3">{item.aiResponse}</p>
          </div>
          <div className="p-2">{item.createdAt}</div>
          <div className="hidden md:block p-2">
            {item.aiResponse.split(" ").length}
          </div>
          <div className=" text-primary cursor-pointer flex justify-start">
            <Button
              variant="ghost"
              onClick={() => navigator.clipboard.writeText(item.aiResponse)}
              className="hidden md:block text-primary font-semibold text-md"
            >
              Copia
            </Button>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Expand className="w-5 h-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex justify-start">
                  Dettagli
                </DialogTitle>
                <DialogDescription className="flex justify-start text-gray-500">
                  ID: ${item.id}
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold">Template</h2>
                  <div className="flex gap-3 items-center">
                    <Image
                      src={getTemplate(item.templateSlug).icon}
                      alt="icon"
                      width={25}
                      height={25}
                    />
                    <div>{getTemplate(item.templateSlug).name}</div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {Object.keys(JSON.parse(item.formData)).map((key, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <h2 className="font-semibold">{key}</h2>
                      <div>{JSON.parse(item.formData)[key]}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold">Data</h2>
                  <div>{item.createdAt}</div>
                </div>
                <div>
                  <Button
                    onClick={() =>
                      navigator.clipboard.writeText(item.aiResponse)
                    }
                  >
                    Copia Risultato
                  </Button>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  );
}

export default History;
