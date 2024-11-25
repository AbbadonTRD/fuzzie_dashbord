import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/(corina)/ui/dialog";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

type Props = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title: string;
  description: string;
  type?: "Integration";
  logo?: string;
};

const Modal = ({
  trigger,
  children,
  title,
  description,
  type,
}: // logo,
Props) => {
  switch (type) {
    case "Integration":
      return (
        <Dialog>
          <DialogTrigger asChild>{trigger}</DialogTrigger>
          <DialogContent>
            <div className="flex justify-center gap-3">
              <div className="w-12 h-5 relative">
                <Image src={`/images/corinna-ai-logo.png`} fill alt="Corinna" />
              </div>
              <div className="text-gray-400 flex">
                <ArrowLeft size={20} />
                <ArrowRight size={20} />
              </div>
              <div className="w-8 h-5 relative">
                <Image
                  src={`/images/creditcard.png`}
                  fill
                  alt="Stripe"
                  className=""
                />
              </div>
            </div>
            <DialogHeader className="flex items-center">
              <DialogTitle className="text-xl">{title}</DialogTitle>
              <DialogDescription className=" text-center">
                {description}
              </DialogDescription>
            </DialogHeader>
            {children}
          </DialogContent>
        </Dialog>
      );
    default:
      return (
        <Dialog>
          <DialogTrigger asChild>{trigger}</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-xl">{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            {children}
          </DialogContent>
        </Dialog>
      );
  }
};

export default Modal;
