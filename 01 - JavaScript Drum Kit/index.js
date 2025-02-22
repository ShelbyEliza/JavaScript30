function playSound(e) {
	const audio = document.querySelector(`audio[data-key='${e.code}']`);
	const key = document.querySelector(`.key[data-key='${e.code}']`);
	if (!audio) return; // stops function from running entirely
	audio.currentTime = 0; // rewinds to start of sound
	audio.play();
	key.classList.add("playing");
}

function removeTransition(e) {
	if (e.propertyName !== "transform") return; // skip it if it's not a transform
	this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
