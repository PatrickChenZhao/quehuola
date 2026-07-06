import type { Area, AreaId, MaterialItem } from '../types';

export const AREAS: Area[] = [
  { id: 'front', name: '前台区', title: '缺货啦｜前台区' },
  { id: 'prep', name: '备料区', title: '缺货啦｜备料区' },
  { id: 'freezer', name: '冰柜区', title: '缺货啦｜冰柜区' },
];

export const AREA_ORDER: AreaId[] = ['front', 'prep', 'freezer'];

export const MATERIALS: MaterialItem[] = [
  { id: 'front-medium-pp-cup', name: '中pp杯', area: 'front', displayOrder: 1, shape: 'cup', category: '杯子', layout: { x: 52, y: 28, w: 7, h: 15 } },
  { id: 'front-large-pp-cup', name: '大pp杯', area: 'front', displayOrder: 2, shape: 'cup', category: '杯子', layout: { x: 60, y: 27, w: 7, h: 16 } },
  { id: 'front-medium-paper-cup', name: '中纸杯', area: 'front', displayOrder: 3, shape: 'cup', category: '杯子', layout: { x: 68, y: 28, w: 7, h: 15 } },
  { id: 'front-large-paper-cup', name: '大纸杯', area: 'front', displayOrder: 4, shape: 'cup', category: '杯子', layout: { x: 76, y: 27, w: 7, h: 16 } },
  { id: 'front-thick-straw', name: '粗吸管', area: 'front', displayOrder: 5, shape: 'straw', category: '吸管', layout: { x: 12, y: 31, w: 8, h: 15 } },
  { id: 'front-thin-straw', name: '细吸管', area: 'front', displayOrder: 6, shape: 'straw', category: '吸管', layout: { x: 21, y: 31, w: 8, h: 15 } },
  { id: 'front-cup-sleeve', name: '杯套', area: 'front', displayOrder: 7, shape: 'sleeve', category: '包装', layout: { x: 39, y: 28, w: 8, h: 15 } },
  { id: 'front-cup-lid', name: '杯盖', area: 'front', displayOrder: 8, shape: 'lid', category: '杯盖', layout: { x: 16, y: 49, w: 11, h: 12 } },
  { id: 'front-napkin', name: '纸巾', area: 'front', displayOrder: 9, shape: 'paper', category: '前台', layout: { x: 5, y: 54, w: 10, h: 13 } },
  { id: 'front-single-bag', name: '单杯袋子', area: 'front', displayOrder: 10, shape: 'bag', category: '袋子', layout: { x: 85, y: 30, w: 8, h: 14 } },
  { id: 'front-double-bag', name: '双杯袋子', area: 'front', displayOrder: 11, shape: 'bag', category: '袋子', layout: { x: 86, y: 47, w: 8, h: 14 } },
  { id: 'front-four-bag', name: '四杯袋子', area: 'front', displayOrder: 12, shape: 'bag', category: '袋子', layout: { x: 85, y: 64, w: 9, h: 15 } },
  { id: 'front-thermal-single', name: '保温单杯', area: 'front', displayOrder: 13, shape: 'thermal', category: '保温', layout: { x: 20, y: 72, w: 9, h: 13 } },
  { id: 'front-thermal-double', name: '保温双杯', area: 'front', displayOrder: 14, shape: 'thermal', category: '保温', layout: { x: 32, y: 72, w: 10, h: 13 } },
  { id: 'front-thermal-four', name: '保温四杯', area: 'front', displayOrder: 15, shape: 'thermal', category: '保温', layout: { x: 45, y: 72, w: 10, h: 13 } },
  { id: 'front-double-carrier', name: '双杯托', area: 'front', displayOrder: 16, shape: 'carrier', category: '杯托', layout: { x: 59, y: 74, w: 10, h: 11 } },
  { id: 'front-four-carrier', name: '四杯托', area: 'front', displayOrder: 17, shape: 'carrier', category: '杯托', layout: { x: 72, y: 74, w: 11, h: 11 } },

  { id: 'prep-roasted-oolong', name: '焙香乌龙茶', area: 'prep', displayOrder: 1, shape: 'tea-bag', category: '茶叶', layout: { x: 33, y: 26, w: 8, h: 14 } },
  { id: 'prep-peach-oolong', name: '桃香乌龙茶', area: 'prep', displayOrder: 2, shape: 'tea-bag', category: '茶叶', layout: { x: 42, y: 26, w: 8, h: 14 } },
  { id: 'prep-gardenia-green', name: '栀香绿茶', area: 'prep', displayOrder: 3, shape: 'tea-bag', category: '茶叶', layout: { x: 51, y: 26, w: 8, h: 14 } },
  { id: 'prep-jasmine', name: '茉莉花茶', area: 'prep', displayOrder: 4, shape: 'tea-bag', category: '茶叶', layout: { x: 60, y: 26, w: 8, h: 14 } },
  { id: 'prep-black-tea', name: '红茶', area: 'prep', displayOrder: 5, shape: 'tea-bag', category: '茶叶', layout: { x: 69, y: 26, w: 8, h: 14 } },
  { id: 'prep-sago', name: '小西米', area: 'prep', displayOrder: 6, shape: 'drawer', category: '抽屉', layout: { x: 7, y: 44, w: 13, h: 16 } },
  { id: 'prep-brown-sugar-powder', name: '黑糖粉', area: 'prep', displayOrder: 7, shape: 'powder', category: '粉类', layout: { x: 34, y: 67, w: 9, h: 13 } },
  { id: 'prep-jelly-powder', name: '冻冻粉', area: 'prep', displayOrder: 8, shape: 'powder', category: '粉类', layout: { x: 54, y: 49, w: 9, h: 13 } },
  { id: 'prep-sugar', name: '糖', area: 'prep', displayOrder: 9, shape: 'box', category: '调料', layout: { x: 19, y: 75, w: 7, h: 12 } },
  { id: 'prep-salt', name: '盐', area: 'prep', displayOrder: 10, shape: 'box', category: '调料', layout: { x: 27, y: 75, w: 7, h: 12 } },
  { id: 'prep-soybean-powder', name: '黄豆粉', area: 'prep', displayOrder: 11, shape: 'powder', category: '粉类', layout: { x: 68, y: 49, w: 9, h: 13 } },
  { id: 'prep-grape-can', name: '葡萄罐头', area: 'prep', displayOrder: 12, shape: 'can', category: '罐头', layout: { x: 86, y: 66, w: 8, h: 12 } },
  { id: 'prep-grapefruit', name: '红西柚粒', area: 'prep', displayOrder: 13, shape: 'can', category: '罐头', layout: { x: 35, y: 49, w: 9, h: 13 } },
  { id: 'prep-cookie-crumbs', name: '饼干碎', area: 'prep', displayOrder: 14, shape: 'jar', category: '饼干', layout: { x: 82, y: 47, w: 8, h: 12 } },
  { id: 'prep-cookie-sauce', name: '饼干酱', area: 'prep', displayOrder: 15, shape: 'jar', category: '饼干', layout: { x: 91, y: 47, w: 8, h: 12 } },
  { id: 'prep-condensed-milk', name: '炼乳', area: 'prep', displayOrder: 16, shape: 'bottle', category: '奶制品', layout: { x: 78, y: 66, w: 8, h: 12 } },
  { id: 'prep-golden-sugar', name: '金黄糖', area: 'prep', displayOrder: 17, shape: 'powder', category: '糖类', layout: { x: 47, y: 67, w: 9, h: 13 } },
  { id: 'prep-coconut-jelly', name: '椰果', area: 'prep', displayOrder: 18, shape: 'can', category: '罐头', layout: { x: 60, y: 67, w: 9, h: 13 } },
  { id: 'prep-starch', name: '淀粉', area: 'prep', displayOrder: 19, shape: 'box', category: '调料', layout: { x: 11, y: 75, w: 7, h: 12 } },
  { id: 'prep-gloves', name: '手套', area: 'prep', displayOrder: 20, shape: 'packet', category: '耗材', layout: { x: 79, y: 28, w: 7, h: 12 } },
  { id: 'prep-mask', name: '口罩', area: 'prep', displayOrder: 21, shape: 'packet', category: '耗材', layout: { x: 87, y: 28, w: 7, h: 12 } },
  { id: 'prep-hairnet', name: '发网', area: 'prep', displayOrder: 22, shape: 'packet', category: '耗材', layout: { x: 95, y: 28, w: 5, h: 12 } },
  { id: 'prep-hand-towel', name: '擦手纸', area: 'prep', displayOrder: 23, shape: 'paper', category: '耗材', layout: { x: 82, y: 14, w: 10, h: 11 } },

  { id: 'freezer-cheese', name: '芝士块', area: 'freezer', displayOrder: 1, shape: 'dairy', category: '奶制品', layout: { x: 68, y: 67, w: 9, h: 13 } },
  { id: 'freezer-milk', name: '牛奶', area: 'freezer', displayOrder: 2, shape: 'dairy', category: '奶制品', layout: { x: 78, y: 67, w: 9, h: 13 } },
  { id: 'freezer-cream', name: '淡奶油', area: 'freezer', displayOrder: 3, shape: 'dairy', category: '奶制品', layout: { x: 88, y: 67, w: 9, h: 13 } },
  { id: 'freezer-green-grape', name: '青提', area: 'freezer', displayOrder: 4, shape: 'fruit', category: '水果', layout: { x: 82, y: 33, w: 10, h: 13 } },
  { id: 'freezer-matcha', name: '抹茶粉', area: 'freezer', displayOrder: 5, shape: 'powder', category: '粉类', layout: { x: 69, y: 33, w: 9, h: 13 } },
  { id: 'freezer-pearls', name: '黑糖珍珠', area: 'freezer', displayOrder: 6, shape: 'frozen', category: '冷冻', layout: { x: 12, y: 33, w: 11, h: 13 } },
  { id: 'freezer-taro-ball', name: '芋圆', area: 'freezer', displayOrder: 7, shape: 'frozen', category: '冷冻', layout: { x: 27, y: 33, w: 10, h: 13 } },
  { id: 'freezer-taro-paste', name: '芋泥', area: 'freezer', displayOrder: 8, shape: 'frozen', category: '冷冻', layout: { x: 42, y: 33, w: 10, h: 13 } },
  { id: 'freezer-mango-pulp', name: '芒果浆', area: 'freezer', displayOrder: 9, shape: 'bottle', category: '果浆', layout: { x: 10, y: 67, w: 9, h: 13 } },
  { id: 'freezer-coconut-milk', name: '椰子乳', area: 'freezer', displayOrder: 10, shape: 'bottle', category: '液体', layout: { x: 23, y: 67, w: 9, h: 13 } },
  { id: 'freezer-grape-juice', name: '葡萄汁', area: 'freezer', displayOrder: 11, shape: 'bottle', category: '液体', layout: { x: 36, y: 67, w: 9, h: 13 } },
  { id: 'freezer-green-grape-juice', name: '青提汁', area: 'freezer', displayOrder: 12, shape: 'bottle', category: '液体', layout: { x: 49, y: 67, w: 9, h: 13 } },
];

export function getAreaById(areaId: AreaId): Area {
  const area = AREAS.find((item) => item.id === areaId);
  if (!area) {
    throw new Error(`Unknown area id: ${areaId}`);
  }
  return area;
}

export function getMaterialsByArea(areaId: AreaId): MaterialItem[] {
  return MATERIALS.filter((item) => item.area === areaId).sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getSortedMaterials(ids: Set<string>): MaterialItem[] {
  return MATERIALS.filter((item) => ids.has(item.id)).sort((a, b) => {
    const areaDiff = AREA_ORDER.indexOf(a.area) - AREA_ORDER.indexOf(b.area);
    return areaDiff || a.displayOrder - b.displayOrder;
  });
}
