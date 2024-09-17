"use client";
import "./EditorStyles/atom-one-dark.css";
import "./EditorStyles/editor.css";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { createLowlight, all } from "lowlight";
import React, { useEffect } from "react";
import { marked } from "marked";

function OutputEditor({ initialContent, editable }) {
  const lowlight = createLowlight(all);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      CodeBlockLowlight.configure({ lowlight }),
    ],
    content: initialContent,
    onUpdate: ({ editor }) => {
      console.log(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "focus:outline-gray-200 max-h-[600px] overflow-auto",
      },
    },
    immediatelyRender: false,
    editable,
  });

  useEffect(() => {
    if (editor && initialContent) {
      const convertedHtml = marked(initialContent);
      editor.commands.setContent(convertedHtml);
    }
  }, [initialContent, editor]);

  return <EditorContent editor={editor} />;
}

export default OutputEditor;
