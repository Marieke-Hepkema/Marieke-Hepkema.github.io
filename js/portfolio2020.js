
var profileimg = document.getElementById("profileillustration");

profileimg.addEventListener("mouseover",mouseOver);
profileimg.addEventListener("mouseout",mouseOut);

function mouseOver(){
	profileimg.src="styles/images/wink.svg";
}

function mouseOut(){
	profileimg.src="profileillustration.svg";
}