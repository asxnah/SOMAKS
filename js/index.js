let controlNav = () => {
	let nav = document.querySelector(`.m-header nav`);
	let openNav = document.querySelector(`#open-nav`);
	let closeNav = document.querySelector(`#close-nav`);

	openNav.addEventListener(`click`, () => {
		nav.classList.add(`show`);
	});

	closeNav.addEventListener(`click`, () => {
		nav.classList.remove(`show`);
	});
};

let copyElements = () => {
	let copyList = document.querySelectorAll(`.copy`);

	// for each element with class copy
	copyList.forEach((copyEl) => {
		// on click
		copyEl.addEventListener(`click`, () => {
			// get what to copy and save it to clipboard
			let copyContent = copyEl.getAttribute(`data-copy`);
			navigator.clipboard
				.writeText(copyContent)
				// notify user
				.then(() => {
					alert(`Скопировано: ${copyContent}`);
				})
				.catch((err) => {
					alert(`Что-то пошло не так: ${err}`);
				});
		});
	});
};

controlNav();
copyElements();
