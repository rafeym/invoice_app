import { sql } from "drizzle-orm";
import { db } from "@/db";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const NewInvoice = async () => {
  const results = await db.execute(sql`SELECT current_database()`);
  console.log(results);
  return (
    <main className="flex flex-col justify-center h-full  max-w-5xl mx-auto gap-6 my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Create Invoice</h1>
      </div>

      {JSON.stringify(results)}

      <form className="flex flex-col gap-4 max-w-xs">
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
          <Input id="value" name="value" type="number" />
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
          <Button className="w-full font-semibold">Submit</Button>
        </div>
      </form>
    </main>
  );
};

export default NewInvoice;
