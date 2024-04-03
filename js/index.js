const renderServices = () => {
	let servicesNode = document.querySelector(`#services > .cards`);

	let services = [
		{
			name: 'Экспедирование',
			description:
				'Экспедирование в крупногабаритных перевозках относится к процессу организации и сопровождения перевозки грузов, которые по размеру, весу или форме не подходят для стандартных методов транспортировки, таких как автомобильные перевозки. Крупногабаритные грузы могут включать в себя тяжёлые машины, оборудование, крупные строительные материалы, а также очень крупные и тяжёлые контейнеры.',
		},
		{
			name: 'Перевозки открытым транспортом',
			description:
				'Перевозки открытым транспортом в крупногабаритных перевозках относятся к типу грузоперевозок, где груз не упакован и не защищен от воздействия окружающей среды, и его размеры превышают стандартные габариты, что делает его не подходящим для перевозки в контейнерах или других защищенных упаковках. Такие грузы могут включать в себя мебель, оборудование, строительные материалы и другие товары.',
		},
		{
			name: 'Крупногабаритные перевозки',
			description:
				'Крупногабаритные перевозки — это процесс перемещения грузов, которые из-за своих больших размеров или веса требуют особого подхода и специального оборудования. Эти грузы могут включать в себя технические устройства, строительные конструкции, транспортные средства и другие объекты. Перевозка таких грузов является сложной и ответственной задачей, требующей тщательного планирования.',
		},
		{
			name: 'Перевозки еврофурами',
			description:
				'Еврофура состоит из грузовика и полуприцепа, что позволяет перевозить больше груза по сравнению с фурой. Они обладают повышенной грузоподъемностью и могут оснащаться специальными системами, такими как хладильники или системы контроля температуры, что делает их идеальным выбором для перевозки грузов с определенными требованиями к условиям хранения и транспортировки.',
		},
	];

	for (i = 0; i <= services.length - 1; i++) {
		servicesNode.innerHTML += `
    <!-- card -->
    <div class="card">
			<p class="h3">${services[i].name}</p>
			<a href="#who" class="unln">Подробнее</a>
			<img class="bg-img" src="./assets/services/${
				i + 1
			}.jpg" alt="preview" loading="lazy" />
		</div>
    `;
	}
};

const swipeGallery = () => {
	const buttons = document.querySelectorAll('[data-carousel-button]');

	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
			const slides = button
				.closest('[data-carousel]')
				.querySelector('[data-slides]');

			const activeSlide = slides.querySelector('[data-active]');
			let newIndex = [...slides.children].indexOf(activeSlide) + offset;
			if (newIndex < 0) newIndex = slides.children.length - 1;
			if (newIndex >= slides.children.length) newIndex = 0;

			slides.children[newIndex].dataset.active = true;
			delete activeSlide.dataset.active;
		});
	});
};

const copyText = () => {
	let copyList = document.querySelectorAll('.copy');

	copyList.forEach(function (copyEl) {
		copyEl.addEventListener('click', function () {
			navigator.clipboard
				.writeText(this.innerText)
				.then(() => {
					console.log('Скопировано:', this.innerText);
					alert('Скопировано: ' + this.innerText);
				})
				.catch((err) => {
					console.error('Failed to copy text: ', err);
				});
		});
	});
};

renderServices();
swipeGallery();
copyText();
