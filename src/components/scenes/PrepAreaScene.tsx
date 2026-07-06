import { getMaterialsByArea } from '../../data/materials';
import MaterialHotspot from '../MaterialHotspot';

interface SceneProps {
  selectedItems: Set<string>;
  onToggleMaterial: (id: string) => void;
}

export default function PrepAreaScene({ selectedItems, onToggleMaterial }: SceneProps) {
  const materials = getMaterialsByArea('prep');

  return (
    <section className="store-scene prep-scene" aria-label="备料区">
      <div className="tile-wall" />
      <div className="drawer-tower">
        <div className="drawer-frame" />
        <div className="drawer-bin bin-a" />
        <div className="drawer-bin bin-b" />
        <div className="drawer-bin bin-c" />
      </div>
      <div className="main-shelf">
        <div className="top-cups" />
        <div className="shelf-board board-a" />
        <div className="shelf-board board-b" />
        <div className="shelf-board board-c" />
        <div className="shelf-leg left" />
        <div className="shelf-leg right" />
      </div>
      <div className="red-bin">
        <div className="bin-lip" />
      </div>
      <div className="narrow-shelf">
        <div className="narrow-board top" />
        <div className="narrow-board middle" />
        <div className="narrow-board bottom" />
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
