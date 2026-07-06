import { useState } from 'react';
import type { AreaId } from '../types';
import { AREAS } from '../data/materials';
import AreaCarousel from './AreaCarousel';
import AreaHeader from './AreaHeader';
import FloatingGenerateButton from './FloatingGenerateButton';
import PaginationDots from './PaginationDots';

interface MainSceneProps {
  selectedItems: Set<string>;
  onToggleMaterial: (id: string) => void;
  onGenerate: () => void;
}

export default function MainScene({ selectedItems, onToggleMaterial, onGenerate }: MainSceneProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentArea = AREAS[currentIndex];

  const goNext = () => setCurrentIndex((index) => (index + 1) % AREAS.length);
  const goPrev = () => setCurrentIndex((index) => (index - 1 + AREAS.length) % AREAS.length);
  const goToArea = (areaId: AreaId) => {
    const nextIndex = AREAS.findIndex((area) => area.id === areaId);
    if (nextIndex >= 0) {
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <section className="main-scene">
      <AreaHeader title={currentArea.title} />
      <AreaCarousel
        currentIndex={currentIndex}
        selectedItems={selectedItems}
        onToggleMaterial={onToggleMaterial}
        onNext={goNext}
        onPrev={goPrev}
      />
      <PaginationDots areas={AREAS} currentAreaId={currentArea.id} onSelect={goToArea} />
      <FloatingGenerateButton onClick={onGenerate} />
    </section>
  );
}
