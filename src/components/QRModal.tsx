
import { useState, useEffect } from "react";
import QRCode from "qrcode";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

export const QRModal = ({ isOpen, onClose, url, title }: QRModalProps) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>("");

  useEffect(() => {
    if (isOpen && url) {
      QRCode.toDataURL(url, {
        width: 300,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      })
        .then(dataUrl => {
          setQrDataUrl(dataUrl);
        })
        .catch(err => {
          console.error('Error generating QR code:', err);
        });
    }
  }, [isOpen, url]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-center text-gray-800 mb-4">
            {title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center space-y-4">
          {qrDataUrl && (
            <img 
              src={qrDataUrl} 
              alt="QR Code" 
              className="border-2 border-gray-200 rounded-lg"
            />
          )}
          
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">
              Escanea el código QR para acceder a la presentación
            </p>
            <p className="text-xs text-gray-500 break-all">
              {url}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
