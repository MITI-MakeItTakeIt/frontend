
import { create } from 'zustand';

interface AuthStore {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}


const useAuthStore = create<AuthStore>((set) => ({

    isLoggedIn: false,
    login: () => {
        const userLocalStorage = localStorage.getItem("access_token")
        if (userLocalStorage) {
            set({ isLoggedIn: true })
        }
    },
    logout: () => {
        set({ isLoggedIn: false });
        localStorage.clear();
    },
}));

export default useAuthStore;
