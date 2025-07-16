import { useState, useEffect } from 'react';
import { UserProgress, Achievement } from '../types/curriculum';

export const useProgress = () => {
  const [progress, setProgress] = useState<UserProgress>({
    completedTopics: new Set<string>(),
    completedSubtopics: new Set<string>(),
    completedProblems: new Set<string>(),
    currentStreak: 0,
    totalHoursSpent: 0,
    lastStudyDate: new Date(),
    totalPoints: 0,
    level: 1,
    badges: [],
    achievements: []
  });
  
  const [newAchievement, setNewAchievement] = useState<Achievement | null>(null);

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('dsaProgress');
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        setProgress({
          completedTopics: new Set(parsed.completedTopics || []),
          completedSubtopics: new Set(parsed.completedSubtopics || []),
          completedProblems: new Set(parsed.completedProblems || []),
          currentStreak: parsed.currentStreak || 0,
          totalHoursSpent: parsed.totalHoursSpent || 0,
          lastStudyDate: new Date(parsed.lastStudyDate || Date.now()),
          totalPoints: parsed.totalPoints || 0,
          level: parsed.level || 1,
          badges: parsed.badges || [],
          achievements: (parsed.achievements || []).map((a: any) => ({
            ...a,
            unlockedAt: new Date(a.unlockedAt)
          }))
        });
      } catch (error) {
        console.error('Error loading progress:', error);
      }
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    const progressToSave = {
      completedTopics: Array.from(progress.completedTopics),
      completedSubtopics: Array.from(progress.completedSubtopics),
      completedProblems: Array.from(progress.completedProblems),
      currentStreak: progress.currentStreak,
      totalHoursSpent: progress.totalHoursSpent,
      lastStudyDate: progress.lastStudyDate.toISOString(),
      totalPoints: progress.totalPoints,
      level: progress.level,
      badges: progress.badges,
      achievements: progress.achievements.map(a => ({
        ...a,
        unlockedAt: a.unlockedAt.toISOString()
      }))
    };
    localStorage.setItem('dsaProgress', JSON.stringify(progressToSave));
  }, [progress]);

  const checkForAchievements = (newProgress: UserProgress) => {
    const achievements: Achievement[] = [];
    
    // First topic completed
    if (newProgress.completedTopics.size === 1 && progress.completedTopics.size === 0) {
      achievements.push({
        id: 'first-topic',
        title: 'Getting Started',
        description: 'Completed your first topic!',
        icon: '🎯',
        unlockedAt: new Date(),
        points: 50
      });
    }
    
    // Streak achievements
    if (newProgress.currentStreak === 7 && progress.currentStreak < 7) {
      achievements.push({
        id: 'week-streak',
        title: 'Week Warrior',
        description: 'Maintained a 7-day learning streak!',
        icon: '🔥',
        unlockedAt: new Date(),
        points: 100
      });
    }
    
    // Level completion
    const foundationTopics = ['arrays', 'strings', 'basic-math'];
    if (foundationTopics.every(id => newProgress.completedTopics.has(id)) &&
        !foundationTopics.every(id => progress.completedTopics.has(id))) {
      achievements.push({
        id: 'foundation-master',
        title: 'Foundation Master',
        description: 'Completed all foundation level topics!',
        icon: '🏗️',
        unlockedAt: new Date(),
        points: 200
      });
    }
    
    // Problem solver achievements
    if (newProgress.completedProblems.size >= 10 && progress.completedProblems.size < 10) {
      achievements.push({
        id: 'problem-solver',
        title: 'Problem Solver',
        description: 'Solved 10 practice problems!',
        icon: '🧩',
        unlockedAt: new Date(),
        points: 150
      });
    }
    
    return achievements;
  };

  const toggleTopicComplete = (topicId: string) => {
    setProgress(prev => {
      const newCompletedTopics = new Set(prev.completedTopics);
      const today = new Date();
      let pointsEarned = 0;
      
      if (newCompletedTopics.has(topicId)) {
        newCompletedTopics.delete(topicId);
        pointsEarned = -100; // Deduct points for uncompleting
      } else {
        newCompletedTopics.add(topicId);
        pointsEarned = 100; // Base points for completing a topic
        
        // Update streak if studying today
        const lastStudyDate = new Date(prev.lastStudyDate);
        const daysDiff = Math.floor((today.getTime() - lastStudyDate.getTime()) / (1000 * 60 * 60 * 24));
        
        let newStreak = prev.currentStreak;
        if (daysDiff === 0) {
          // Same day, streak continues
          newStreak = prev.currentStreak;
        } else if (daysDiff === 1) {
          // Next day, increment streak
          newStreak = prev.currentStreak + 1;
        } else {
          // Gap in days, reset streak
          newStreak = 1;
        }
        
        const newProgress = {
          ...prev,
          completedTopics: newCompletedTopics,
          currentStreak: newStreak,
          lastStudyDate: today,
          totalPoints: prev.totalPoints + pointsEarned,
          level: Math.floor((prev.totalPoints + pointsEarned) / 1000) + 1
        };
        
        // Check for new achievements
        const newAchievements = checkForAchievements(newProgress);
        if (newAchievements.length > 0) {
          setNewAchievement(newAchievements[0]); // Show first achievement
          newProgress.achievements = [...prev.achievements, ...newAchievements];
          newProgress.totalPoints += newAchievements.reduce((sum, a) => sum + a.points, 0);
          newProgress.level = Math.floor(newProgress.totalPoints / 1000) + 1;
        }
        
        return newProgress;
      }
      
      return {
        ...prev,
        completedTopics: newCompletedTopics,
        totalPoints: prev.totalPoints + pointsEarned,
        level: Math.floor((prev.totalPoints + pointsEarned) / 1000) + 1
      };
    });
  };

  const toggleSubtopicComplete = (subtopicId: string) => {
    setProgress(prev => {
      const newCompletedSubtopics = new Set(prev.completedSubtopics);
      let pointsEarned = 0;
      
      if (newCompletedSubtopics.has(subtopicId)) {
        newCompletedSubtopics.delete(subtopicId);
        pointsEarned = -50;
      } else {
        newCompletedSubtopics.add(subtopicId);
        pointsEarned = 50;
      }
      
      return {
        ...prev,
        completedSubtopics: newCompletedSubtopics,
        totalPoints: prev.totalPoints + pointsEarned,
        level: Math.floor((prev.totalPoints + pointsEarned) / 1000) + 1
      };
    });
  };

  const toggleProblemComplete = (problemId: string, points: number) => {
    setProgress(prev => {
      const newCompletedProblems = new Set(prev.completedProblems);
      let pointsEarned = 0;
      
      if (newCompletedProblems.has(problemId)) {
        newCompletedProblems.delete(problemId);
        pointsEarned = -points;
      } else {
        newCompletedProblems.add(problemId);
        pointsEarned = points;
      }
      
      const newProgress = {
        ...prev,
        completedProblems: newCompletedProblems,
        totalPoints: prev.totalPoints + pointsEarned,
        level: Math.floor((prev.totalPoints + pointsEarned) / 1000) + 1
      };
      
      // Check for achievements when adding problems
      if (!prev.completedProblems.has(problemId) && pointsEarned > 0) {
        const newAchievements = checkForAchievements(newProgress);
        if (newAchievements.length > 0) {
          setNewAchievement(newAchievements[0]);
          newProgress.achievements = [...prev.achievements, ...newAchievements];
          newProgress.totalPoints += newAchievements.reduce((sum, a) => sum + a.points, 0);
          newProgress.level = Math.floor(newProgress.totalPoints / 1000) + 1;
        }
      }
      
      return newProgress;
    });
  };

  const resetProgress = () => {
    setProgress({
      completedTopics: new Set<string>(),
      completedSubtopics: new Set<string>(),
      completedProblems: new Set<string>(),
      currentStreak: 0,
      totalHoursSpent: 0,
      lastStudyDate: new Date(),
      totalPoints: 0,
      level: 1,
      badges: [],
      achievements: []
    });
  };

  const dismissAchievement = () => {
    setNewAchievement(null);
  };

  return {
    progress,
    toggleTopicComplete,
    toggleSubtopicComplete,
    toggleProblemComplete,
    resetProgress,
    newAchievement,
    dismissAchievement
  };
};