import { create } from 'zustand';

interface AppState {
  user: any | null;
  isLoggedIn: boolean;
  setUser: (user: any) => void;
  logout: () => void;
  isLoading: boolean;
  loadingMessage: string;
  showLoader: (message?: string) => void;
  hideLoader: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Auth State
  user: null,
  isLoggedIn: false,
  setUser: (user) => set({ user, isLoggedIn: !!user }),
  logout: () => set({ user: null, isLoggedIn: false }),

  // Global Loader State
  isLoading: false,
  loadingMessage: '',
  showLoader: (message = 'Cargando...') => set({ isLoading: true, loadingMessage: message }),
  hideLoader: () => set({ isLoading: false, loadingMessage: '' }),
}));
