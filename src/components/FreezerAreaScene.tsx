import { getMaterialsByArea } from '../data/materials';
import { SCENE_BACKGROUNDS } from '../data/sceneLayouts';
import SceneFrame from './SceneFrame';

interface SceneProps {
  selectedItems: Set<string>;
  onToggleMaterial: (id: string) => void;
}

export default function FreezerAreaScene({ selectedItems, onToggleMaterial }: SceneProps) {
  return (
    <SceneFrame
      areaId="freezer"
      ariaLabel="冰柜区"
      className="freezer-scene"
      backgroundImage={SCENE_BACKGROUNDS.freezer}
      materials={getMaterialsByArea('freezer')}
      selectedItems={selectedItems}
      onToggleMaterial={onToggleMaterial}
    />
  );
}
