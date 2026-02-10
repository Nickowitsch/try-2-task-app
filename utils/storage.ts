import AsyncStorage from '@react-native-async-storage/async-storage';

export interface SubTask {
  id: string;
  text: string;
  completed: boolean;
  priority?: boolean;
}

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  subtasks: SubTask[];
  isExpanded: boolean;
  isDaily?: boolean;
  category?: 'work' | 'projects' | 'life' | 'own';
  priority?: boolean;
}

export interface MoodLog {
  date: string;
  mood: number;
}

export interface DailyHistory {
  date: string;
  tasksCompleted: number;
  totalTasks: number;
  progressPercentage: number;
  mood?: number;
  beCreativeCompleted?: boolean;
}

const TASKS_KEY = '@tasks';
const ARCHIVE_KEY = '@archive';
const MOOD_KEY = '@mood_logs';
const HISTORY_KEY = '@history';
const LAST_ARCHIVE_KEY = '@last_archive_date';

export const getTasks = async (): Promise<Task[]> => {
  try {
    const data = await AsyncStorage.getItem(TASKS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading tasks:', error);
    return [];
  }
};

export const saveTasks = async (tasks: Task[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks:', error);
  }
};

export const getArchive = async (): Promise<Task[]> => {
  try {
    const data = await AsyncStorage.getItem(ARCHIVE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading archive:', error);
    return [];
  }
};

export const saveArchive = async (tasks: Task[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(ARCHIVE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving archive:', error);
  }
};

export const getMoodLogs = async (): Promise<MoodLog[]> => {
  try {
    const data = await AsyncStorage.getItem(MOOD_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading mood logs:', error);
    return [];
  }
};

export const saveMoodLogs = async (logs: MoodLog[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(MOOD_KEY, JSON.stringify(logs));
  } catch (error) {
    console.error('Error saving mood logs:', error);
  }
};

export const getHistory = async (): Promise<DailyHistory[]> => {
  try {
    const data = await AsyncStorage.getItem(HISTORY_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading history:', error);
    return [];
  }
};

export const saveHistory = async (history: DailyHistory[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch (error) {
    console.error('Error saving history:', error);
  }
};

export const getTodayDate = (): string => {
  return new Date().toISOString().split('T')[0];
};

export const getLastArchiveDate = async (): Promise<string | null> => {
  try {
    const date = await AsyncStorage.getItem(LAST_ARCHIVE_KEY);
    return date;
  } catch (error) {
    console.error('Error loading last archive date:', error);
    return null;
  }
};

export const saveLastArchiveDate = async (date: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(LAST_ARCHIVE_KEY, date);
  } catch (error) {
    console.error('Error saving last archive date:', error);
  }
};
