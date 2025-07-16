import React from 'react';
import { Trophy, Target, Clock, Zap, CheckCircle } from 'lucide-react';
import { LevelProgress } from '../types/curriculum';

interface ProgressStatsProps {
  levelProgress: LevelProgress[];
  completedTopics: Set<string>;
  totalTopics: number;
  totalHours: number;
  currentStreak: number;
  nextRecommended: string[];
}

const ProgressStats: React.FC<ProgressStatsProps> = ({
  levelProgress,
  completedTopics,
  totalTopics,
  totalHours,
  currentStreak,
  nextRecommended
}) => {
  const overallProgress = Math.round((completedTopics.size / totalTopics) * 100);
  const completedHours = Math.round(totalHours * (completedTopics.size / totalTopics));

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Progress Overview</h2>
      
      {/* Overall Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Overall Progress</span>
          <span className="text-sm font-medium text-gray-700">{overallProgress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
        <div className="mt-2 text-sm text-gray-600">
          {completedTopics.size} of {totalTopics} topics completed
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <CheckCircle className="w-6 h-6 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-600">{completedTopics.size}</div>
          <div className="text-sm text-gray-600">Completed</div>
        </div>
        
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <Clock className="w-6 h-6 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-600">{completedHours}h</div>
          <div className="text-sm text-gray-600">Studied</div>
        </div>
        
        <div className="text-center p-4 bg-orange-50 rounded-lg">
          <Zap className="w-6 h-6 text-orange-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-orange-600">{currentStreak}</div>
          <div className="text-sm text-gray-600">Day Streak</div>
        </div>
        
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <Trophy className="w-6 h-6 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-purple-600">{levelProgress.filter(l => l.percentage === 100).length}</div>
          <div className="text-sm text-gray-600">Levels Done</div>
        </div>
      </div>

      {/* Level Progress */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Level Progress</h3>
        <div className="space-y-3">
          {levelProgress.map((level, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-20 text-sm font-medium text-gray-700 capitalize">
                {level.level}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">
                    {level.completedTopics}/{level.totalTopics}
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {level.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      level.unlocked 
                        ? 'bg-gradient-to-r from-green-400 to-blue-500' 
                        : 'bg-gray-300'
                    }`}
                    style={{ width: `${level.percentage}%` }}
                  />
                </div>
              </div>
              {!level.unlocked && (
                <div className="text-sm text-gray-400">Locked</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Next Recommended */}
      {nextRecommended.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5" />
            Next Recommended
          </h3>
          <div className="space-y-2">
            {nextRecommended.slice(0, 3).map(topicId => (
              <div key={topicId} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm text-gray-700 capitalize">
                  {topicId.replace('-', ' ')}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressStats;