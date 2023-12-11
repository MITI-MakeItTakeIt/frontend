import { create } from 'zustand';

interface GameState {
    gameAddress: string | null;
    setGameAddress: (data: string) => void;
}


const useAddressStore = create<GameState>((set) => ({
    gameAddress: null,
    setGameAddress: (data) => set({ gameAddress: data }),
}));
export default useAddressStore