import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "sonner";

function CopyButton({ content, variant, children }) {
  const handleClick = () => {
    navigator.clipboard.writeText(content);
    toast.success("Contenuto Copiato");
  };

  return (
    <Button variant={variant} onClick={() => handleClick()}>
      {children}
    </Button>
  );
}

export default CopyButton;
