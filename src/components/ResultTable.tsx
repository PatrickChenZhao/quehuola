import { X } from 'lucide-react';
import { getAreaById } from '../data/materials';
import type { MaterialItem } from '../types';

interface ResultTableProps {
  materials: MaterialItem[];
  onRemove: (id: string) => void;
}

export default function ResultTable({ materials, onRemove }: ResultTableProps) {
  return (
    <div className="result-table-wrap">
      <table className="result-table">
        <thead>
          <tr>
            <th>区域</th>
            <th>物料名称</th>
            <th aria-label="操作" />
          </tr>
        </thead>
        <tbody>
          {materials.map((item) => (
            <tr key={item.id}>
              <td>{getAreaById(item.area).name}</td>
              <td>{item.name}</td>
              <td>
                <button type="button" className="delete-row" aria-label={`删除${item.name}`} onClick={() => onRemove(item.id)}>
                  <X size={16} strokeWidth={2.6} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
