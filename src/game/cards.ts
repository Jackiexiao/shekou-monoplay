export interface Card {
  title: string;
  description: string;
  effect: 'money' | 'move';
  value: number;
}

export const chanceCards: Card[] = [
  {
    title: '海鲜美食',
    description: '在蛇口渔港品尝新鲜海鲜，获得200金币的美食体验',
    effect: 'money',
    value: 200
  },
  {
    title: '台风天气',
    description: '遭遇台风天气，损失100金币',
    effect: 'money',
    value: -100
  },
  {
    title: '文创收益',
    description: '你在GNG创意社区的投资获得回报，收获150金币',
    effect: 'money',
    value: 150
  },
  {
    title: '港口维护',
    description: '参与港口设施维护，支出50金币',
    effect: 'move',
    value: -50
  },
  {
    title: '创新发展',
    description: '前海新政策发布，创业项目获得300金币支持',
    effect: 'move',
    value: 300
  },
  {
    title: '文化活动',
    description: '参加海上世界文化节，获得100金币的文化收益',
    effect: 'money',
    value: 100
  },
  {
    title: '经营困境',
    description: '商铺经营遇到困难，损失150金币',
    effect: 'money',
    value: -150
  },
  {
    title: '产业升级',
    description: '参与蛇口产业升级项目，获得180金币的补贴',
    effect: 'money',
    value: 180
  }
];