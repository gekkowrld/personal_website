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

