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
	newsSliderFunction();
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

const newsSliderFunction = () =>{
	const newsSliderInit = document.querySelector('.newsSlider')
	
		if(!newsSliderInit) return;
		const newsArrowPrev = document.querySelector(".news-button-prev");
		const newsArrowNext = document.querySelector(".news-button-next");
    if (newsSliderInit.length < 2 || innerWidth <= 767) {
      newsArrowPrev.style.display = "none";
      newsArrowNext.style.display = "none";
    } else {
      newsArrowPrev.style.display = "flex";
      newsArrowNext.style.display = "flex";
    }
	const newsSlider = new Swiper(".newsSlider", {
      pagination: {
        el: ".news-pagination",
      },
			navigation: {
        nextEl: ".news-button-next",
        prevEl: ".news-button-prev",
      },
			slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1023: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
			},

    });
}
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


