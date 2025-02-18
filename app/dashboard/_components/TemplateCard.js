import Image from "next/image";
import Link from "next/link";
import React from "react";

function TemplateCard(template) {
  return (
    <Link href={`/dashboard/content/${template.slug}`}>
      <div className="p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all w-full h-full">
        <Image src={template.icon} alt="icon" width={50} height={50} />
        <h2 className="font-medium text-lg overflow-ellipsis overflow-hidden">
          {template.name}
        </h2>
        <p className="text-gray-500 line-clamp-3">{template.desc}</p>
      </div>
    </Link>
  );
}

export default TemplateCard;
