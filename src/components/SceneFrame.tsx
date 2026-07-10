import type { ReactNode } from 'react';
import { getSceneLayout } from '../data/sceneLayouts';
import type { AreaId, MaterialItem } from '../types';
import MaterialHotspot from './MaterialHotspot';
import MaterialLabel from './MaterialLabel';
import MaterialObject from './MaterialObject';
import SceneBackground from './SceneBackground';

interface SceneFrameProps {
  areaId: AreaId;
  ariaLabel: string;
  backgroundImage?: string;
  className?: string;
  fixtures?: ReactNode;
  materials: MaterialItem[];
  selectedItems: Set<string>;
  onToggleMaterial: (id: string) => void;
}

export default function SceneFrame({
  areaId,
  ariaLabel,
  backgroundImage,
  className = '',
  fixtures,
  materials,
  selectedItems,
  onToggleMaterial,
}: SceneFrameProps) {
  return (
    <section className={`scene-frame ${className}`} aria-label={ariaLabel}>
      <SceneBackground areaId={areaId} imageSrc={backgroundImage} />

      <div className="scene-fixture-layer" aria-hidden="true">
        {fixtures}
      </div>

      <div className="scene-object-layer" aria-hidden="true">
        {materials.map((item) => {
          const layout = getSceneLayout(item.id);
          return <MaterialObject key={item.id} item={item} layout={layout} selected={selectedItems.has(item.id)} />;
        })}
      </div>

      <div className="scene-hotspot-layer">
        {materials.map((item) => {
          const layout = getSceneLayout(item.id);
          return (
            <MaterialHotspot
              key={item.id}
              item={item}
              layout={layout}
              selected={selectedItems.has(item.id)}
              onToggle={onToggleMaterial}
            />
          );
        })}
      </div>

      <div className="scene-label-layer" aria-hidden="true">
        {materials.map((item) => {
          const layout = getSceneLayout(item.id);
          return <MaterialLabel key={item.id} item={item} layout={layout} selected={selectedItems.has(item.id)} />;
        })}
      </div>

      <div className="scene-atmosphere" aria-hidden="true" />
    </section>
  );
}
