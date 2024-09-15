"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function FormSection({ selectedTemplate, userFormInput, loading }) {
  const [formData, setFormData] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <div className="p-5 shadow-lg border rounded-lg bg-white">
      <Image src={selectedTemplate?.icon} alt="icon" width={70} height={70} />
      <h2 className="font-bold text-2xl mt-4 mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 taxt-sm">{selectedTemplate.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate.form.map((item, index) => (
          <div key={index} className="mt-2 mb-7 flex flex-col gap-2">
            <label className="font-bold">{item.label}</label>
            {item.field === "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : item.field === "textarea" ? (
              <Textarea
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}
        <Button type="submit" disabled={loading} className="w-full py-6">
          {loading ? <Loader2Icon className="animate-spin" /> : "Genera"}
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
