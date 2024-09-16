import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Blocks,
  Handshake,
  LogIn,
  MessageCircleCode,
  PiggyBank,
  SlidersHorizontal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="w-full flex justify-between px-4 md:px-20 py-4 border-b shadow-sm">
        <Image src={"/logo.svg"} alt="logo" width={150} height={150} />
        <div className="border-l px-2 flex items-center">
          <Link href={"/dashboard"}>
            <Button
              variant="ghost"
              className="text-primary text-md flex gap-3 py-4 px-3"
            >
              <LogIn />
              Inizia Ora
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-[url('/background-pattern.svg')] ">
        <div className="max-w-[85rem] mx-auto px-4 pt-24 pb-10 bg-gradient-to-b from-transparent from-0% via-transparent via-70% to-white to-90%">
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="font-bold text-gray-700 text-4xl md:text-5xl lg:text-6xl">
              AI Content
              <span className="text-primary"> Generator</span>
            </h1>
          </div>
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600">
              Una potente applicazione che sfrutta l'IA per generare contenuti
              personalizzati in base alle proprie necessità in pochi secondi.
            </p>
          </div>
          <div className="mt-8  flex justify-center">
            <Link href={"/dashboard"}>
              <Button className="flex gap-3 py-7 px-5 text-md bg-gradient-to-br from-primary via-primary to-purple-500 hover:bg-gradient-to-br hover:from-primary hover:to-purple-500">
                Inizia Ora <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-5">
          <div className="flex flex-col h-full justify-between border shadow-sm p-5 rounded-lg">
            <div className="bg-primary size-12 rounded-lg flex items-center justify-center text-white">
              <Blocks width={24} height={24} />
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <h1 className="font-semibold">20+ Templates</h1>
              <p className="text-gray-500 text-sm font-semibold">
                Offre soluzioni di ogni tipo con un'interfaccia user-friendly.
              </p>
            </div>
            <p className="text-primary text-sm font-semibold underline mt-3">
              <Link href={"#"} className="flex gap-2 items-center">
                Scopri di più <ArrowRight className="h-5 w-5" />
              </Link>
            </p>
          </div>

          <div className="flex flex-col h-full justify-between border shadow-sm p-5 rounded-lg">
            <div className="bg-primary size-12 rounded-lg flex items-center justify-center text-white">
              <SlidersHorizontal width={24} height={24} />
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <h1 className="font-semibold">Personalizzazione</h1>
              <p className="text-gray-500 text-sm font-semibold">
                Componenti facilmente personalizzabili grazie all'editor
                integrato.
              </p>
            </div>
            <p className="text-primary text-sm font-semibold underline mt-3">
              <Link href={"#"} className="flex gap-2 items-center">
                Scopri di più <ArrowRight className="h-5 w-5" />
              </Link>
            </p>
          </div>

          <div className="flex flex-col h-full justify-between border shadow-sm p-5 rounded-lg">
            <div className="bg-primary size-12 rounded-lg flex items-center justify-center text-white">
              <PiggyBank width={24} height={24} />
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <h1 className="font-semibold">Piano Gratuito</h1>
              <p className="text-gray-500 text-sm font-semibold">
                Il piano gratuito offre permette di usare tutte le funzioni
                dell'app, ma con qualche limitazione.
              </p>
            </div>
            <p className="text-primary text-sm font-semibold underline">
              <Link href={"#"} className="flex gap-2 items-center mt-3">
                Scopri di più <ArrowRight className="h-5 w-5" />
              </Link>
            </p>
          </div>

          <div className="flex flex-col h-full justify-between border shadow-sm p-5 rounded-lg">
            <div className="bg-primary size-12 rounded-lg flex  items-center justify-center text-white">
              <Handshake width={24} height={24} />
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <h1 className="font-semibold">Supporto 24/7</h1>
              <p className="text-gray-500 text-sm font-semibold">
                Supporto gratuito ogni giorno per ogni evenienza.
              </p>
            </div>
            <p className="text-primary text-sm font-semibold underline mt-3">
              <Link href={"#"} className="flex gap-2 items-center">
                Scopri di più <ArrowRight className="h-5 w-5" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
