import { create } from 'zustand';


interface UserState {
  user: null
  isLoading: boolean
  setUser: (user: undefined | null) => void
  setLoading: (condition: boolean) => void
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoading: false,
  setUser: (user: undefined | null) => {
    set({ user: user})
  },
  setLoading: (condition: boolean) => {
    set({isLoading: condition})
  }

}));

export default useUserStore;