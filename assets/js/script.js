window.addEventListener("load", () => {

	gsap.registerPlugin(ScrollTrigger);

	let backgroundAnimationTimeline = gsap.timeline({ repeat: -1 });
	backgroundAnimationTimeline.to(".o-page__bg__vline", {
			scaleY: 1,
			duration: 1.5,
			stagger: 0.1,
			ease: "sine.out"
	}, 0)
	.to(".o-page__bg__hline", {
			scaleX: 1,
			duration: 1.5,
			stagger: 0.1,
			ease: "sine.out"
	}, 0)
	.to(".o-page__bg__vline", {
			scaleY: 0,
			duration: 1.5,
			stagger: 0.1,
			transformOrigin: "bottom center",
			ease: "sine.out"
	}, ">")
	
	.to(".o-page__bg__hline", {
			scaleX: 0,
			duration: 1.5,
			stagger: 0.1,
			transformOrigin: "right center",
			ease: "sine.out"
	}, "<0.1");

});

document.addEventListener("DOMContentLoaded", function () {
	airDropWrapperScroll();
	toggleMenu();
	observeElements();
});	

const toggleMenu = () =>{
	const htmlElement = document.querySelector("html");
	const burgerMenu = document.querySelector(".burgerBtn");
  // const headerNav = document.querySelector(".header__nav");
  const navLinks = document.querySelectorAll("nav a");

  burgerMenu.addEventListener("click", () =>
    htmlElement.classList.toggle("open")
  );

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      htmlElement.classList.remove("open");
    });
  });
}

const airDropWrapperScroll = () => {
	const wrappers = document.querySelectorAll('.scroll-wrapper');
	
	const minHeight = 100; 

	wrappers.forEach((wrapper) => {
		const wrapperIncludeContent = wrapper.querySelectorAll('.scroll__item');
		const wrapperHeight = wrapper.clientHeight;
		let totalContentHeight = 0;
		wrapperIncludeContent.forEach(item => {
				totalContentHeight += item.clientHeight;
		});
		if (totalContentHeight <= wrapperHeight) {
				wrapper.classList.add('short');
		} else {
				wrapper.classList.remove('short'); 
		}
			const progressBar = wrapper.querySelector('.progress-bar');
			progressBar.style.transform = `scaleY(${minHeight / wrapperHeight})`;
			wrapper.addEventListener('scroll', () => {
					const scrollTop = wrapper.scrollTop;
					const scrollHeight = wrapper.scrollHeight - wrapper.clientHeight;
					const scrollRatio = scrollTop / scrollHeight;
					let scaleY = scrollRatio * (wrapperHeight - minHeight) / wrapperHeight + (minHeight / wrapperHeight);
					scaleY = Math.min(scaleY, 1);
					progressBar.style.transform = `scaleY(${scaleY})`;
			});
	});
};
// const observeElements = () => {
// 	const elements = document.querySelectorAll('.choose__items');

// 	if (elements.length === 0) {
// 			console.error('Не знайдено елементів для спостереження');
// 			return;
// 	}

// 	const observerOptions = {
// 			root: null, // viewport як кореневий контейнер
// 			rootMargin: '0px',
// 			threshold: Array.from({ length: 101 }, (_, i) => i / 100) // Пороги для перевірки видимості
// 	};

// 	const observerCallback = (entries) => {
// 			entries.forEach(entry => {
// 					const rect = entry.boundingClientRect;
// 					const viewportHeight = window.innerHeight;
// 					const elementHeight = rect.height;

// 					// Верхня і нижня частини видимого вікна
// 					const topVisible = Math.max(rect.top, 0);
// 					const bottomVisible = Math.min(rect.bottom, viewportHeight);

// 					// Обчислення видимої частини елемента
// 					const visibleHeight = Math.max(0, bottomVisible - topVisible);

// 					// Обчислення відсотка видимості
// 					const visibilityRatio = visibleHeight / elementHeight;
// 					const visibilityPercentage = Math.round(visibilityRatio * 100);

// 					// Відсоток пройденого елемента через екран
// 					const topCrossed = Math.max(0, Math.min(rect.top, viewportHeight));
// 					const bottomCrossed = Math.max(0, Math.min(rect.bottom, viewportHeight));
// 					const crossedHeight = bottomCrossed - topCrossed;
// 					const crossedPercentage = (crossedHeight / elementHeight) * 100;

