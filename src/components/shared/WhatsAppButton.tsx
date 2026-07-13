import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/lib/constants';

interface WhatsAppButtonProps {
  message: string;
  label?: string;
  variant?: 'primary' | 'whatsapp' | 'outline';
  size?: 'default' | 'large';
  className?: string;
}

export default function WhatsAppButton({
  message,
  label = 'Falar no WhatsApp',
  variant = 'whatsapp',
  size = 'default',
  className = '',
}: WhatsAppButtonProps) {
  const baseClasses =
    variant === 'whatsapp'
      ? 'btn-whatsapp'
      : variant === 'primary'
        ? 'btn-primary'
        : 'btn-outline';

  const sizeClasses =
    size === 'large' ? 'px-8 py-4 text-base' : '';

  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${sizeClasses} ${className}`}
      aria-label={`${label} via WhatsApp`}
    >
      <MessageCircle className="h-4.5 w-4.5" />
      {label}
    </a>
  );
}
