import { ClipboardList } from 'lucide-react';

interface FloatingGenerateButtonProps {
  onClick: () => void;
}

export default function FloatingGenerateButton({ onClick }: FloatingGenerateButtonProps) {
  return (
    <button type="button" className="generate-button" onClick={onClick}>
      <ClipboardList size={18} strokeWidth={2.4} />
      <span>生成缺货表</span>
    </button>
  );
}
