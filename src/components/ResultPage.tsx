import { ArrowLeft, Copy } from 'lucide-react';
import { AREA_ORDER, getAreaById } from '../data/materials';
import type { MaterialItem } from '../types';
import ResultTable from './ResultTable';

interface ResultPageProps {
  materials: MaterialItem[];
  onRemove: (id: string) => void;
  onBack: () => void;
  onCopied: () => void;
}

function buildCopyText(materials: MaterialItem[]) {
  if (materials.length === 0) {
    return '啥也不缺';
  }

  const lines = AREA_ORDER.flatMap((areaId) => {
    const areaMaterials = materials.filter((item) => item.area === areaId);
    if (areaMaterials.length === 0) {
      return [];
    }
    return [`${getAreaById(areaId).name}：${areaMaterials.map((item) => item.name).join('、')}`];
  });

  return ['缺货清单：', ...lines].join('\n');
}

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.left = '-999px';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

export default function ResultPage({ materials, onRemove, onBack, onCopied }: ResultPageProps) {
  const handleCopy = async () => {
    await copyText(buildCopyText(materials));
    onCopied();
  };

  return (
    <section className="result-page">
      <div className="result-card">
        <div className="result-head">
          <div>
            <p className="result-eyebrow">缺货啦</p>
            <h1>缺货清单</h1>
          </div>
          <button type="button" className="result-back icon-button" onClick={onBack} aria-label="返回继续修改">
            <ArrowLeft size={18} strokeWidth={2.4} />
            <span>返回继续修改</span>
          </button>
        </div>

        {materials.length > 0 ? (
          <ResultTable materials={materials} onRemove={onRemove} />
        ) : (
          <div className="empty-state">
            <h2>啥也不缺</h2>
            <p>今天物料很充足</p>
          </div>
        )}

        <div className="result-actions">
          <button type="button" className="copy-button" onClick={handleCopy}>
            <Copy size={18} strokeWidth={2.4} />
            <span>复制文字版本</span>
          </button>
          <button type="button" className="secondary-button" onClick={onBack}>
            返回继续修改
          </button>
        </div>
      </div>
    </section>
  );
}
