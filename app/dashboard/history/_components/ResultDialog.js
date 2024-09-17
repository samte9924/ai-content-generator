import React from "react";
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
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import OutputEditor from "../../content/_components/OutputEditor";
import CopyButton from "../../_components/CopyButton";

function ResultDialog({ item }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <SquareArrowOutUpRight />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="flex justify-start">Risultato</DialogTitle>
          <DialogDescription className="flex justify-start text-gray-500">
            ID: ${item.id}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <OutputEditor initialContent={item.aiResponse} editable={false} />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <div className="flex gap-3">
              <CopyButton content={item.aiResponse}>Copia</CopyButton>
              <Button type="button" variant="outline">
                Chiudi
              </Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ResultDialog;