// 					// Перевірка, чи елемент повністю пройшов через екран
// 					if (rect.bottom <= viewportHeight && rect.top >= 0) {
// 							console.log(`Елемент ${entry.target.id || 'без id'} пройшов через ${crossedPercentage.toFixed(2)}% екрану.`);
// 					}

// 					// Якщо нижня частина елемента досягає нижньої межі видимого вікна
// 					if (rect.bottom <= viewportHeight) {
// 						// console.log(rect.bottom);
// 							// console.log(`Елемент ${entry.target.id || 'без id'} досяг нижньої межі екрану.`);
// 					}
// console.log(viewportHeight);


// 					if (rect.top >= 0) {
// 						// console.log(rect.top);
						
// 							// console.log(`Елемент ${entry.target.id || 'без id'} досяг верхньої межі екрану.`);
// 					}
// 			});
// 	};

// 	const observer = new IntersectionObserver(observerCallback, observerOptions);

// 	elements.forEach(element => {
// 			observer.observe(element);
// 	});
// };

// const setupScrollBar = () => {
// 		const wrappers = document.querySelectorAll('.choose__items');
// 		const minHeight = 100; 
// 		wrappers.forEach((wrapper) => {
// 			const wrapperIncludeContent = wrapper.querySelectorAll('.choose__item');
// 			const wrapperHeight = wrapper.clientHeight;
// 			let totalContentHeight = 0;
// 			wrapperIncludeContent.forEach(item => {
// 					totalContentHeight += item.clientHeight;
// 			});
// 			if (totalContentHeight <= wrapperHeight) {
// 					wrapper.classList.add('short');
// 			} else {
// 					wrapper.classList.remove('short'); 
// 			}
// 				const progressBar = document.querySelector('.choose__scrollBar .progress-bar');
// 				progressBar.style.transform = `scaleY(${minHeight / wrapperHeight})`;
// 				wrapper.addEventListener('scroll', () => {
// 						const scrollTop = wrapper.scrollTop;
// 						const scrollHeight = wrapper.scrollHeight - wrapper.clientHeight;
// 						const scrollRatio = scrollTop / scrollHeight;
// 						let scaleY = scrollRatio * (wrapperHeight - minHeight) / wrapperHeight + (minHeight / wrapperHeight);
// 						scaleY = Math.min(scaleY, 1);
// 						progressBar.style.transform = `scaleY(${scaleY})`;
// 				});
// 		});
// 	};




// const observeElements = () => {
// 	const elements = document.querySelectorAll('.choose__items');

// 	if (elements.length === 0) {
// 			console.error('Не знайдено елементів для спостереження');
// 			return;
// 	}

// 	const observerOptions = {
// 			root: null, // viewport як кореневий контейнер
// 			rootMargin: '0px',
// 			threshold: Array.from({ length: 101 }, (_, i) => i / 100) // Пороги для перевірки видимості
// 	};

// 	const observerCallback = (entries) => {
// 			entries.forEach(entry => {
// 					const rect = entry.boundingClientRect;
// 					const viewportHeight = window.innerHeight;
// 					const elementHeight = rect.height;
// 					const elementBottom = rect.bottom;
// 					const visibleBottom = Math.min(elementBottom, viewportHeight);
// 					const heightBelowViewport = Math.max(0, visibleBottom - rect.top);
// 					const percentageThroughBottom = (heightBelowViewport / elementHeight) * 100;
// console.log(percentageThroughBottom);

// 			});
// 	};

// 	const observer = new IntersectionObserver(observerCallback, observerOptions);

// 	elements.forEach(element => {
// 			observer.observe(element);
// 	});
// };
// const observeElements = () => {
// 	const elements = document.querySelectorAll('.choose__content');

// 	if (elements.length === 0) {
// 			console.error('Не знайдено елементів для спостереження');
// 			return;
// 	}

// 	const observerOptions = {
// 			root: null, 
// 			rootMargin: '0px',
// 			threshold: Array.from({ length: 101 }, (_, i) => i / 100) // Пороги для перевірки видимості
// 	};

