// отображение фото вместо видео, если видео не прогрузилось за 15 сек
document.addEventListener('DOMContentLoaded', () => {
	let summaryVideo = document.querySelector(`.summary-bg-video`);
	let fallbackImage = document.querySelector(`.fallback-image`);
	let timeout = 15000; // 15 секунд

	summaryVideo.addEventListener('loadeddata', () => {
		fallbackImage.style.display = 'none';
	});

	summaryVideo.addEventListener('error', () => {
		fallbackImage.style.display = 'block';
	});

	setTimeout(function () {
		if (summaryVideo.readyState === 0) {
			fallbackImage.style.display = 'block';
		}
	}, timeout);
});

let controlNav = () => {
	let nav = document.querySelector(`#mobile-nav`);
	let openBtn = document.querySelector(`#open-nav`);
	let closeBtn = document.querySelector(`#close-nav`);

	openBtn.addEventListener(`click`, () => {
		nav.classList.add(`show`);
	});

	closeBtn.addEventListener(`click`, () => {
		nav.classList.remove(`show`);
	});
};

let copyElements = () => {
	let email = document.querySelector(`#email-to-copy`);
	let number_1 = document.querySelector(`#number-to-copy-1`);
	let number_2 = document.querySelector(`#number-to-copy-2`);

	email.addEventListener(`click`, () => {
		navigator.clipboard
			.writeText(`zorina.olga.73@mail.ru`)
			.then(() => {
				console.log('Скопировано:', `zorina.olga.73@mail.ru`);
				alert('Скопировано: ' + `zorina.olga.73@mail.ru`);
			})
			.catch((err) => {
				console.error('Failed to copy text: ', err);
			});
	});

	number_1.addEventListener(`click`, () => {
		navigator.clipboard
			.writeText(`+7 912-591-05-44`)
			.then(() => {
				console.log('Скопировано:', `+7 912-591-05-44`);
				alert('Скопировано: ' + `+7 912-591-05-44`);
			})
			.catch((err) => {
				console.error('Failed to copy text: ', err);
			});
	});

	number_2.addEventListener(`click`, () => {
		navigator.clipboard
			.writeText(`+7 967-903-95-97`)
			.then(() => {
				console.log('Скопировано:', `+7 967-903-95-97`);
				alert('Скопировано: ' + `+7 967-903-95-97`);
			})
			.catch((err) => {
				console.error('Failed to copy text: ', err);
			});
	});
};

controlNav();
copyElements();
