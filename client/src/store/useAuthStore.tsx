import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean
  token: string | undefined
  login: (token: string) => void
  logout: () => void
  initialize: () => void
}

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  token: undefined,
  
  login: (token) => {
    localStorage.setItem('token', token);
    set({ isLoggedIn: true, token });
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ isLoggedIn: false, token: undefined });
  },
  
  initialize: () => {
    const token = localStorage.getItem('token');
    if (token) {
      set({ isLoggedIn: true, token });
    }
  }
}));

export default useAuthStore;