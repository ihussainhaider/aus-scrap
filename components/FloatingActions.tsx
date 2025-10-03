import { Phone, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export function FloatingActions() {
  const handleCall = () => {
    window.open('tel:+61234567890', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/61234567890?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20your%20scrap%20metal%20services', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <Button
        onClick={handleWhatsApp}
        size="lg"
        className="rounded-full h-14 w-14 bg-green-500 hover:bg-green-600 text-white shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      <Button
        onClick={handleCall}
        size="lg"
        className="rounded-full h-14 w-14 bg-blue-500 hover:bg-blue-600 text-white shadow-lg"
      >
        <Phone className="h-6 w-6" />
      </Button>
    </div>
  );
}