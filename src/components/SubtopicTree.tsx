import React from 'react';
import { CheckCircle, Circle, Lock, Star, Zap, Trophy } from 'lucide-react';
import { Topic } from '../types/curriculum';

interface SubtopicTreeProps {
  parentTopic: Topic;
  completedTopics: Set<string>;
  completedSubtopics: Set<string>;
  onSubtopicSelect: (subtopic: Topic) => void;
  selectedSubtopic?: Topic;
}

const SubtopicTree: React.FC<SubtopicTreeProps> = ({
  parentTopic,
  completedTopics,
  completedSubtopics,
  onSubtopicSelect,
  selectedSubtopic
}) => {
  const isParentCompleted = completedTopics.has(parentTopic.id);
  
  const isSubtopicUnlocked = (subtopic: Topic) => {
    return isParentCompleted && subtopic.prerequisites.every(prereq => 
      completedSubtopics.has(prereq) || completedTopics.has(prereq)
    );
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

  const getTagIcon = (tag: string) => {
    switch (tag) {
      case 'must-know': return <Star className="w-3 h-3" />;
      case 'tricky': return <Zap className="w-3 h-3" />;
      case 'interview-frequent': return <Trophy className="w-3 h-3" />;
      default: return null;
    }
  };

  if (!parentTopic.subtopics || parentTopic.subtopics.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full" />
        Subtopics
      </h3>
      
      <div className="space-y-3">
        {parentTopic.subtopics.map((subtopic, index) => {
          const isCompleted = completedSubtopics.has(subtopic.id);
          const isUnlocked = isSubtopicUnlocked(subtopic);
          const isSelected = selectedSubtopic?.id === subtopic.id;
          
          return (
            <div key={subtopic.id} className="relative">
              {/* Connection Line */}
              {index < parentTopic.subtopics!.length - 1 && (
                <div className="absolute left-4 top-12 w-px h-8 bg-gray-200" />
              )}
              
              <div
                className={`
                  relative flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
                  ${isSelected ? 'ring-2 ring-blue-500' : ''}
                  ${isCompleted ? 'bg-green-50 border-green-300' : 
                    isUnlocked ? 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-md' : 
                    'bg-gray-50 border-gray-200 cursor-not-allowed opacity-60'}
                `}
                onClick={() => isUnlocked && onSubtopicSelect(subtopic)}
              >
                {/* Status Icon */}
                <div className="flex-shrink-0 mt-1">
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : isUnlocked ? (
                    <Circle className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Lock className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-900 truncate">{subtopic.title}</h4>
                    <div className="flex items-center gap-2 ml-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium border ${getDifficultyColor(subtopic.difficulty)}`}>
                        {subtopic.difficulty}
                      </span>
                      {subtopic.points && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                          {subtopic.points}pts
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{subtopic.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {subtopic.tags.slice(0, 2).map(tag => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {getTagIcon(tag)}
                          {tag.replace('-', ' ')}
                        </span>
                      ))}
                    </div>
                    
                    <div className="text-xs text-gray-500">
                      {subtopic.estimatedHours}h • {subtopic.practiceProblems.length} problems
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubtopicTree;