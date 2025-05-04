let controlNav = () => {
	let nav = document.querySelector(`.m-header nav`);
	let openNav = document.querySelector(`#open-nav`);
	let closeNav = document.querySelector(`#close-nav`);
	let navLinks = nav.querySelectorAll(`a`);

	openNav.addEventListener(`click`, () => {
		nav.classList.add(`show`);
	});

	closeNav.addEventListener(`click`, () => {
		nav.classList.remove(`show`);
	});

	navLinks.forEach((link) => {
		link.addEventListener(`click`, () => {
			nav.classList.remove(`show`);
		});
	});
};

let copyElements = () => {
	let copyList = document.querySelectorAll(`.copy`);

	copyList.forEach((copyEl) => {
		copyEl.addEventListener(`click`, () => {
			let copyContent = copyEl.getAttribute(`data-copy`);
			navigator.clipboard
				.writeText(copyContent)
				.then(() => {
					alert(`Скопировано ${copyContent}`);
				})
				.catch((err) => {
					alert(`Что-то пошло не так. Попробуйте ещё раз позже.`);
				});
		});
	});
};

controlNav();
copyElements();
