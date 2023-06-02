const tabs = document.querySelectorAll(`.tab__title`);
const slides = document.querySelectorAll(`.features__slide`);
const faqTitles = document.querySelectorAll(`.faq__title`);
const faqDescriptions = document.querySelectorAll(`.faq__description`);
const hamburgerIcon = document.querySelector(`.hamburger-icon`);
const closeIcon = document.querySelector(`.close-icon`);
const loginButton = document.querySelector(`.login`);
const iconArrows = document.querySelectorAll(`.icon--arrow`);

const mainNav = document.querySelector(`.nav.main`);
const mainNavWrapper = document.querySelector(`.nav__wrapper.main`);

const contactForm = document.querySelector(`.contact__form`);
const emailInput = document.querySelector(`#email-input`);
const contactButton = document.querySelector(`#contact-button`);

for (let i = 0; i < tabs.length; i++) {
	const tab = tabs[i];
	const slide = slides[i];
	[`click`].forEach((events) => {
		tab.addEventListener(events, () => {
			// if (!tabs[i].classList.contains(`active`)) {
			// 	tabs.forEach((tab) => tab.classList.remove(`active`));
			// 	slides.forEach((slide) => slide.classList.remove(`active`));
			// 	setTimeout(function () {
			// 		slides[i].classList.add(`active`);
			// 		tab.classList.add(`active`);
			// 	}, 250);
			// }
			if (!tab.classList.contains(`active`)) {
				tabs.forEach((tab) => tab.classList.remove(`active`));
				slides.forEach((slide) => slide.classList.remove(`active`));
				tab.classList.add(`active`);
				slide.classList.add(`active`);
			}
		});
	});
}

for (let i = 0; i < faqTitles.length; i++) {
	const title = faqTitles[i];
	const description = faqDescriptions[i];
	const iconArrow = iconArrows[i];
	[`click`].forEach((events) => {
		title.addEventListener(events, () => {
			if (title.classList.contains(`active`)) {
				title.classList.remove(`active`);
				description.classList.remove(`active`);
				iconArrow.classList.remove(`active`);
			} else {
				faqTitles.forEach((title) => title.classList.remove(`active`));
				faqDescriptions.forEach((description) =>
					description.classList.remove(`active`)
				);
				iconArrows.forEach((icon) => icon.classList.remove(`active`));
				iconArrow.classList.toggle(`transition`);
				setTimeout(() => {
					iconArrow.classList.toggle(`transition`);
				}, 1000);
				description.classList.add(`active`);
				title.classList.add(`active`);
				iconArrow.classList.add(`active`);
			}
		});
	});
}

hamburgerIcon.addEventListener(`click`, () => {
	mainNav.classList.toggle(`active`);
	mainNavWrapper.classList.toggle(`active`);
	hamburgerIcon.classList.toggle(`active`);
	closeIcon.classList.toggle(`active`);
	loginButton.classList.toggle(`outline`);
});

closeIcon.addEventListener(`click`, () => {
	mainNav.classList.toggle(`active`);
	mainNavWrapper.classList.toggle(`active`);
	hamburgerIcon.classList.toggle(`active`);
	closeIcon.classList.toggle(`active`);
	loginButton.classList.toggle(`outline`);
});

// Email validation function
const validateEmail = (email) => {
	// Full Regex Email Pattern
	// const reFull = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	const re = /^\S+@\S+\.\S+$/;
	return re.test(email);
};

contactForm.addEventListener("submit", (e) => {
	console.log(emailInput.value);
	if (!validateEmail(emailInput.value)) {
		contactForm.classList.add("error");
		e.preventDefault(); // Prevent the form from submitting
	} else {
		contactForm.classList.remove("error");
	}
});
