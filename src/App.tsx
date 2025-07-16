import React, { useState } from 'react';
import { BookOpen, BarChart3, Settings, Menu, X, Trophy } from 'lucide-react';
import ProgressTree from './components/ProgressTree';
import TopicDetail from './components/TopicDetail';
import ProgressStats from './components/ProgressStats';
import GameStats from './components/GameStats';
import AchievementNotification from './components/AchievementNotification';
import { curriculum, getNextRecommendedTopics, calculateLevelProgress } from './data/curriculum';
import { useProgress } from './hooks/useProgress';
import { Topic } from './types/curriculum';

function App() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState<Topic | null>(null);
  const [activeView, setActiveView] = useState<'tree' | 'stats'>('tree');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { 
    progress, 
    toggleTopicComplete, 
    toggleSubtopicComplete,
    toggleProblemComplete,
    resetProgress,
    newAchievement,
    dismissAchievement
  } = useProgress();

  const totalTopics = curriculum.length;
  const totalHours = curriculum.reduce((sum, topic) => sum + topic.estimatedHours, 0);
  const totalPoints = curriculum.reduce((sum, topic) => sum + (topic.points || 100), 0);
  const nextRecommended = getNextRecommendedTopics(progress.completedTopics);
  const levelProgress = calculateLevelProgress(progress.completedTopics);

  const handleTopicSelect = (topic: Topic) => {
    setSelectedTopic(topic);
    setSelectedSubtopic(null);
    setSidebarOpen(false);
  };

  const handleSubtopicSelect = (subtopic: Topic) => {
    setSelectedSubtopic(subtopic);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">DSA Learning Roadmap</h1>
            </div>
            
            {/* Level and Points Display */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full">
                <Trophy className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">
                  Level {progress.level}
                </span>
              </div>
              <div className="text-sm font-medium text-gray-600">
                {progress.totalPoints.toLocaleString()} pts
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center space-x-4">
                <button
                  onClick={() => setActiveView('tree')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeView === 'tree'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  Learning Tree
                </button>
                <button
                  onClick={() => setActiveView('stats')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeView === 'stats'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <BarChart3 className="w-4 h-4" />
                  Progress
                </button>
              </nav>
              
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700"
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Game Stats - Always visible at top */}
            <div className="mb-6">
              <GameStats progress={progress} totalPoints={totalPoints} />
            </div>
            
            {activeView === 'tree' && (
              <ProgressTree
                topics={curriculum}
                completedTopics={progress.completedTopics}
                completedSubtopics={progress.completedSubtopics}
                onTopicSelect={handleTopicSelect}
                selectedTopic={selectedTopic}
              />
            )}
            
            {activeView === 'stats' && (
              <ProgressStats
                levelProgress={levelProgress}
                completedTopics={progress.completedTopics}
                totalTopics={totalTopics}
                totalHours={totalHours}
                currentStreak={progress.currentStreak}
                nextRecommended={nextRecommended}
              />
            )}
          </div>

          {/* Sidebar */}
          <div className={`
            fixed inset-y-0 right-0 w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50
            md:relative md:translate-x-0 md:shadow-none md:w-96
            ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <div className="h-full overflow-y-auto">
              {selectedSubtopic ? (
                <TopicDetail
                  topic={selectedSubtopic}
                  isCompleted={progress.completedSubtopics.has(selectedSubtopic.id)}
                  onToggleComplete={toggleSubtopicComplete}
                  completedSubtopics={progress.completedSubtopics}
                  completedProblems={progress.completedProblems}
                  onSubtopicComplete={toggleSubtopicComplete}
                  onProblemComplete={toggleProblemComplete}
                  selectedSubtopic={selectedSubtopic}
                  onSubtopicSelect={handleSubtopicSelect}
                />
              ) : selectedTopic ? (
                <TopicDetail
                  topic={selectedTopic}
                  isCompleted={progress.completedTopics.has(selectedTopic.id)}
                  onToggleComplete={toggleTopicComplete}
                  completedSubtopics={progress.completedSubtopics}
                  completedProblems={progress.completedProblems}
                  onSubtopicComplete={toggleSubtopicComplete}
                  onProblemComplete={toggleProblemComplete}
                  selectedSubtopic={selectedSubtopic}
                  onSubtopicSelect={handleSubtopicSelect}
                />
              ) : (
                <div className="p-6 text-center text-gray-500">
                  <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-lg font-medium mb-2">Select a Topic</h3>
                  <p className="text-sm">
                    Choose a topic from the learning tree to view detailed information, 
                    implementation examples, and practice problems.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="grid grid-cols-3 gap-1 p-2">
          <button
            onClick={() => setActiveView('tree')}
            className={`flex flex-col items-center gap-1 p-2 rounded-md transition-colors ${
              activeView === 'tree'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-500'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span className="text-xs">Tree</span>
          </button>
          <button
            onClick={() => setActiveView('stats')}
            className={`flex flex-col items-center gap-1 p-2 rounded-md transition-colors ${
              activeView === 'stats'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-500'
            }`}
          >
            <BarChart3 className="w-5 h-5" />
            <span className="text-xs">Stats</span>
          </button>
          <button
            onClick={resetProgress}
            className="flex flex-col items-center gap-1 p-2 rounded-md text-gray-500 hover:text-gray-700"
          >
            <Settings className="w-5 h-5" />
            <span className="text-xs">Reset</span>
          </button>
        </div>
        
        {/* Mobile Level Display */}
        <div className="px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">
                Level {progress.level}
              </span>
            </div>
            <div className="text-sm font-medium text-gray-600">
              {progress.totalPoints.toLocaleString()} pts
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Achievement Notification */}
      <AchievementNotification
        achievement={newAchievement}
        onClose={dismissAchievement}
      />
    </div>
  );
}

export default App;