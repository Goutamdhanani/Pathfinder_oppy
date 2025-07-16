import React from 'react';
import { Trophy, Star, Zap, Target, Award, Crown, Flame } from 'lucide-react';
import { UserProgress, Achievement } from '../types/curriculum';

interface GameStatsProps {
  progress: UserProgress;
  totalPoints: number;
}

const GameStats: React.FC<GameStatsProps> = ({ progress, totalPoints }) => {
  const levelProgress = (progress.totalPoints % 1000) / 1000 * 100;
  const nextLevelPoints = (progress.level + 1) * 1000 - progress.totalPoints;

  const recentAchievements = progress.achievements
    .sort((a, b) => b.unlockedAt.getTime() - a.unlockedAt.getTime())
    .slice(0, 3);

  return (
    <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-6 text-white">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <Crown className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Level {progress.level}</h2>
            <p className="text-purple-100">DSA Master</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">{progress.totalPoints.toLocaleString()}</div>
          <div className="text-purple-100 text-sm">Total Points</div>
        </div>
      </div>

      {/* Level Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Progress to Level {progress.level + 1}</span>
          <span className="text-sm">{nextLevelPoints} points to go</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${levelProgress}%` }}
          />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Flame className="w-5 h-5 text-orange-400" />
          </div>
          <div className="text-lg font-bold">{progress.currentStreak}</div>
          <div className="text-xs text-purple-100">Day Streak</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Award className="w-5 h-5 text-yellow-400" />
          </div>
          <div className="text-lg font-bold">{progress.badges.length}</div>
          <div className="text-xs text-purple-100">Badges</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Target className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-lg font-bold">{progress.completedTopics.size}</div>
          <div className="text-xs text-purple-100">Completed</div>
        </div>
      </div>

      {/* Recent Achievements */}
      {recentAchievements.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            Recent Achievements
          </h3>
          <div className="space-y-2">
            {recentAchievements.map(achievement => (
              <div key={achievement.id} className="flex items-center gap-3 p-2 bg-white/10 rounded-lg">
                <div className="text-lg">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="font-medium text-sm">{achievement.title}</div>
                  <div className="text-xs text-purple-100">{achievement.description}</div>
                </div>
                <div className="text-yellow-400 font-bold text-sm">+{achievement.points}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameStats;