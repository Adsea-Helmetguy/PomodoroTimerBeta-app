import { buttonContainer } from "./button.js";

//time
let timeLeft = 25 * 60; //default, 25mins
//let timer: number | null = null;

function	update_timerDisplay(): HTMLElement {
	const timerDisplay = document.createElement("div");
	timerDisplay.id = "timer";

	//when Math.floor returns a value, then next '.command' will execute,
	// Which in this case it's '.toString' which converts number to string
	// *1) and then to pad to always show two sets of characters
	// const	mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
	const	mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
	const	secs = Math.floor(timeLeft % 60).toString().padStart(2, '0');
	timerDisplay.textContent = `${mins}:${secs}`;

	// timerDisplay.className = ""

	return (timerDisplay);
}

export function pomodoro_creator(): HTMLElement {
	//https://tailwindcss.com/docs/background-color
	const	startButton = buttonContainer({classes:{buttonClass:"flex justify-center"}, id:{buttonId:"Start"}, customised:{text: "Start", colour: "bg-sky-400"}});
	const   pauseButton = buttonContainer({classes:{buttonClass:"flex justify-center"}, id:{buttonId:"Pause"}, customised:{text: "Rest", colour: "bg-green-400"}});
	const	resetButton = buttonContainer({classes:{buttonClass:"flex justify-center"}, id:{buttonId:"Reset"}, customised:{text: "Pause", colour: "bg-red-400"}});
	const	timerDisplay = update_timerDisplay();

	// startButton.addEventListener('click', startTimer);
	// pauseButton.addEventListener('click', pauseTimer);
	// resetButton.addEventListener('click', resetTimer);


	const	pomodoro = document.createElement("div");
	pomodoro.id = "pomodoro";
	pomodoro.className = "flex flex-col p-2";

	const	pomodoro_buttons = document.createElement("div");
	pomodoro_buttons.id = "pomodoro";
	pomodoro_buttons.className = "flex flex-row justify-center p-2";

	pomodoro_buttons.append(startButton , pauseButton, resetButton);
	pomodoro.append(pomodoro_buttons, timerDisplay);
	return (pomodoro);
}





// //time
// let timeLeft = 25 * 60; //default, 25mins
// let timer: number | null = null;

// const	startButton = buttonContainer({classes:{buttonClass:"flex justify-center"}, id:{buttonId:"Start"}});
// const   pauseButton = buttonContainer({classes:{buttonClass:"flex justify-center"}, id:{buttonId:"Pause"}});
// const	resetButton = buttonContainer({classes:{buttonClass:"flex justify-center"}, id:{buttonId:"Reset"}});

// const timerDisplay = document.createElement("div");
// // timerDisplay.className = ""
// timerDisplay.id = "timer";
// timerDisplay.textContent = "25:00";




// // document.body.appendChild(timerDisplay);

// startButton.addEventListener('click', startTimer);
// pauseButton.addEventListener('click', pauseTimer);
// resetButton.addEventListener('click', resetTimer);





/*
Links:
*1) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
*/