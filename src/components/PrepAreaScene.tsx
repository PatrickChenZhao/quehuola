import { getMaterialsByArea } from '../data/materials';
import { SCENE_BACKGROUNDS } from '../data/sceneLayouts';
import SceneFrame from './SceneFrame';

interface SceneProps {
  selectedItems: Set<string>;
  onToggleMaterial: (id: string) => void;
}

const PREP_VISIBLE_ITEMS = new Set([
  'prep-gardenia-green',
  'prep-roasted-oolong',
  'prep-black-tea',
  'prep-jasmine',
  'prep-peach-oolong',
  'prep-jelly-powder',
  'prep-soybean-powder',
  'prep-brown-sugar-powder',
  'prep-starch',
  'prep-salt',
  'prep-sago',
  'prep-grapefruit',
  'prep-golden-sugar',
  'prep-condensed-milk',
  'prep-hairnet',
  'prep-gloves',
  'prep-mask',
  'prep-cookie-crumbs',
  'prep-cookie-sauce',
  'prep-sugar',
  'prep-coconut-jelly',
  'prep-grape-can',
]);

export default function PrepAreaScene({ selectedItems, onToggleMaterial }: SceneProps) {
  const materials = getMaterialsByArea('prep').filter((item) => PREP_VISIBLE_ITEMS.has(item.id));

  return (
    <SceneFrame
      areaId="prep"
      ariaLabel="备料区"
      className="prep-scene"
      backgroundImage={SCENE_BACKGROUNDS.prep}
      materials={materials}
      selectedItems={selectedItems}
      onToggleMaterial={onToggleMaterial}
    />
  );
}
