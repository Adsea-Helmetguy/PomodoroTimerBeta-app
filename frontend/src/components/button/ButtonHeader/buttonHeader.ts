import { stateTimer, switchPhase, handlePhaseEnd, timeforPomodoro, timeforRest, timeforLongRest, cyclePomodoro, cycleRest, cycleLongrest } from "../pomodoroState/pomodoroState";

let rest_time = 5 * 60;
let timer = rest_time;

export function buttonHeader_pomodoro() {
	switchPhase("pomodoro");
}

export function buttonHeader_rest() {
	switchPhase("rest");
}

export function buttonHeader_longrest() {
	switchPhase("longrest");
}