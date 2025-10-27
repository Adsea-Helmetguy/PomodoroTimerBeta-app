// define allowed colors
type TailwindColor = "green" | "blue" | "yellow"; // etc

const radius_colourMap: Record<TailwindColor, string> = {
    green: "text-green-500 border-green-500",
    blue: "text-sky-500 border-sky-500",
    yellow: "text-yellow-500 border-yellow-500",
};

const timer_colourMap: Record<TailwindColor, string> = {
    green: "text-green-500 border-green-500",
    blue: "text-sky-500 border-sky-500",
    yellow: "text-yellow-500 border-yellow-500",
};

interface Timer {
    radiusBg_colour:TailwindColor;
	timertext_colour:TailwindColor;
    time_mins: string;
    time_secs: string;
    isStarted: boolean;
}

/*
const myTimer: Timer = {
  border_radius: 12,
  radiusBg_colour: { color: "green" },
  isStarted: false,
};

// get Tailwind classes for this timer
const classes = colorMap[myTimer.radiusBg_colour.color];
*/

//initialTime: string = "00:01"
export function	timerUI (props:Timer): HTMLElement {
	const	radius_colour = radius_colourMap[props.radiusBg_colour];
	const	timer_colour = timer_colourMap[props.timertext_colour];
    const   mins = props.time_mins;
    const   secs = props.time_secs;
    //const	timerState = props.isStarted;

    // if (timerState != true)
    //     return;
    //container
    const	timerCircle_container = document.createElement("div");
    timerCircle_container.id = "timer_container";
    timerCircle_container.className = "timer-circle relative flex justify-center items-center p-30";//text-9xl font-bold

    // left half-circle
    const circleLeft = document.createElement("div");
	circleLeft.className = `circle-left absolute w-90 h-90 rounded-full border-4 ${radius_colour}`;

    // right half-circle
    const circleRight = document.createElement("div");
	circleRight.className = `circle-left absolute w-90 h-90 rounded-full border-4 ${radius_colour}`;

    // timer text in center
    const timerText = document.createElement("div");
    timerText.id = "timer";
    timerText.className = "flex justify-center items-center text-9xl font-bold";
    timerText.textContent = `${mins}:${secs}`;

    timerCircle_container.append(circleLeft, circleRight, timerText);
    return timerCircle_container;
}
/*
links:
https://medium.com/@volochkov/how-to-create-countdown-timer-on-pure-css-2c0460391a32
*/
