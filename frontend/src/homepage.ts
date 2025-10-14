import { renderHeader } from "./header/header";
// import { API_BASE } from "./variable"

//For reference:
//https://tailwind.build/classes
export async function renderHomePage(container: HTMLElement) {

	renderHeader(container);

	const homePage = document.createElement("div");
	homePage.className = "h-screen flex items-center justify-center flex-col bg-gray-100";

	//title
	const title = document.createElement("h1");
	title.className = "text-2xl font-bold text-center";

	//name of the logged in user
	const user_name = document.createElement("span");
	user_name.className = "text-2xl font-bold underline text-center";
	user_name.textContent = "User";

	const isLoggedIn = localStorage.getItem("id");//get the user id
	if (isLoggedIn) {
		title.append(document.createTextNode("Welcome \""));
		title.append(user_name);//insert name here (test atm)
		title.append(document.createTextNode("\"!"));
		title.append(document.createElement("br"));
		title.append(document.createTextNode("Another Good Day to play pong!"));
	} else {
		title.append(document.createTextNode("Hello!"));
		title.append(document.createElement("br"));
		title.append(document.createTextNode("Welcome to our FT_Transcendence Project!"));
	}

	const playLink = document.createElement("a");
	playLink.href = "/play";
	playLink.className =
	"w-48 bg-sky-500 text-white px-4 py-2 rounded-md text-center " +
	"hover:bg-sky-600 transition animate-pulse text-sm inline-block";
	playLink.textContent = "Open The Game!";
	
	const tooltipDiv = document.createElement("div");
	tooltipDiv.className =
	  "tooltip absolute left-1/2 -translate-x-1/2 mt-1 w-max text-sm text-gray-800 bg-white " +
	  "border border-gray-300 rounded shadow-lg px-2 py-1 opacity-0 group-hover:opacity-100 " +
	  "transition-opacity duration-200 pointer-events-none transition-all duration-1000";
	tooltipDiv.textContent = "GO AHEAD MR JOESTAR!";

	const wrapper = document.createElement("div");
	wrapper.className = "relative group inline-block";
	wrapper.append(playLink, tooltipDiv);
	homePage.append(title, wrapper);
	container.append(homePage);

   return container;
}



