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


// 	const airDropWrapperScroll = () =>{
// 	const wrappers = document.querySelectorAll('.airdrop__wrapper');
// 	if(!wrappers) return;
// 	// const maxScale = 1070 / 227; 
// 	wrappers.forEach((wrapper) => {
// 			wrapper.addEventListener('scroll', () => {
// 				const progressBarHeight = document.querySelector('.progress-bar');
// 				const maxScale = progressBarHeight.getBoundingClientRect().height;
// 				console.log(maxScale);

// 					let winScroll = wrapper.scrollTop;
// 					let height = wrapper.scrollHeight - wrapper.clientHeight;
// 					let scrolled = winScroll / height * maxScale;
// 					scrolled = Math.max(scrolled, 1);
// 					wrapper.querySelector(".progress").style.transform = `scaleY(${scrolled})`;
// 			});
// 	});
// }

// const airDropWrapperScroll = () => {
// 	const wrappers = document.querySelectorAll('.airdrop__wrapper');
// 	if (!wrappers) return;

// 	wrappers.forEach((wrapper) => {
// 			const progressBar = wrapper.querySelector('.progress');

// 			wrapper.addEventListener('scroll', () => {
// 					// Отримання висоти батьківського блоку
// 					const wrapperHeight = wrapper.getBoundingClientRect().height;
// 					const progressBarHeight = progressBar.getBoundingClientRect().height;

// 					// Отримання скролл-інформації
// 					let winScroll = wrapper.scrollTop;
// 					let height = wrapper.scrollHeight - wrapper.clientHeight;

// 					// Обчислення пропорції скролу
// 					let scrolled = winScroll / height;

// 					// Перетворення пропорції в масштаб по Y
// 					let scaleY = scrolled * (wrapperHeight / progressBarHeight);

// 					// Обмеження масштабу, щоб не перевищити висоту батьківського блоку
// 					scaleY = Math.min(scaleY, wrapperHeight / progressBarHeight);

// 					// Якщо скрол досягає кінця, коригуємо scaleY, щоб досягти краю
// 					if (winScroll + wrapper.clientHeight >= wrapper.scrollHeight) {
// 							scaleY = wrapperHeight / progressBarHeight;
// 					}

// 					// Застосування масштабування
// 					progressBar.style.transform = `scaleY(${scaleY})`;
// 			});
// 	});
// };

