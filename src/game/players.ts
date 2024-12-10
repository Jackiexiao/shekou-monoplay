export interface Player {
  id: number;
  name: string;
  color: string;
  position: number;
  money: number;
  properties: number[];
}

export const initialPlayers: Player[] = [
  {
    id: 1,
    name: '袁庚',
    color: '#FFB74D', // 温暖的橙色
    position: 0,
    money: 1500,
    properties: []
  },
  {
    id: 2,
    name: '梁广大',
    color: '#4CAF50', // 稳重的绿色
    position: 0,
    money: 1500,
    properties: []
  },
  {
    id: 3,
    name: '马化腾',
    color: '#42A5F5', // 智慧的蓝色
    position: 0,
    money: 1500,
    properties: []
  },
  {
    id: 4,
    name: '王石',
    color: '#AB47BC', // 神秘的紫色
    position: 0,
    money: 1500,
    properties: []
  }
];