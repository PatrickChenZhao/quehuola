import { useRef, type TouchEvent } from 'react';
import { AREAS } from '../data/materials';
import type { AreaId } from '../types';
import FreezerAreaScene from './scenes/FreezerAreaScene';
import FrontCounterScene from './scenes/FrontCounterScene';
import PrepAreaScene from './scenes/PrepAreaScene';

interface AreaCarouselProps {
  currentIndex: number;
  selectedItems: Set<string>;
  onToggleMaterial: (id: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

const sceneMap: Record<AreaId, typeof FrontCounterScene> = {
  front: FrontCounterScene,
  prep: PrepAreaScene,
  freezer: FreezerAreaScene,
};

export default function AreaCarousel({
  currentIndex,
  selectedItems,
  onToggleMaterial,
  onNext,
  onPrev,
}: AreaCarouselProps) {
  const startXRef = useRef<number | null>(null);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    startXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (startXRef.current === null) {
      return;
    }
    const diff = event.changedTouches[0].clientX - startXRef.current;
    startXRef.current = null;

    if (Math.abs(diff) < 42) {
      return;
    }

    if (diff > 0) {
      onNext();
    } else {
      onPrev();
    }
  };

  return (
    <div className="carousel-viewport" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="carousel-stage">
        {AREAS.map((area, index) => {
          const Scene = sceneMap[area.id];
          const offset = index - currentIndex;
          const circularOffset =
            offset > 1 ? offset - AREAS.length : offset < -1 ? offset + AREAS.length : offset;
          const className = circularOffset === 0 ? 'is-active' : circularOffset > 0 ? 'is-next' : 'is-prev';

          return (
            <div key={area.id} className={`scene-slide ${className}`} aria-hidden={circularOffset !== 0}>
              <Scene selectedItems={selectedItems} onToggleMaterial={onToggleMaterial} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
