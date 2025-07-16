export interface Topic {
  id: string;
  title: string;
  description: string;
  tags: ('must-know' | 'tricky' | 'interview-frequent')[];
  estimatedHours: number;
  level: 'foundation' | 'linear' | 'non-linear' | 'advanced' | 'specialized';
  prerequisites: string[];
  points: number;
  badge?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  theory: {
    concept: string;
    complexity: {
      time: string;
      space: string;
    };
    whenToUse: string;
  };
  implementation: {
    code: string;
    walkthrough: string[];
    variations?: string[];
  };
  visualAids: {
    ascii?: string;
    steps: string[];
    animationDesc?: string;
  };
  practiceProblems: {
    title: string;
    difficulty: 'easy' | 'medium' | 'hard';
    leetcodeNum?: number;
    hackerrankLink?: string;
    description: string;
    points: number;
  }[];
  subtopics?: Topic[];
}

export interface UserProgress {
  completedTopics: Set<string>;
  completedSubtopics: Set<string>;
  completedProblems: Set<string>;
  currentStreak: number;
  totalHoursSpent: number;
  lastStudyDate: Date;
  totalPoints: number;
  level: number;
  badges: string[];
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: Date;
  points: number;
}

export interface LevelProgress {
  level: string;
  totalTopics: number;
  completedTopics: number;
  percentage: number;
  unlocked: boolean;
  totalPoints: number;
  earnedPoints: number;
}