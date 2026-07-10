import type { CSSProperties, ReactNode } from 'react';
import type { AreaId } from '../types';

interface SceneBackgroundProps {
  areaId: AreaId;
  imageSrc?: string;
  children?: ReactNode;
}

type SceneStyle = CSSProperties & {
  '--scene-bg'?: string;
};

export default function SceneBackground({ areaId, imageSrc, children }: SceneBackgroundProps) {
  const style: SceneStyle | undefined = imageSrc ? { '--scene-bg': `url("${imageSrc}")` } : undefined;

  return (
    <div className={`scene-background scene-background-${areaId} ${imageSrc ? 'has-image' : ''}`} style={style}>
      {children}
    </div>
  );
}