// 	const observerCallback = (entries) => {
// 			entries.forEach(entry => {
// 					const rect = entry.boundingClientRect;
// 					const viewportHeight = window.innerHeight;
// 					const progressBar = entry.target.querySelector('.progress-bar'); // Оновлено для правильного вибору прогрес-бару
// 					if (!progressBar) {
// 							console.error('Не знайдено прогрес-бар для елемента', entry.target);
// 							return;
// 					}
// 					const elementHeight = rect.height;

// 					// Нижня частина елемента
// 					const elementBottom = rect.bottom;

// 					// Висота частини елемента, що показана нижче межі екрану
// 					const heightBelowViewport = Math.max(0, Math.min(elementBottom, viewportHeight) - rect.top);

// 					// Відсоток висоти елемента, що пройшов через нижню межу екрану
// 					const percentageThroughBottom = heightBelowViewport / elementHeight;

// 					// Оновлення стилю прогрес-бару
// 					progressBar.style.transform = `scaleY(${percentageThroughBottom})`;

// 					// Додатковий код для перевірки, чи елемент повністю показаний
// 					if (rect.top >= 0 && elementBottom <= viewportHeight) {
// 							// Елемент повністю показаний на екрані
// 							console.log(`Елемент ${entry.target.id || 'без id'} повністю показаний на екрані.`);
// 					}
// 			});
// 	};

// 	const observer = new IntersectionObserver(observerCallback, observerOptions);

// 	elements.forEach(element => {
// 			observer.observe(element);
// 	});
// };

// const observeElements = () => {
// 	const elements = document.querySelectorAll('.choose__content');

// 	if (elements.length === 0) {
// 			console.error('Не знайдено елементів для спостереження');
// 			return;
// 	}

// 	const observerOptions = {
// 			root: null, // viewport як кореневий контейнер
// 			rootMargin: '0px',
// 			threshold: Array.from({ length: 101 }, (_, i) => i / 100) // Пороги для перевірки видимості
// 	};

// 	const observerCallback = (entries) => {
// 			entries.forEach(entry => {
// 					const rect = entry.boundingClientRect;
// 					const viewportHeight = window.innerHeight;

// 					// Визначити прогрес-бар для поточного елемента
// 					const progressBar = entry.target.querySelector('.progress-bar');

// 					if (!progressBar) {
// 							console.error('Не знайдено прогрес-бар для елемента', entry.target);
// 							return;
// 					}

// 					const elementHeight = rect.height;
// 					const elementTop = rect.top;
// 					const elementBottom = rect.bottom;

// console.log(elementTop);
// console.log(elementBottom);

// 					// Висота частини елемента, що показана в межах екрану
// 					const heightVisibleInViewport = Math.max(0, Math.min(elementBottom, viewportHeight) - Math.max(elementTop, 0));

// 					// Відсоток висоти елемента, що показана в межах екрану
// 					const percentageVisibleInViewport = (heightVisibleInViewport / elementHeight) * 100;

// 					// Обчислити відсоток висоти, що "пройшов" через екран, враховуючи частину, що ще на екран
// 					const percentageThroughBottom = Math.min(100, (elementBottom / viewportHeight) * 100);

// 					// Оновлення стилю прогрес-бару
// 					progressBar.style.transform = `scaleY(${percentageVisibleInViewport / 100})`;

// 					// Додатковий код для перевірки, чи елемент повністю показаний на екрані
// 					if (percentageVisibleInViewport >= 100) {
// 							console.log(`Елемент ${entry.target.id || 'без id'} повністю показаний на екрані.`);
// 					}
// 			});
// 	};

// 	const observer = new IntersectionObserver(observerCallback, observerOptions);

// 	elements.forEach(element => {
// 			observer.observe(element);
// 	});
// };
const observeElements = () => {
  gsap.registerPlugin(ScrollTrigger);

  const zones = document.querySelectorAll(".choose__content");

  zones.forEach(zone => {
    const progressBar = zone.querySelector('.progress-bar');
    gsap.to(progressBar, {
      scaleY: 1,
      transformOrigin: "top",
      ease: "none",
      scrollTrigger: {
        trigger: zone,
        start: "top bottom", 
        end: "50% top", 
        scrub: true, // синхронізує анімацію з прокруткою
        // onUpdate: (self) => {
        //   // Функція для додаткової обробки, якщо потрібно
        //   console.log(`Елемент ${zone.id || 'без id'} на ${Math.min(self.progress * 100, 100).toFixed(2)}%`);
        // }
      }
    });
  });

}


