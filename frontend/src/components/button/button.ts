export interface buttonProps{
	colour?:string;
	border?:string;
	hover?:boolean;
	focus?:boolean;
	// interaction?:boolean;
	// size?:string;
	// hover?:boolean;
	// textColour?:string;
	// shadow?:string;
	// border?:string;
	text?:string;
	other_addons?:string;
}
export interface classAppend {
	containerClass?:string | null;
	buttonClass?:string | null;
}
export interface buttonContainerId { 
	containerId?:string;
	buttonId:string | null;
}
export interface buttonContainerProps {
	id:buttonContainerId;
	classes:classAppend;
	customised?:buttonProps;
}

export function buttonContainer(props:buttonContainerProps): HTMLElement {
	const	ids = props.id;
	const	classes = props.classes;
	const	customised = props.customised;

	const	button = document.createElement("button");
	const	container = document.createElement("div");

	container.id = `${ids.containerId}`;
	container.className = `${classes.containerClass}`;
	button.id = `${ids.buttonId}`;
	button.className = `ease-out transform transition inline px-6 py-2 m-0 \
						delay 75 duration-200 bg-blue-800 rounded-4xl \
						${classes.buttonClass}`;
	
	if (customised && customised.text)
		button.textContent = `${customised.text}`;
	if (customised) {
		if (customised.colour) {
			button.classList.remove(`bg-blue-800`);
			button.classList.add(customised.colour);
		}
		if (customised.border)
			button.classList.add(customised.border);
		if (customised.hover && customised.hover === true)
			button.classList.add("hover:scale-125", "hover:bg-sky-100", "hover:shadow-md");
		if (customised.focus && customised.focus === true)
			button.classList.add("focus:ring-4", "focus:ring-blue-300");
		if (customised.other_addons)
			button.classList.add(`${customised.other_addons}`);
	}

	container.appendChild(button);
	return (container);
}
