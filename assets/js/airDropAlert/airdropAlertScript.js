import { data } from "./data.js";
const airdropWrapperSections = document.querySelectorAll(".header__top-animation");

	if (airdropWrapperSections) {
		// airdropWrapperSections.forEach((airdropWrapperSection)=>{
		// 	const airdropWrapper = document.createElement("div");
		// 	airdropWrapper.classList.add("header__top-content");
	
		// function createElement(element) {
		// 		const { id, name, imgScr, imgAlt, link, current } = element;
		// 		const template = document.createElement("a");
		// 		template.href = link;
		// 		template.classList.add("header__container-link");
		// 		template.innerHTML = `
		// 				${imgScr ? `
		// 				<img class="img" src="${imgScr}" alt="${imgAlt}">
		// 				` : ""}
		// 				<span>${name}</span>
		// 				<span>$${current}</span>
		// 		`;
		// 		return template;
		// }
	
		// 			const fragment = new DocumentFragment();
	
		// 			data.forEach((element) => {
		// 					const template = createElement(element);
		// 					fragment.appendChild(template);
		// 			});
	
		// 			airdropWrapper.appendChild(fragment);
		// 				airdropWrapperSection.appendChild(airdropWrapper);

		// 				function setupInstances() {
		// 						const parentWidth = airdropWrapperSection.clientWidth;
		// 						const childWidth = airdropWrapperSection.children[0].offsetWidth;

		// 						if (!parentWidth || !childWidth) {
		// 								console.error("Cannot calculate parent or child width:", {
		// 										parentWidth,
		// 										childWidth,
		// 								});
		// 								return;
		// 						}

		// 						const numInstances = Math.ceil(parentWidth / childWidth) + 1;

		// 						while (airdropWrapperSection.children.length < numInstances) {
		// 								for (let i = 0; i < numInstances; i++) {
		// 										const clone = airdropWrapperSection.children[i].cloneNode(true);
		// 										clone.classList.remove("header__top-content");
		// 										clone.classList.add("header__top-content-second");
		// 										airdropWrapperSection.appendChild(clone);
		// 								}
		// 						}
		// 				}

		// 				setupInstances();
		// 				window.addEventListener("resize", setupInstances);

		// 				const animationAirdropBlocks = document.querySelectorAll('.header__container-link');
		// 				const animationAirdropWrappers = document.querySelectorAll('.header__top-content');
		// 				const animationAirdropWrapperClones = document.querySelectorAll('.header__top-content-second');

		// 				animationAirdropBlocks.forEach((block) => {
		// 						block.addEventListener('mouseenter', () => {
		// 								animationAirdropWrappers.forEach(wrap => wrap.style.animationPlayState = "paused");
		// 								animationAirdropWrapperClones.forEach(clone => clone.style.animationPlayState = "paused");
		// 						});

		// 						block.addEventListener('mouseleave', () => {
		// 							animationAirdropWrappers.forEach(wrap => wrap.style.animationPlayState = "running");
		// 								animationAirdropWrapperClones.forEach(clone => clone.style.animationPlayState = "running");
		// 						});
		// 				});

		// })	


		airdropWrapperSections.forEach((airdropWrapperSection) => {
			const airdropWrapper = document.createElement("div");
			airdropWrapper.classList.add("header__top-content");
	
			function createElement(element) {
					const { id, name, imgScr, imgAlt, link, current } = element;
					const template = document.createElement("a");
					template.href = link;
					template.classList.add("header__container-link");
					template.innerHTML = `
							${imgScr ? `<img class="img" src="${imgScr}" alt="${imgAlt}">` : ""}
							<span>${name}</span>
							<span>$${current}</span>
					`;
					return template;
			}
	
			const fragment = new DocumentFragment();
	
			data.forEach((element) => {
					const template = createElement(element);
					fragment.appendChild(template);
			});
	
			airdropWrapper.appendChild(fragment);
			airdropWrapperSection.appendChild(airdropWrapper);
	
			function setupInstances() {
					const parentWidth = airdropWrapperSection.clientWidth;
					const childWidth = airdropWrapper.children[0].offsetWidth;
	
					if (!parentWidth || !childWidth) {
							console.error("Cannot calculate parent or child width:", {
									parentWidth,
									childWidth,
							});
							return;
					}
	
					const numInstances = Math.ceil(parentWidth / childWidth) + 1;
					let currentIndex = 0;
	
					while (airdropWrapper.children.length < numInstances) {
							for (let i = 0; i < numInstances; i++) {
									const clone = airdropWrapper.children[i].cloneNode(true);
									clone.classList.remove("header__top-content");
									clone.classList.add("header__top-content-second");
									airdropWrapper.appendChild(clone);
							}
					}
	
					const totalWidth = Array.from(airdropWrapper.children).reduce((total, child) => {
							return total + child.offsetWidth;
					}, 0);
	
					// Визначаємо бажану швидкість (наприклад, 100 пікселів на секунду)
					const speed = 35; // пікселі на секунду
					const duration = totalWidth / speed; // розраховуємо тривалість анімації
	
					// Застосовуємо тривалість до анімації
					airdropWrapper.style.animationDuration = `${duration}s`;
					// airdropWrapper.style.animationIterationCount = "infinite"; // анімація повторюється нескінченно
					// airdropWrapper.style.animationTimingFunction = "linear"; // плавна анімація
			}
	
			setupInstances();
			window.addEventListener("resize", setupInstances);
	
			const animationAirdropBlocks = document.querySelectorAll('.header__container-link');
			const animationAirdropWrappers = document.querySelectorAll('.header__top-content');
	
			animationAirdropBlocks.forEach((block) => {
					block.addEventListener('mouseenter', () => {
							animationAirdropWrappers.forEach(wrap => wrap.style.animationPlayState = "paused");
					});
	
					block.addEventListener('mouseleave', () => {
							animationAirdropWrappers.forEach(wrap => wrap.style.animationPlayState = "running");
					});
			});
	});
	
		

	}
