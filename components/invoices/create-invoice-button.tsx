"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { CreateInvoiceForm } from "./create-invoice-form";
import { useRouter } from "next/navigation";


export function CreateInvoiceButton() {
   const router = useRouter();

  const handleNavigate = () => {
    router.push("/dashboard/invoices/create-invoice-form");
  };
  return (
    <Button onClick={handleNavigate}>
      <Plus className="mr-2 h-4 w-4" />
      Create Invoice
    </Button>
    // <Dialog>
    //   <DialogTrigger asChild>
    //     <Button>
    //       <Plus className="mr-2 h-4 w-4" />
    //       Create Invoice
    //     </Button>
    //   </DialogTrigger>
    //   <DialogContent className="sm:max-w-[600px]">
    //     <DialogHeader>
    //       <DialogTitle>Create New Invoice</DialogTitle>
    //       <DialogDescription>
    //         Create a new invoice for your customer. Fill in all the required information.
    //       </DialogDescription>
    //     </DialogHeader>
    //     <CreateInvoiceForm />
    //   </DialogContent>
    // </Dialog>
  );
}