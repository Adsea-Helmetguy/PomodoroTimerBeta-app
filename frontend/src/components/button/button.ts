
export default function buttonContainer(id:string,img:string,classAppend:string): HTMLElement {

    const   container = document.createElement("div");
    const   button = document.createElement("button")

    container.className = "";
    button.className = "";
    button.id = id;
    button.className = `ease-out transform transition hover:scale-125 inline 
						delay 75 duration-200 bg-teal-400 px-6 py-2 m-6
						border-2 border-blue-500 hover:border-gray-500 
						hover:hover:text-black hover:opacity-50 hover:shadow-md ${classAppend}`;
    

    //container.appendChild()
    return (button);
}