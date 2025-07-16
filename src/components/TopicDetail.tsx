import React, { useState } from 'react';
import { 
  CheckCircle, 
  Circle, 
  Clock, 
  Star, 
  Code, 
  BookOpen, 
  Target,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Trophy,
  Zap
} from 'lucide-react';
import { Topic } from '../types/curriculum';
import SubtopicTree from './SubtopicTree';
import ProblemTracker from './ProblemTracker';

interface TopicDetailProps {
  topic: Topic;
  isCompleted: boolean;
  onToggleComplete: (topicId: string) => void;
  completedSubtopics: Set<string>;
  completedProblems: Set<string>;
  onSubtopicComplete: (subtopicId: string) => void;
  onProblemComplete: (problemId: string, points: number) => void;
  selectedSubtopic?: Topic;
  onSubtopicSelect: (subtopic: Topic) => void;
}

const TopicDetail: React.FC<TopicDetailProps> = ({
  topic,
  isCompleted,
  onToggleComplete,
  completedSubtopics,
  completedProblems,
  onSubtopicComplete,
  onProblemComplete,
  selectedSubtopic,
  onSubtopicSelect
}) => {
  const [activeSection, setActiveSection] = useState<string>('theory');

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

  const sections = [
    { id: 'theory', label: 'Theory', icon: BookOpen },
    { id: 'implementation', label: 'Implementation', icon: Code },
    { id: 'visual', label: 'Visual Aids', icon: Target },
    { id: 'practice', label: 'Practice Problems', icon: Trophy }
  ];

  // Add subtopics section if they exist
  if (topic.subtopics && topic.subtopics.length > 0) {
    sections.splice(3, 0, { id: 'subtopics', label: 'Subtopics', icon: Circle });
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-bold text-gray-900">{topic.title}</h1>
            <button
              onClick={() => onToggleComplete(topic.id)}
              className={`p-2 rounded-full transition-colors ${
                isCompleted 
                  ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                  : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
              }`}
            >
              {isCompleted ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                <Circle className="w-6 h-6" />
              )}
            </button>
            {topic.points && (
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {topic.points} points
              </span>
            )}
          </div>
          
          <p className="text-gray-600 mb-4">{topic.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {topic.tags.map(tag => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-sm font-medium ${getTagColor(tag)}`}
              >
                <span className="inline-flex items-center gap-1">
                  {getTagIcon(tag)}
                  {tag.replace('-', ' ')}
                </span>
                {tag.replace('-', ' ')}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Estimated: {topic.estimatedHours} hours</span>
            </div>
            <div className="capitalize">
              {topic.difficulty} • {topic.level.replace('-', ' ')}
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          {sections.map(section => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeSection === section.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {section.label}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="space-y-6">
        {activeSection === 'theory' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Core Concept</h3>
              <p className="text-gray-700 leading-relaxed">{topic.theory.concept}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Time & Space Complexity</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Time Complexity</h4>
                    <code className="text-sm text-blue-600">{topic.theory.complexity.time}</code>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Space Complexity</h4>
                    <code className="text-sm text-blue-600">{topic.theory.complexity.space}</code>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">When to Use</h3>
              <p className="text-gray-700 leading-relaxed">{topic.theory.whenToUse}</p>
            </div>
          </div>
        )}

        {activeSection === 'implementation' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Code Implementation</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-100">
                  <code>{topic.implementation.code}</code>
                </pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Step-by-Step Walkthrough</h3>
              <ol className="list-decimal list-inside space-y-2">
                {topic.implementation.walkthrough.map((step, index) => (
                  <li key={index} className="text-gray-700">{step}</li>
                ))}
              </ol>
            </div>
            
            {topic.implementation.variations && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Common Variations</h3>
                <ul className="list-disc list-inside space-y-2">
                  {topic.implementation.variations.map((variation, index) => (
                    <li key={index} className="text-gray-700">{variation}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeSection === 'visual' && (
          <div className="space-y-6">
            {topic.visualAids.ascii && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Visual Structure</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <pre className="text-sm text-gray-800 font-mono">
                    {topic.visualAids.ascii}
                  </pre>
                </div>
              </div>
            )}
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Step-by-Step Process</h3>
              <div className="space-y-3">
                {topic.visualAids.steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {topic.visualAids.animationDesc && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Animation Description</h3>
                <p className="text-gray-700 leading-relaxed">{topic.visualAids.animationDesc}</p>
              </div>
            )}
          </div>
        )}

        {activeSection === 'subtopics' && (
          <SubtopicTree
            parentTopic={topic}
            completedTopics={new Set([topic.id])} // Pass completed topics
            completedSubtopics={completedSubtopics}
            onSubtopicSelect={onSubtopicSelect}
            selectedSubtopic={selectedSubtopic}
          />
        )}

        {activeSection === 'practice' && (
          <ProblemTracker
            topic={topic}
            completedProblems={completedProblems}
            onProblemComplete={onProblemComplete}
          />
        )}
      </div>
    </div>
  );
};

export default TopicDetail;