import type { MaterialItem, SceneMaterialLayout } from '../types';

interface MaterialHotspotProps {
  item: MaterialItem;
  layout: SceneMaterialLayout;
  selected: boolean;
  onToggle: (id: string) => void;
}

export default function MaterialHotspot({ item, layout, selected, onToggle }: MaterialHotspotProps) {
  return (
    <button
      type="button"
      className={`material-hotspot ${selected ? 'is-selected' : ''}`}
      style={{
        left: `${layout.x}%`,
        top: `${layout.y}%`,
        width: `${layout.width}%`,
        height: `${layout.height}%`,
        zIndex: (layout.zIndex ?? 1) + 40,
      }}
      data-material-id={item.id}
      aria-label={`${selected ? '取消选择' : '选择'}${item.name}`}
      aria-pressed={selected}
      onClick={() => onToggle(item.id)}
    />
  );
}
