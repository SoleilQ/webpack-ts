import { create } from 'zustand';

interface BaerState {
  bears: number;
  increasePopulation: () => void;
}

export const useBearStore = create<BaerState>(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export const useDogStore = create(() => ({
  paw: true,
  snout: true,
  fur: true,
}));

const paw = useDogStore.getState().paw;

const ubsub = useDogStore.subscribe(console.log);

useDogStore.setState({ paw: false });
