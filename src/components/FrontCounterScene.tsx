import { SCENE_BACKGROUNDS } from '../data/sceneLayouts';
import { getMaterialsByArea } from '../data/materials';
import SceneFrame from './SceneFrame';

interface SceneProps {
  selectedItems: Set<string>;
  onToggleMaterial: (id: string) => void;
}

function FrontCounterFixtures() {
  return (
    <>
      <div className="fixture counter-soft-wash" />
      <div className="fixture acrylic-rack straw-organizer">
        <span className="rack-glass-face" />
        <span className="rack-shelf shelf-upper" />
        <span className="rack-shelf shelf-lower" />
        <span className="rack-divider divider-left" />
        <span className="rack-divider divider-right" />
      </div>
      <div className="fixture bag-organizer">
        <span className="bag-rail rail-a" />
        <span className="bag-rail rail-b" />
        <span className="bag-rail rail-c" />
      </div>
      <div className="fixture sleeve-stand">
        <span className="stand-rib rib-a" />
        <span className="stand-rib rib-b" />
      </div>
      <div className="fixture napkin-cubby" />
    </>
  );
}

export default function FrontCounterScene({ selectedItems, onToggleMaterial }: SceneProps) {
  return (
    <SceneFrame
      areaId="front"
      ariaLabel="前台区"
      className="front-scene"
      backgroundImage={SCENE_BACKGROUNDS.front}
      fixtures={<FrontCounterFixtures />}
      materials={getMaterialsByArea('front')}
      selectedItems={selectedItems}
      onToggleMaterial={onToggleMaterial}
    />
  );
}
