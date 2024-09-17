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
import { Expand } from "lucide-react";
import Image from "next/image";
import CopyButton from "../../_components/CopyButton";

function DetailsDialog({ item, template }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Expand className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex justify-start">Dettagli</DialogTitle>
          <DialogDescription className="flex justify-start text-gray-500">
            ID: ${item.id}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold">Template</h2>
            <div className="flex gap-3 items-center">
              <Image src={template.icon} alt="icon" width={25} height={25} />
              <div>{template.name}</div>
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
            <CopyButton>Copia Risultato</CopyButton>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Chiudi
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DetailsDialog;
