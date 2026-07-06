import { getMaterialsByArea } from '../../data/materials';
import MaterialHotspot from '../MaterialHotspot';

interface SceneProps {
  selectedItems: Set<string>;
  onToggleMaterial: (id: string) => void;
}

export default function FrontCounterScene({ selectedItems, onToggleMaterial }: SceneProps) {
  const materials = getMaterialsByArea('front');

  return (
    <section className="store-scene front-scene" aria-label="前台区">
      <div className="shop-depth">
        <div className="glass-door" />
        <div className="window-panel left" />
        <div className="window-panel right" />
      </div>
      <div className="counter counter-front">
        <div className="countertop" />
        <div className="cabinet-line upper" />
        <div className="cabinet-line lower" />
        <div className="cabinet-door door-a" />
        <div className="cabinet-door door-b" />
        <div className="cabinet-door door-c" />
      </div>
      <div className="rack straw-rack">
        <div className="rack-title">吸管 / 杯盖架</div>
        <div className="shelf-line" />
      </div>
      <div className="rack cup-rack">
        <div className="rack-title">杯子架</div>
        <div className="cup-divider one" />
        <div className="cup-divider two" />
        <div className="cup-divider three" />
      </div>
      <div className="rack bag-rack">
        <div className="rack-title">包装袋架</div>
        <div className="bag-hook a" />
        <div className="bag-hook b" />
        <div className="bag-hook c" />
      </div>
      <div className="napkin-box" />
      <div className="side-stand" />
      <div className="under-storage warm" />
      <div className="under-storage trays" />
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
