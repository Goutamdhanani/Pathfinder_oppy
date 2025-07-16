import React, { useEffect, useState } from 'react';
import { Trophy, X, Star } from 'lucide-react';
import { Achievement } from '../types/curriculum';

interface AchievementNotificationProps {
  achievement: Achievement | null;
  onClose: () => void;
}

const AchievementNotification: React.FC<AchievementNotificationProps> = ({
  achievement,
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (achievement) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [achievement, onClose]);

  if (!achievement) return null;

  return (
    <div className={`
      fixed top-4 right-4 z-50 transform transition-all duration-300 ease-out
      ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
    `}>
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg shadow-lg p-4 max-w-sm">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <Trophy className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-lg">Achievement Unlocked!</h3>
                <div className="text-xl">{achievement.icon}</div>
              </div>
              <h4 className="font-semibold mb-1">{achievement.title}</h4>
              <p className="text-sm text-yellow-100 mb-2">{achievement.description}</p>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold">+{achievement.points} points</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }}
            className="p-1 hover:bg-white/20 rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AchievementNotification;