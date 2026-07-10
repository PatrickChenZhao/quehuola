import type { Area, AreaId, MaterialItem } from '../types';

export const AREAS: Area[] = [
  { id: 'front', name: '前台区', title: '缺货啦｜前台区' },
  { id: 'prep', name: '备料区', title: '缺货啦｜备料区' },
  { id: 'freezer', name: '冰柜区', title: '缺货啦｜冰柜区' },
];

export const AREA_ORDER: AreaId[] = ['front', 'prep', 'freezer'];

export const MATERIALS: MaterialItem[] = [
  { id: 'front-medium-pp-cup', name: '中pp杯', area: 'front', displayOrder: 1, category: '杯子' },
  { id: 'front-large-pp-cup', name: '大pp杯', area: 'front', displayOrder: 2, category: '杯子' },
  { id: 'front-medium-paper-cup', name: '中纸杯', area: 'front', displayOrder: 3, category: '杯子' },
  { id: 'front-large-paper-cup', name: '大纸杯', area: 'front', displayOrder: 4, category: '杯子' },
  { id: 'front-thick-straw', name: '粗吸管', area: 'front', displayOrder: 5, category: '吸管' },
  { id: 'front-thin-straw', name: '细吸管', area: 'front', displayOrder: 6, category: '吸管' },
  { id: 'front-cup-sleeve', name: '杯套', area: 'front', displayOrder: 7, category: '包装' },
  { id: 'front-cup-lid', name: '杯盖', area: 'front', displayOrder: 8, category: '杯盖' },
  { id: 'front-napkin', name: '纸巾', area: 'front', displayOrder: 9, category: '前台' },
  { id: 'front-single-bag', name: '单杯袋子', area: 'front', displayOrder: 10, category: '袋子' },
  { id: 'front-double-bag', name: '双杯袋子', area: 'front', displayOrder: 11, category: '袋子' },
  { id: 'front-four-bag', name: '四杯袋子', area: 'front', displayOrder: 12, category: '袋子' },
  { id: 'front-thermal-single', name: '保温单杯', area: 'front', displayOrder: 13, category: '保温' },
  { id: 'front-thermal-double', name: '保温双杯', area: 'front', displayOrder: 14, category: '保温' },
  { id: 'front-thermal-four', name: '保温四杯', area: 'front', displayOrder: 15, category: '保温' },
  { id: 'front-double-carrier', name: '双杯托', area: 'front', displayOrder: 16, category: '杯托' },
  { id: 'front-four-carrier', name: '四杯托', area: 'front', displayOrder: 17, category: '杯托' },

  { id: 'prep-roasted-oolong', name: '焙香乌龙茶', area: 'prep', displayOrder: 1, category: '茶叶' },
  { id: 'prep-peach-oolong', name: '桃香乌龙茶', area: 'prep', displayOrder: 2, category: '茶叶' },
  { id: 'prep-gardenia-green', name: '栀香绿茶', area: 'prep', displayOrder: 3, category: '茶叶' },
  { id: 'prep-jasmine', name: '茉莉花茶', area: 'prep', displayOrder: 4, category: '茶叶' },
  { id: 'prep-black-tea', name: '红茶', area: 'prep', displayOrder: 5, category: '茶叶' },
  { id: 'prep-sago', name: '小西米', area: 'prep', displayOrder: 6, category: '抽屉' },
  { id: 'prep-brown-sugar-powder', name: '黑糖粉', area: 'prep', displayOrder: 7, category: '粉类' },
  { id: 'prep-jelly-powder', name: '冻冻粉', area: 'prep', displayOrder: 8, category: '粉类' },
  { id: 'prep-sugar', name: '白糖', area: 'prep', displayOrder: 9, category: '调料' },
  { id: 'prep-salt', name: '盐', area: 'prep', displayOrder: 10, category: '调料' },
  { id: 'prep-soybean-powder', name: '黄豆粉', area: 'prep', displayOrder: 11, category: '粉类' },
  { id: 'prep-grape-can', name: '葡萄罐头', area: 'prep', displayOrder: 12, category: '罐头' },
  { id: 'prep-grapefruit', name: '红西柚粒罐头', area: 'prep', displayOrder: 13, category: '罐头' },
  { id: 'prep-cookie-crumbs', name: '饼干碎', area: 'prep', displayOrder: 14, category: '饼干' },
  { id: 'prep-cookie-sauce', name: '饼干酱', area: 'prep', displayOrder: 15, category: '饼干' },
  { id: 'prep-condensed-milk', name: '炼乳', area: 'prep', displayOrder: 16, category: '奶制品' },
  { id: 'prep-golden-sugar', name: '金黄糖', area: 'prep', displayOrder: 17, category: '糖类' },
  { id: 'prep-coconut-jelly', name: '椰果罐头', area: 'prep', displayOrder: 18, category: '罐头' },
  { id: 'prep-starch', name: '淀粉', area: 'prep', displayOrder: 19, category: '调料' },
  { id: 'prep-gloves', name: '手套', area: 'prep', displayOrder: 20, category: '耗材' },
  { id: 'prep-mask', name: '口罩', area: 'prep', displayOrder: 21, category: '耗材' },
  { id: 'prep-hairnet', name: '发网', area: 'prep', displayOrder: 22, category: '耗材' },
  { id: 'prep-hand-towel', name: '擦手纸', area: 'prep', displayOrder: 23, category: '耗材' },

  { id: 'freezer-cheese', name: '芝士块', area: 'freezer', displayOrder: 1, category: '奶制品' },
  { id: 'freezer-milk', name: '牛奶', area: 'freezer', displayOrder: 2, category: '奶制品' },
  { id: 'freezer-cream', name: '淡奶油', area: 'freezer', displayOrder: 3, category: '奶制品' },
  { id: 'freezer-green-grape', name: '青提', area: 'freezer', displayOrder: 4, category: '水果' },
  { id: 'freezer-matcha', name: '抹茶粉', area: 'freezer', displayOrder: 5, category: '粉类' },
  { id: 'freezer-pearls', name: '黑糖珍珠', area: 'freezer', displayOrder: 6, category: '冷冻' },
  { id: 'freezer-taro-ball', name: '芋圆', area: 'freezer', displayOrder: 7, category: '冷冻' },
  { id: 'freezer-taro-paste', name: '芋泥', area: 'freezer', displayOrder: 8, category: '冷冻' },
  { id: 'freezer-mango-chunks', name: '芒果块', area: 'freezer', displayOrder: 9, category: '冷冻' },
  { id: 'freezer-mango-pulp', name: '芒果浆', area: 'freezer', displayOrder: 10, category: '果浆' },
  { id: 'freezer-coconut-milk', name: '椰子乳', area: 'freezer', displayOrder: 11, category: '液体' },
  { id: 'freezer-grape-juice', name: '葡萄汁', area: 'freezer', displayOrder: 12, category: '液体' },
  { id: 'freezer-green-grape-juice', name: '青提汁', area: 'freezer', displayOrder: 13, category: '液体' },
  { id: 'freezer-garbage-bag', name: '垃圾袋', area: 'freezer', displayOrder: 14, category: '耗材' },
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
