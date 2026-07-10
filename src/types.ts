export type AreaId = 'front' | 'prep' | 'freezer';

export type MaterialVisualType =
  | 'cup-stack'
  | 'straw-bundle'
  | 'lid-stack'
  | 'napkin-pack'
  | 'bag-stack'
  | 'sleeve-stack'
  | 'carrier-stack'
  | 'thermal-pack'
  | 'drawer-bin'
  | 'tea-bag'
  | 'can'
  | 'jar'
  | 'powder-bag'
  | 'box-pack'
  | 'packet-pack'
  | 'bottle'
  | 'fruit'
  | 'dairy'
  | 'frozen-box';

export interface Area {
  id: AreaId;
  name: string;
  title: string;
}

export interface SceneMaterialLayout {
  x: number;
  y: number;
  width: number;
  height: number;
  labelX: number;
  labelY: number;
  zIndex?: number;
  visualType: MaterialVisualType;
  imageSrc?: string;
  imageFit?: 'contain' | 'cover';
  variant?: string;
  rotation?: number;
}

export interface MaterialItem {
  id: string;
  name: string;
  area: AreaId;
  displayOrder: number;
  category?: string;
}
