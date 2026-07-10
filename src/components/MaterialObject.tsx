import { useState } from 'react';
import type { MaterialItem, SceneMaterialLayout } from '../types';

interface MaterialObjectProps {
  item: MaterialItem;
  layout: SceneMaterialLayout;
  selected: boolean;
}

export default function MaterialObject({ item, layout, selected }: MaterialObjectProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const shouldUseImage = Boolean(layout.imageSrc && !imageFailed);

  return (
    <div
      className={`scene-material material-id-${item.id} visual-${layout.visualType} ${layout.variant ? `variant-${layout.variant}` : ''} ${
        selected ? 'material-selected' : ''
      }`}
      style={{
        left: `${layout.x}%`,
        top: `${layout.y}%`,
        width: `${layout.width}%`,
        height: `${layout.height}%`,
        zIndex: layout.zIndex ?? 1,
        transform: layout.rotation ? `rotate(${layout.rotation}deg)` : undefined,
      }}
      aria-hidden="true"
    >
      <span className="material-object-inner">
        {shouldUseImage ? (
          <img
            className="material-image"
            src={layout.imageSrc}
            alt=""
            draggable={false}
            style={{ objectFit: layout.imageFit ?? 'contain' }}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span className="material-fallback">
            <span className="material-shine" />
          </span>
        )}
      </span>
      <span className="material-ground-shadow" />
    </div>
  );
}
