import { create } from 'zustand';

interface GameState {
    gamesByDateData: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    setGamesByDateData: (data: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
}


const useGameStore = create<GameState>((set) => ({
    gamesByDateData: null,
    setGamesByDateData: (data) => set({ gamesByDateData: data }),
}));
export default useGameStore