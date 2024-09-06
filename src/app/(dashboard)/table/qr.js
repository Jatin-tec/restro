import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScanQrCode } from "lucide-react";

import { QRCodeSVG } from "qrcode.react";

export default function QrDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <ScanQrCode />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Table 4</DialogTitle>
          <DialogDescription>
            You can generate and Download QR code (Note: Once genrated it can
            not be changed)
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center w-full h-full my-4 border-dashed border-2">
          <QRCodeSVG
            value="https://tacoza.co/sagar-gaire/table/4"
            size={150} // Size of the QR Code
            className="w-40 h-40" // Adjusted width and height
          />
          <p className="text-2xl font-bold">Sagar Gaire</p>
          <p className="text-lg font-bold">Table - 4 Inside</p>
        </div>
        <Button className="mt-4">Download QR</Button>
      </DialogContent>
    </Dialog>
  );
}
