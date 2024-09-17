"use client";
import React from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import OutputEditor from "./OutputEditor";

function OutputSection({ aiOutput }) {
  return (
    <div className="bg-white shadow-lg border rounded-lg ">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Risultato</h2>
        <Button
          onClick={() => navigator.clipboard.writeText()}
          className="flex gap-2"
        >
          <Copy className="w-4 h-4" />
          Copia
        </Button>
      </div>
      <OutputEditor initialContent={aiOutput ?? ""} editable={true} />
    </div>
  );
}

export default OutputSection;
