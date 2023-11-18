let api_url = "https://api.quotable.io/random?maxLength=50";
let quote = fetch(api_url)
			.then(response => response.json())
			.then(data => {
				let page_quote = document.querySelector("aside");
				let q_span = document.createElement("q");
				q_span.classList.add("quote_q");
				let a_span = document.createElement("cite");
				a_span.classList.add("quote_cite");
				a_span.innerText = data.author;
				q_span.innerText = data.content;
				page_quote.appendChild(q_span);
				page_quote.appendChild(a_span);
			});
	.then((response) => response.json())
	.then((data) => {
		let page_quote = document.querySelector("aside");
		let q_span = document.createElement("q");
		q_span.classList.add("quote_q");
		let a_span = document.createElement("cite");
		a_span.classList.add("quote_cite");
		a_span.innerText = data.author;
		q_span.innerText = data.content;
		page_quote.appendChild(q_span);
		page_quote.appendChild(a_span);
	});

const name_field = document.querySelector("#name");
const msg_field = document.querySelector("#msg");
const form_field = document.querySelector("form");
let err_span = document.createElement("span");
err_span.classList.add("form_error");
const nameRegex = /^[a-zA-Z ]+(?:-[a-zA-Z]+)*$/;
let sendBtn = document.createElement("input");
sendBtn.setAttribute("type", "submit");
sendBtn.setAttribute("value", "Send");
sendBtn.setAttribute("id", "send_btn");
sendBtn.style.cursor = "not-allowed";
form_field.insertAdjacentElement("afterend", sendBtn);

let name_is_okay = false;
let msg_is_okay = false;

name_field.addEventListener("input", (e) => {
	let value = e.target.value;
	let text_length = value.length;
	if (text_length < 5 || value.length < 5 || !nameRegex.test(value)) {
		err_span.innerText = "Enter a valid name";
		name_field.insertAdjacentElement("afterend", err_span);
		name_field.classList.add("f_field_err");
		name_is_okay = false;
	} else {
		if (name_field.nextSibling === err_span) {
			name_field.parentNode.removeChild(err_span);
			name_field.classList.remove("f_field_err");
			name_is_okay = true;
		}
	}

	updateButton();
});

document.querySelector("#msg").addEventListener("input", (e) => {
	let value = e.target.value;
	let text_length = value.length;
	if (text_length < 20) {
		err_span.innerText = "Text length should be more than 20";
		msg_field.insertAdjacentElement("afterend", err_span);
		msg_field.classList.add("f_field_err");
		msg_is_okay = false;
	} else {
		if (msg_field.nextSibling === err_span) {
			msg_field.parentNode.removeChild(err_span);
			msg_field.classList.remove("f_field_err");
			msg_is_okay = true;
		}
	}

	updateButton();
});

function updateButton() {
	if (msg_is_okay && name_is_okay) {
		sendBtn.style.cursor = "pointer";
	} else {
		sendBtn.style.cursor = "not-allowed";
	}
}
