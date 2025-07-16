import React from 'react';
import { CheckCircle, Circle, Lock, Clock, Star, Trophy, Zap, Award } from 'lucide-react';
import { Topic } from '../types/curriculum';

interface ProgressTreeProps {
  topics: Topic[];
  completedTopics: Set<string>;
  completedSubtopics: Set<string>;
  onTopicSelect: (topic: Topic) => void;
  selectedTopic?: Topic;
}

const ProgressTree: React.FC<ProgressTreeProps> = ({
  topics,
  completedTopics,
  completedSubtopics,
  onTopicSelect,
  selectedTopic
}) => {
  const isTopicUnlocked = (topic: Topic) => {
    return topic.prerequisites.every(prereq => completedTopics.has(prereq));
  };

  const getSubtopicProgress = (topic: Topic) => {
    if (!topic.subtopics || topic.subtopics.length === 0) return null;
    const completed = topic.subtopics.filter(sub => completedSubtopics.has(sub.id)).length;
    return { completed, total: topic.subtopics.length };
  };

  const getTopicsByLevel = (level: string) => {
    return topics.filter(topic => topic.level === level);
  };

  const getLevelColor = (level: string) => {
    const colors = {
      foundation: 'bg-blue-100 border-blue-300',
      linear: 'bg-green-100 border-green-300',
      'non-linear': 'bg-purple-100 border-purple-300',
      advanced: 'bg-orange-100 border-orange-300',
      specialized: 'bg-red-100 border-red-300'
    };
    return colors[level as keyof typeof colors] || 'bg-gray-100 border-gray-300';
  };

  const getTagColor = (tag: string) => {
    const colors = {
      'must-know': 'bg-red-100 text-red-800',
      'tricky': 'bg-yellow-100 text-yellow-800',
      'interview-frequent': 'bg-green-100 text-green-800'
    };
    return colors[tag as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getTagIcon = (tag: string) => {
    switch (tag) {
      case 'must-know': return <Star className="w-3 h-3" />;
      case 'tricky': return <Zap className="w-3 h-3" />;
      case 'interview-frequent': return <Trophy className="w-3 h-3" />;
      default: return null;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      beginner: 'bg-green-100 text-green-800 border-green-200',
      intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      advanced: 'bg-orange-100 text-orange-800 border-orange-200',
      expert: 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[difficulty as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const renderTopicNode = (topic: Topic) => {
    const isCompleted = completedTopics.has(topic.id);
    const isUnlocked = isTopicUnlocked(topic);
    const isSelected = selectedTopic?.id === topic.id;
    const subtopicProgress = getSubtopicProgress(topic);

    return (
      <div
        key={topic.id}
        className={`
          relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md
          ${isSelected ? 'ring-2 ring-blue-500' : ''}
          ${isCompleted ? 'bg-green-50 border-green-300' : 
            isUnlocked ? 'bg-white border-gray-300 hover:border-blue-300' : 
            'bg-gray-50 border-gray-200 cursor-not-allowed opacity-60'}
        `}
        onClick={() => isUnlocked && onTopicSelect(topic)}
      >
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            {isCompleted ? (
              <CheckCircle className="w-5 h-5 text-green-600" />
            ) : isUnlocked ? (
              <Circle className="w-5 h-5 text-gray-400" />
            ) : (
              <Lock className="w-5 h-5 text-gray-400" />
            )}
            <h3 className="font-semibold text-gray-900">{topic.title}</h3>
            {topic.badge && (
              <div className="text-lg" title="Special Badge">
                {topic.badge}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            {topic.points && (
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                {topic.points}pts
              </span>
            )}
            <span className={`px-2 py-1 rounded text-xs font-medium border ${getDifficultyColor(topic.difficulty)}`}>
              {topic.difficulty}
            </span>
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">{topic.estimatedHours}h</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-3">{topic.description}</p>
        
        {/* Subtopic Progress */}
        {subtopicProgress && (
          <div className="mb-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-500">Subtopics</span>
              <span className="text-xs text-gray-500">
                {subtopicProgress.completed}/{subtopicProgress.total}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${(subtopicProgress.completed / subtopicProgress.total) * 100}%` }}
              />
            </div>
          </div>
        )}
        
        <div className="flex flex-wrap gap-1">
          {topic.tags.map(tag => (
            <span
              key={tag}
              className={`px-2 py-1 rounded text-xs font-medium ${getTagColor(tag)}`}
            >
              <span className="inline-flex items-center gap-1">
                {getTagIcon(tag)}
                {tag.replace('-', ' ')}
              </span>
            </span>
          ))}
        </div>
        
        {topic.prerequisites.length > 0 && (
          <div className="mt-2 pt-2 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Prerequisites: {topic.prerequisites.join(', ')}
            </p>
          </div>
        )}
        
        {/* Progress indicators */}
        <div className="mt-2 pt-2 border-t border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>{topic.practiceProblems.length} problems</span>
            {topic.subtopics && (
              <span>• {topic.subtopics.length} subtopics</span>
            )}
          </div>
          {isCompleted && (
            <div className="flex items-center gap-1 text-green-600">
              <Award className="w-3 h-3" />
              <span className="text-xs font-medium">Completed</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  const levels = ['foundation', 'linear', 'non-linear', 'advanced', 'specialized'];

  return (
    <div className="space-y-8">
      {levels.map(level => {
        const levelTopics = getTopicsByLevel(level);
        if (levelTopics.length === 0) return null;
        
        const completedCount = levelTopics.filter(topic => 
          completedTopics.has(topic.id)
        ).length;
        const progressPercentage = (completedCount / levelTopics.length) * 100;
        const totalPoints = levelTopics.reduce((sum, topic) => sum + (topic.points || 0), 0);
        const earnedPoints = levelTopics
          .filter(topic => completedTopics.has(topic.id))
          .reduce((sum, topic) => sum + (topic.points || 0), 0);

        return (
          <div key={level} className="relative">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-gray-900 capitalize">
                  {level.replace('-', ' ')} Level
                </h2>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">
                    {earnedPoints}/{totalPoints} points
                  </div>
                  <div className="text-xs text-gray-500">
                    {completedCount}/{levelTopics.length} completed
                  </div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {levelTopics.map(renderTopicNode)}
            </div>
            
            {level !== 'specialized' && (
              <div className="flex justify-center mt-6">
                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-gray-300" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                  <div className="w-px h-6 bg-gray-300" />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressTree;