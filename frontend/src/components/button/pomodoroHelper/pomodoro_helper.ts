export function meowMp3 () {
    const meow = new Audio('/resources_png_mp3/cat_meow.mp3');
	meow.play();
}

export function NotifyToast_header(Msg: string, duration: number) {
	const smallbox = document.createElement("div");
	smallbox.className = "fixed top-20 left-1/2 transform -translate-x-1/2 \
		bg-gray-800 text-white px-4 py-2 rounded shadow-lg \
        opacity-0 transition-all duration-500";
	smallbox.textContent = Msg;
	document.body.append(smallbox);

	// Animate in
    setTimeout(() => {
        smallbox.classList.add("opacity-100");
    }, 50);

    // Animate out and remove after duration
    setTimeout(() => {
        smallbox.classList.remove("opacity-100");
        setTimeout(() => smallbox.remove(), 500);
    }, duration);
}

