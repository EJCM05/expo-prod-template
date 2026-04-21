import { create } from 'zustand';

export const useAppStore = create((set) => ({
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
