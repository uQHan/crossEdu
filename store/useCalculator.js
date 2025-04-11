import { create } from 'zustand';

export const useCalculatorStore = create((set) => ({
  currentValue: 0,
  history: [],

  add: (value) => set((state) => ({
    currentValue: state.currentValue + value,
    history: [...state.history, `+ ${value}`],
  })),

  subtract: (value) => set((state) => ({
    currentValue: state.currentValue - value,
    history: [...state.history, `- ${value}`],
  })),

  multiply: (value) => set((state) => ({
    currentValue: state.currentValue * value,
    history: [...state.history, `* ${value}`],
  })),

  divide: (value) => set((state) => ({
    currentValue: value !== 0 ? state.currentValue / value : state.currentValue, // Prevent division by zero
    history: value !== 0 ? [...state.history, `/ ${value}`] : state.history,
  })),

  reset: () => set(() => ({
    currentValue: 0,
    history: [],
  })),
}));