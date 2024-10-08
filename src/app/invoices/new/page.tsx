"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { createAction } from "@/app/actions";

import { SyntheticEvent, useState } from "react";

import { LoaderCircle } from "lucide-react";

const NewInvoice = () => {
  const [status, setstatus] = useState("ready");

  const handleOnSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (status === "pending") return;
    setstatus("pending");

    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    await createAction(formData);
  };

  return (
    <main className="flex flex-col justify-center h-full  max-w-5xl mx-auto gap-6 my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Create Invoice</h1>
      </div>

      <form
        action={createAction}
        onSubmit={handleOnSubmit}
        className="flex flex-col gap-4 max-w-xs"
      >
        <div>
          <Label htmlFor="name" className="block mb-2 font-semibold text-sm">
            Billing Name
          </Label>
          <Input id="name" name="name" type="text" />
        </div>
        <div>
          <Label htmlFor="email" className="block mb-2 font-semibold text-sm">
            Billing Email
          </Label>
          <Input id="email" name="email" type="email" />
        </div>
        <div>
          <Label htmlFor="value" className="block mb-2 font-semibold text-sm">
            Value
          </Label>
          <Input id="value" name="value" type="text" />
        </div>
        <div>
          <Label
            htmlFor="description"
            className="block mb-2 font-semibold text-sm"
          >
            Description
          </Label>
          <Textarea id="description" name="description" />
        </div>
        <div>
          {status === "pending" ? (
            <Button className="w-full font-semibold disabled:cursor-not-allowed bg-gray-300">
              <LoaderCircle className="animate-spin" />
            </Button>
          ) : (
            <Button className="w-full font-semibold">Submit</Button>
          )}
        </div>
      </form>
    </main>
  );
};

export default NewInvoice;
