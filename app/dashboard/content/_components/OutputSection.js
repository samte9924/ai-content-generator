"use client";
import React, { useEffect, useRef } from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

function OutputSection({ aiOutput }) {
  const editorRef = useRef();

  useEffect(() => {
    editorRef.current = aiOutput;
  }, [aiOutput]);

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Risultato</h2>
        <Button
          onClick={() => navigator.clipboard.writeText(aiOutput)}
          className="flex gap-2"
        >
          <Copy className="w-4 h-4" />
          Copia
        </Button>
      </div>
      <Textarea
        ref={editorRef}
        onChange={() => console.log(editorRef.current)}
      />
    </div>
  );
}

export default OutputSection;
