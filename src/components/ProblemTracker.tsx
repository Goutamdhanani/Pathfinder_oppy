import React, { useState } from 'react';
import { CheckCircle, Circle, ExternalLink, Star, Clock, Trophy } from 'lucide-react';
import { Topic } from '../types/curriculum';

interface ProblemTrackerProps {
  topic: Topic;
  completedProblems: Set<string>;
  onProblemComplete: (problemId: string, points: number) => void;
}

const ProblemTracker: React.FC<ProblemTrackerProps> = ({
  topic,
  completedProblems,
  onProblemComplete
}) => {
  const [expandedProblem, setExpandedProblem] = useState<number | null>(null);

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      easy: 'text-green-600 bg-green-50 border-green-200',
      medium: 'text-yellow-600 bg-yellow-50 border-yellow-200',
      hard: 'text-red-600 bg-red-50 border-red-200'
    };
    return colors[difficulty as keyof typeof colors] || 'text-gray-600 bg-gray-50 border-gray-200';
  };

  const getDifficultyPoints = (difficulty: string) => {
    const points = { easy: 10, medium: 25, hard: 50 };
    return points[difficulty as keyof typeof points] || 10;
  };

  const completedCount = topic.practiceProblems.filter(problem => 
    completedProblems.has(`${topic.id}-${problem.title}`)
  ).length;

  const totalPoints = topic.practiceProblems.reduce((sum, problem) => 
    sum + (problem.points || getDifficultyPoints(problem.difficulty)), 0
  );

  const earnedPoints = topic.practiceProblems
    .filter(problem => completedProblems.has(`${topic.id}-${problem.title}`))
    .reduce((sum, problem) => sum + (problem.points || getDifficultyPoints(problem.difficulty)), 0);

  return (
    <div className="space-y-4">
      {/* Header with Progress */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border">
        <div className="flex items-center gap-3">
          <Trophy className="w-5 h-5 text-blue-600" />
          <div>
            <h3 className="font-semibold text-gray-900">Practice Problems</h3>
            <p className="text-sm text-gray-600">
              {completedCount}/{topic.practiceProblems.length} completed
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-blue-600">{earnedPoints}/{totalPoints}</div>
          <div className="text-xs text-gray-500">Points</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(completedCount / topic.practiceProblems.length) * 100}%` }}
        />
      </div>

      {/* Problems List */}
      <div className="space-y-3">
        {topic.practiceProblems.map((problem, index) => {
          const problemId = `${topic.id}-${problem.title}`;
          const isCompleted = completedProblems.has(problemId);
          const isExpanded = expandedProblem === index;
          const points = problem.points || getDifficultyPoints(problem.difficulty);

          return (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <div
                className={`p-4 cursor-pointer transition-colors ${
                  isCompleted ? 'bg-green-50' : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => setExpandedProblem(isExpanded ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onProblemComplete(problemId, points);
                      }}
                      className={`p-1 rounded-full transition-colors ${
                        isCompleted 
                          ? 'text-green-600 hover:bg-green-100' 
                          : 'text-gray-400 hover:bg-gray-100'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <Circle className="w-5 h-5" />
                      )}
                    </button>
                    
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-gray-900">{problem.title}</h4>
                        {problem.leetcodeNum && (
                          <span className="text-xs text-gray-500">#{problem.leetcodeNum}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-2 py-1 rounded text-xs font-medium border ${getDifficultyColor(problem.difficulty)}`}>
                          {problem.difficulty.toUpperCase()}
                        </span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                          {points} pts
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {isCompleted && (
                      <div className="flex items-center gap-1 text-green-600">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">+{points}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {isExpanded && (
                <div className="px-4 pb-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-700 mb-3 mt-3">{problem.description}</p>
                  <div className="flex gap-2">
                    {problem.leetcodeNum && (
                      <a
                        href={`https://leetcode.com/problems/${problem.title.toLowerCase().replace(/\s+/g, '-')}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-700 rounded text-sm font-medium hover:bg-orange-200 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        LeetCode
                      </a>
                    )}
                    {problem.hackerrankLink && (
                      <a
                        href={problem.hackerrankLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded text-sm font-medium hover:bg-green-200 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        HackerRank
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProblemTracker;