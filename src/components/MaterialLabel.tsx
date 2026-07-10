import type { MaterialItem, SceneMaterialLayout } from '../types';

interface MaterialLabelProps {
  item: MaterialItem;
  layout: SceneMaterialLayout;
  selected: boolean;
}

export default function MaterialLabel({ item, layout, selected }: MaterialLabelProps) {
  return (
    <span
      className={`material-label ${selected ? 'is-selected' : ''}`}
      style={{
        left: `${layout.labelX}%`,
        top: `${layout.labelY}%`,
        zIndex: (layout.zIndex ?? 1) + 50,
      }}
    >
      {item.name}
    </span>
  );
}
