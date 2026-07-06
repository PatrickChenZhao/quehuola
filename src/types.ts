export type AreaId = 'front' | 'prep' | 'freezer';

export type MaterialShape =
  | 'cup'
  | 'straw'
  | 'lid'
  | 'paper'
  | 'bag'
  | 'sleeve'
  | 'carrier'
  | 'thermal'
  | 'drawer'
  | 'tea-bag'
  | 'can'
  | 'powder'
  | 'box'
  | 'packet'
  | 'bottle'
  | 'fruit'
  | 'dairy'
  | 'frozen'
  | 'jar';

export interface Area {
  id: AreaId;
  name: string;
  title: string;
}

export interface MaterialLayout {
  x: number;
  y: number;
  w: number;
  h: number;
  label?: 'top' | 'bottom' | 'left' | 'right';
}

export interface MaterialItem {
  id: string;
  name: string;
  area: AreaId;
  displayOrder: number;
  layout: MaterialLayout;
  shape: MaterialShape;
  category?: string;
}
