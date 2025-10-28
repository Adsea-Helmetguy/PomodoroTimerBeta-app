import { update_timerDisplay } from "./pomodoroButton.js"

//time
export let	timeforPomodoro = 1; //25 * 60
export let	timeforRest = 5 * 60;
export let	timeforLongRest = 15 * 60;
let  timer: number | null = null;

// type    button_status = "start" | "pause" | "resume" | "stop";
// interface ButtonState {
// 	start: string;
//     pause: number;
//     resume: number;
//     stop: number | null;
// }

type    appState = "pomodoro" | "rest" | "longrest";
interface PomodoroAppState {
	state: appState;
    timeLeft: number;
    cycleCount: number;
    timer: number | null;
}

const pomodoroState: Record<appState, PomodoroAppState> = {
    pomodoro: { state: "pomodoro", timeLeft: timeforPomodoro, cycleCount: 0, timer: timer },
    rest: { state: "rest", timeLeft: timeforRest, cycleCount: 0, timer: timer },
    longrest: { state: "longrest", timeLeft: timeforLongRest, cycleCount: 0, timer: timer },
};

export let stateTimer: PomodoroAppState = {
    state: "pomodoro",
    timeLeft: timeforPomodoro,
    cycleCount: 0,
    timer: null,
};

export function switchPhase(next: appState) {
	stateTimer = { ...pomodoroState[next] };
}

export function handlePhaseEnd() {
    stateTimer.cycleCount++;

    if (stateTimer.cycleCount % 4 === 0)
        switchPhase("longrest");
    else
        switchPhase("rest");
    update_timerDisplay();
}







// function updateUIPhase() {
//   let color: TailwindColor;

//   switch (appState.message) {
//     case "pomodoro":
//       color = "blue";
//       break;
//     case "rest":
//       color = "green";
//       break;
//     case "long_rest":
//       color = "yellow";
//       break;
//   }

//   // recreate or recolor timer
//   const container = document.getElementById("timer_container");
//   if (container) container.remove(); // clear old one

//   const newTimer = timerUI({
//     radiusBg_colour: color,
//     timertext_colour: color,
//     time_mins: Math.floor(appState.timeLeft / 60).toString().padStart(2, '0'),
//     time_secs: Math.floor(appState.timeLeft % 60).toString().padStart(2, '0'),
//     isStarted: true,
//   });

//   document.body.appendChild(newTimer);
// }

// function switchPhase() {
//   if (appState.message === "pomodoro") {
//     appState.cycleCount++;
//     if (appState.cycleCount % 4 === 0) {
//       // every 4th pomodoro → long rest
//       appState.message = "long_rest";
//       appState.timeLeft = timeforLongRest;
//     } else {
//       // normal rest
//       appState.message = "rest";
//       appState.timeLeft = timeforRest;
//     }
//   } else {
//     // after any rest → back to pomodoro
//     appState.message = "pomodoro";
//     appState.timeLeft = timeforPomodoro;
//   }

//   // visually reflect the phase
//   updateUIPhase();
// }

// function startTimer() {
//   if (timer) clearInterval(timer);
//   timer = setInterval(() => {
//     appState.timeLeft--;
//     update_timerDisplay();
//   }, 1000);
// }