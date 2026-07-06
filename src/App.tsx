import { useMemo, useState } from 'react';
import { getSortedMaterials } from './data/materials';
import MainScene from './components/MainScene';
import OrientationGate from './components/OrientationGate';
import ResultPage from './components/ResultPage';
import Toast from './components/Toast';

type Page = 'main' | 'result';

export default function App() {
  const [page, setPage] = useState<Page>('main');
  const [selectedItems, setSelectedItems] = useState<Set<string>>(() => new Set());
  const [toast, setToast] = useState('');

  const selectedMaterials = useMemo(() => getSortedMaterials(selectedItems), [selectedItems]);

  const toggleMaterial = (id: string) => {
    setSelectedItems((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const removeMaterial = (id: string) => {
    setSelectedItems((current) => {
      const next = new Set(current);
      next.delete(id);
      return next;
    });
  };

  return (
    <OrientationGate>
      {page === 'main' ? (
        <MainScene
          selectedItems={selectedItems}
          onToggleMaterial={toggleMaterial}
          onGenerate={() => setPage('result')}
        />
      ) : (
        <ResultPage
          materials={selectedMaterials}
          onRemove={removeMaterial}
          onBack={() => setPage('main')}
          onCopied={() => setToast('已复制缺货清单')}
        />
      )}
      <Toast message={toast} onDone={() => setToast('')} />
    </OrientationGate>
  );
}
