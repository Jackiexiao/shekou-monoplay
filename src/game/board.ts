import { LucideIcon } from 'lucide-react';
import { 
  Building2, Landmark, Beer, DollarSign, 
  LineChart, TrendingUp, Coins, Wallet,
  Banknote, PiggyBank, Trophy
} from 'lucide-react';

export interface Space {
  name: string;
  type: 'property' | 'chance' | 'tax' | 'special';
  icon?: LucideIcon;
  price?: number;
  description: string;
  owner: number | null;
}

export const createPropertySpace = (
  name: string, 
  price: number, 
  icon: LucideIcon, 
  description: string
): Space => ({
  name,
  type: 'property',
  price,
  icon,
  description,
  owner: null
});

export let boardSpaces: Space[] = [
  { name: '蛇口渔港', type: 'special', icon: Trophy, description: '每次经过获得200金币的渔获收入', owner: null },
  createPropertySpace('海上世界', 100, PiggyBank, '蛇口标志性的休闲娱乐地标'),
  { name: '市场机遇', type: 'chance', icon: LineChart, description: '蛇口发展新机遇', owner: null },
  createPropertySpace('太子湾公园', 120, Wallet, '浪漫的滨海休闲公园'),
  createPropertySpace('招商局港口', 150, DollarSign, '现代化的国际港口'),
  { name: '休闲时光', type: 'special', icon: Beer, description: '在海边漫步放松心情', owner: null },
  createPropertySpace('前海合作区', 200, Building2, '粤港澳大湾区创新高地'),
  { name: '发展机遇', type: 'chance', icon: TrendingUp, description: '新的发展机会', owner: null },
  createPropertySpace('GNG创意社区', 180, Landmark, '文创产业集聚地'),
  createPropertySpace('蛇口工业区', 160, Coins, '改革开放先行地'),
  createPropertySpace('深圳湾口岸', 200, Banknote, '连接深港的重要枢纽'),
  createPropertySpace('海上世界广场', 220, PiggyBank, '繁华的商业中心'),
  { name: '创新机遇', type: 'chance', icon: LineChart, description: '蛇口创新发展新机会', owner: null },
  createPropertySpace('价值工厂', 240, Wallet, '工业遗产创意园'),
  createPropertySpace('蛇口沃尔玛', 260, Building2, '零售商业地标'),
  { name: '休闲漫步', type: 'special', icon: Beer, description: '在太子湾公园放松心情', owner: null },
  createPropertySpace('海上世界文化艺术中心', 280, PiggyBank, '文化艺术新地标'),
  createPropertySpace('招商局创新中心', 300, Landmark, '科技创新集聚地'),
  { name: '发展机遇', type: 'chance', icon: TrendingUp, description: '蛇口新机遇', owner: null },
  createPropertySpace('前海深港基金小镇', 350, Building2, '金融创新示范区'),
  createPropertySpace('蛇口网谷', 120, Building2, '科技创新园区')
];

export const updateSpaceOwner = (position: number, newOwner: number | null) => {
  boardSpaces[position] = {
    ...boardSpaces[position],
    owner: newOwner
  };
};