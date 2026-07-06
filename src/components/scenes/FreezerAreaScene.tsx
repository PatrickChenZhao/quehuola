import { getMaterialsByArea } from '../../data/materials';
import MaterialHotspot from '../MaterialHotspot';

interface SceneProps {
  selectedItems: Set<string>;
  onToggleMaterial: (id: string) => void;
}

export default function FreezerAreaScene({ selectedItems, onToggleMaterial }: SceneProps) {
  const materials = getMaterialsByArea('freezer');

  return (
    <section className="store-scene freezer-scene" aria-label="冰柜区">
      <div className="cold-wall" />
      <div className="freezer-unit double-freezer">
        <div className="metal-header">冷冻柜</div>
        <div className="freezer-door left-door" />
        <div className="freezer-door right-door" />
        <div className="grid-zone top-zone" />
        <div className="grid-zone bottom-zone" />
      </div>
      <div className="freezer-unit single-freezer">
        <div className="metal-header">冷藏柜</div>
        <div className="freezer-door full-door" />
        <div className="grid-zone top-zone" />
        <div className="grid-zone bottom-zone" />
      </div>
      {materials.map((item) => (
        <MaterialHotspot
          key={item.id}
          item={item}
          selected={selectedItems.has(item.id)}
          onToggle={onToggleMaterial}
        />
      ))}
    </section>
  );
}
