// import {createStore} from "zustand/vanilla";
// import {useTimer} from "../../stores/timerStore.ts"

// const seconds = useTimer((state)=>state.seconds);
// const minutes = useTimer((state)=>state.seconds);
// const setTimer = useTimer((state)=>state.setTimer);

// interface Timer {
//   minutes: number;
//   seconds: number;
//   isStarted: boolean;
// }

// //when using a hook for zustand - start name with use and hook function
// //when creating a native hook - ensure file name is use(Hook)
// export const useTimer = createStore((set) => ({
//   minutes: 0,
//   seconds: 0,
//   isStarted: false,
//   startButton:true,
//   setTimer: (time: Timer) => set((time: Timer) => ({ minutes: time.minutes, seconds:time.seconds,isStarted:false })),
//   resetTimer: () => set({ minutes:25,seconds:0,isStarted:false }),
//   startTimer:()=> set({isStarted:true}),
// }));