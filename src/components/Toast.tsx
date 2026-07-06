import { useEffect } from 'react';

interface ToastProps {
  message: string;
  onDone: () => void;
}

export default function Toast({ message, onDone }: ToastProps) {
  useEffect(() => {
    if (!message) {
      return;
    }

    const timer = window.setTimeout(onDone, 1800);
    return () => window.clearTimeout(timer);
  }, [message, onDone]);

  if (!message) {
    return null;
  }

  return <div className="toast">{message}</div>;
}
