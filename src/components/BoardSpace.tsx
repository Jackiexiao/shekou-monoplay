import React from 'react';
import { Player } from '../game/players';
import { Space } from '../game/board';
import PlayerToken from './PlayerToken';
import { DollarSign, Sparkles, AlertCircle } from 'lucide-react';

interface BoardSpaceProps {
  space: Space;
  position: number;
  players: Player[];
  isCurrentPosition: boolean;
  isPreviousPosition: boolean;
  isCurrentPlayerSpace: boolean;
  isInMovePath?: boolean;
  side: 'top' | 'right' | 'bottom' | 'left';
  onClick?: (position: number) => void;
}

const BoardSpace: React.FC<BoardSpaceProps> = ({ 
  space, 
  position, 
  players, 
  isCurrentPosition,
  isPreviousPosition,
  isCurrentPlayerSpace,
  isInMovePath = false,
  side,
  onClick 
}) => {
  const getBorderStyle = () => {
    if (isCurrentPosition) return 'border-purple-400 bg-white/10 shadow-lg shadow-purple-400/20 animate-pulse';
    if (isPreviousPosition) return 'border-yellow-400 bg-white/10 shadow-lg shadow-yellow-400/20';
    if (isInMovePath) return 'border-green-400 bg-white/10 shadow-lg shadow-green-400/20 animate-pulse';
    if (isCurrentPlayerSpace) return 'border-blue-400 bg-white/10 shadow-lg shadow-blue-400/20';
    return 'border-transparent hover:border-white/20 hover:bg-white/10';
  };

  const getOwnerColor = () => {
    if (space.owner !== undefined && space.owner !== null && players[space.owner]) {
      return players[space.owner].color;
    }
    return 'transparent';
  };

  const getTypeIndicator = () => {
    switch (space.type) {
      case 'property':
        return {
          icon: DollarSign,
          color: 'bg-yellow-500/20 text-yellow-400',
          label: '地产'
        };
      case 'chance':
        return {
          icon: Sparkles,
          color: 'bg-purple-500/20 text-purple-400',
          label: '机遇'
        };
      case 'tax':
        return {
          icon: AlertCircle,
          color: 'bg-red-500/20 text-red-400',
          label: '税收'
        };
      default:
        return null;
    }
  };

  const typeInfo = getTypeIndicator();

  return (
    <div 
      className={`
        relative bg-white/5 rounded-lg p-2
        transition-all duration-300 cursor-pointer
        ${side === 'left' || side === 'right' 
          ? 'h-24 sm:h-28'
          : 'h-24 sm:h-28'
        }
        border-2 ${getBorderStyle()}
      `}
      onClick={() => {
        if (space.type === 'property' && space.owner === null) {
          onClick?.(position);
        }
      }}
    >
      <div className="absolute top-0.5 left-0.5 text-[10px] text-white/60 bg-black/30 
                    rounded px-1 font-mono">
        {position}
      </div>

      {typeInfo && (
        <div className={`absolute top-0.5 right-0.5 ${typeInfo.color} 
                      rounded-full text-xs sm:text-sm px-1.5 py-0.5 flex items-center gap-1`}>
          <typeInfo.icon className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>{typeInfo.label}</span>
        </div>
      )}

      <div className={`h-full flex ${
        side === 'left' || side === 'right'
          ? 'flex-row items-center gap-2 pt-5'
          : 'flex-col justify-between pt-5'
      }`}>
        <div className={`text-white/90 font-medium
          ${side === 'left' || side === 'right' 
            ? 'line-clamp-2 flex-1 text-sm sm:text-base'
            : 'line-clamp-2 text-center text-sm sm:text-base'
          }`}>
          {space.name}
        </div>
        
        <div className={`flex ${
          side === 'left' || side === 'right'
            ? 'flex-col items-end min-w-[40px]'
            : 'flex-col items-center'
        } gap-0.5`}>
          {space.icon && (
            <space.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/70" />
          )}
          {space.price && (
            <div className={`text-sm sm:text-base font-medium
              ${space.type === 'tax' ? 'text-red-400' : 'text-yellow-400/90'}`}>
              {space.type === 'tax' ? '-' : ''}{space.price}元
            </div>
          )}
        </div>
      </div>
      
      {players.length > 0 && (
        <div className="absolute bottom-1 right-1 flex flex-wrap gap-1">
          {players.map((player, idx) => (
            <PlayerToken
              key={idx}
              player={player}
              isCurrentPlayer={isCurrentPosition}
              previousPosition={isPreviousPosition ? position : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BoardSpace;
