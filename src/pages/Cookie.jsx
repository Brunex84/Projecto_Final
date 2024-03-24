import React, { useState } from 'react';

const Cookie = () => {
	const [cookieVisible, setCookieVisible] = useState(localStorage.consent ? false : true);

	const setCookie = () => {
		// Settar o cookie
		localStorage.consent = true;

		if (localStorage.consent) {
			// Se o cookie estiver setado
			hideCookieBox();
		} else {
			// Se o cookie não estiver setado
			showError();
		}
	};

	const showError = () => {
		alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
	};

	const hideCookieBox = () => {
		setCookieVisible(false);
	};

	// Ler o cookie

	return (
		<div class= 'cookie__container'>
		<div class={`cookie ${cookieVisible ? '' : 'hide'}`}>
			<img src='./media/cookie.jpg' alt='cookie image' class = "cookie__img" />
			<div class='content'>
				<header>Cookies Consent</header>
				<p>This website uses cookies to ensure you get the best experience on our website</p>
				<div class='buttons'>
					<button onClick={setCookie} class='item'>
						Agree
					</button>
					<a href='#' class='item'>
						Know more
					</a>
				</div>
			</div>
			</div>
		</div>
	);
};

export default Cookie;
