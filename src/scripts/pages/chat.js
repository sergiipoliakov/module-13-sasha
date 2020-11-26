import "../../styles.scss";
ш;

const ws = new WebSocket("wss://echo.websocket.org");
const chaatFormRef = document.querySelector(".chat-form");

ws.onopen = function (e) {
	console.log("connection opened");
	ws.send("User connected");
};

ws.onmessage = function (event) {
	console.log(event);
};

const sendMessage = (event) => {
	event.preventDefault();

	const { currentTarget: chatForm } = event;
	const { value } = chatForm.elements.message;
	console.log(value);
};
chaatFormRef.addEventListener("submit", sendMessage);
