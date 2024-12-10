import React from 'react';
import { X } from 'lucide-react';

interface RulesModalProps {
  onClose: () => void;
}

const RulesModal: React.FC<RulesModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-amber-950/95 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative backdrop-blur-sm border border-amber-900/50">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-amber-200/60 hover:text-amber-200"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-amber-100 mb-6">蛇口大富翁</h2>
        <div className="space-y-6 text-amber-200">
          <section>
            <h3 className="text-lg font-semibold text-amber-100 mb-3">蛇口发展规则</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>每位玩家初始获得 1500 金币的创业资金</li>
              <li>玩家轮流掷骰子，在蛇口地区寻找发展机会</li>
              <li>经过蛇口渔港可获得 200 金币的渔获收入</li>
              <li>遇到发展机遇时，会触发随机的事件</li>
              <li>可以购买未被开发的优质地产</li>
              <li>持有地产可以获得定期的经营收益</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold text-amber-100 mb-3">成功的标准</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>第一个资产达到 4000 金币的玩家获胜</li>
              <li>当有玩家破产时，资产最多的玩家胜出</li>
              <li>成功开发 5 处或以上优质地产的玩家可以宣布胜利</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-amber-100 mb-3">蛇口发展建议</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>关注产业升级，寻找高潜力的发展机会</li>
              <li>保持长期经营，让时间成为你的朋友</li>
              <li>市场波动时保持冷静，这可能是最好的投资机会</li>
              <li>不要投资你不了解的产业</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RulesModal; 