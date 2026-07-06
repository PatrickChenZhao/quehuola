import type { MaterialItem } from '../types';

interface MaterialHotspotProps {
  item: MaterialItem;
  selected: boolean;
  onToggle: (id: string) => void;
}

export default function MaterialHotspot({ item, selected, onToggle }: MaterialHotspotProps) {
  const labelPosition = item.layout.label ?? 'bottom';

  return (
    <button
      type="button"
      className={`material-hotspot label-${labelPosition} ${selected ? 'selected' : ''}`}
      style={{
        left: `${item.layout.x}%`,
        top: `${item.layout.y}%`,
        width: `${item.layout.w}%`,
        height: `${item.layout.h}%`,
      }}
      aria-pressed={selected}
      onClick={() => onToggle(item.id)}
    >
      <span className={`material-visual shape-${item.shape}`} aria-hidden="true">
        <span className="shine" />
      </span>
      <span className="material-label">{item.name}</span>
    </button>
  );
}
