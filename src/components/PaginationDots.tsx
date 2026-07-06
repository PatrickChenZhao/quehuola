import type { Area, AreaId } from '../types';

interface PaginationDotsProps {
  areas: Area[];
  currentAreaId: AreaId;
  onSelect: (areaId: AreaId) => void;
}

export default function PaginationDots({ areas, currentAreaId, onSelect }: PaginationDotsProps) {
  return (
    <div className="pagination-dots" aria-label="区域分页">
      {areas.map((area) => (
        <button
          key={area.id}
          type="button"
          aria-label={`切换到${area.name}`}
          className={area.id === currentAreaId ? 'active' : ''}
          onClick={() => onSelect(area.id)}
        />
      ))}
    </div>
  );
}
