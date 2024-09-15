"use client";
import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

function OutputSection({ aiOutput }) {
  const editorRef = useRef();

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
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
      <Editor
        ref={editorRef}
        initialValue="Il tuo risultato apparirà qui!"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current?.getInstance().getMarkdown())
        }
      />
    </div>
  );
}

export default OutputSection;
