const menuElement = document.getElementById("menu");
const menuButtons = [
  // HREF, Icon, Title, Prompt Msg
	["index.html", "resources/home.png", "Home", ""],
	
	["accounts.html", "resources/accounts.png", "Accounts", ""],
	
	["art.html", "resources/my art.png", "Art",
		`You are about to visit "Art".
    Do not steal my art and claim it as your own.
    Sharing my art is OK as long as credit is provided.`],
	
	["characters.html", "resources/my characters.png", "Characters", 
		`You are about to visit "Characters".
    Do not claim my characters as your own.`],
	
	["credits.html", "resources/credits.png", "Credits", ""]
];

for (let i = 0; i <= menuButtons.length - 1; i++) {
  let link = document.createElement("a");
  link.className = "icon";

  // don't link the button if we already went to the page
	if (!document.URL.includes(menuButtons[i][0])) {
	  link.href = menuButtons[i][0];
		// add prompt if the string ain't empty 
		if (menuButtons[i][3]) {
			link.onclick = () => {return confirm(`${menuButtons[i][3]}`);};
		}
	}

  link.title = menuButtons[i][2];
  link.draggable = false;

  menuElement.appendChild(link);
  
  let image = document.createElement("img");
  image.src = menuButtons[i][1];
  image.alt = menuButtons[i][2];
  image.draggable = false;
  link.appendChild(image);
	
	let label = document.createElement("p");
	label.innerText = menuButtons[i][2];
	link.appendChild(label);
}
