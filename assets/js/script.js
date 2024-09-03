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
	animationHeader();
	// toggleClasses();
	airDropWrapperScroll();
	toggleMenu();
	observeElements();
	newsSliderFunction();
	accordionFunction();
	showNavLink();
	showFilters();
	similarSwiper();
	wrapTablesInDiv();
	stickyName();
});	

const toggleMenu = () =>{
	const htmlElement = document.querySelector("html");
	const burgerMenu = document.querySelector(".burgerBtn");
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

const newsSliderFunction = () => {
  const newsSliderInit = document.querySelector('.newsSlider');
  if (!newsSliderInit) return;

  const newsArrowPrev = document.querySelector(".news-button-prev");
  const newsArrowNext = document.querySelector(".news-button-next");

  const updateNavigationVisibility = () => {
    const windowInnerWidth = window.innerWidth;
    const slides = newsSliderInit.querySelectorAll('.swiper-slide');
    
    // Перевірка на кількість слайдів
    const showArrows = slides.length > 1;

    if (windowInnerWidth <= 768 && showArrows) {
      newsArrowPrev.style.display = "none";
      newsArrowNext.style.display = "none";
    } else {
      newsArrowPrev.style.display = "flex";
      newsArrowNext.style.display = "flex";
    }
  };

  // Ініціалізація слайдера
  const newsSlider = new Swiper(".newsSlider", {
    pagination: {
      el: ".news-pagination",
      clickable: true,
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
    on: {
      init: updateNavigationVisibility,
      resize: updateNavigationVisibility,
    },
  });
};
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
        end: "bottom top", 
        scrub: true, 
      }
    });
  });

}

const accordionFunction = () =>{
  const accordionItems = document.querySelectorAll(".accord-item");
    accordionItems.forEach((item) => {
      item.addEventListener("click", function () {
        this.classList.toggle("active");
      });
    });
  }

	const showNavLink = () =>{
		const navBarItem = document.querySelectorAll( ".header__nav .menu li:has(.sub-menu)");
			navBarItem.forEach((navBarLink) => {
				navBarLink.addEventListener("click", () => navBarLink.classList.toggle("show"));
			});
		
	}

	const wrapTablesInDiv = () => {
		document.querySelectorAll('table').forEach(table => {
			const wrapper = document.createElement('div');
			wrapper.classList.add('scroll');
			table.parentNode.insertBefore(wrapper, table);
			wrapper.appendChild(table);
		});
	};



	const showFilters = () => {
    const filterItem = document.querySelectorAll(".filter");

    filterItem.forEach((filter) => {
        const filterItemChoose = filter.querySelectorAll(".filter ul li");
        filter.addEventListener("click", (event) => {
            event.stopPropagation(); 
            filter.classList.toggle("showFilter");
        });

        filterItemChoose.forEach((choose) => {
            choose.addEventListener('click', (event) => {
                event.stopPropagation(); 
                filter.classList.remove("showFilter");
            });
        });
    });

    document.addEventListener('click', () => {
        filterItem.forEach((filter) => {
            filter.classList.remove("showFilter");
        });
    });
};
const similarSwiper = () =>{
	const similarSwiperInit = document.querySelector('.similarSwiper');
	if(!similarSwiperInit) return;
	const similarSlider = new Swiper(".similarSwiper", {
		
		pagination: {
			el: ".similar-pagination",
		},	slidesPerView: 1,
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
// якщо не використовувати функцію з модуля то ця для анімації хедеру
const animationHeader = () => {
	const airdropWrapperSections = document.querySelectorAll(".header__top-animation");

	airdropWrapperSections.forEach((airdropWrapperSection)=>{
	
					function setupInstances() {
							const parentWidth = airdropWrapperSection.clientWidth;
							const childWidth = airdropWrapperSection.children[0].offsetWidth;
console.log(childWidth);

							if (!parentWidth || !childWidth) {
									console.error("Cannot calculate parent or child width:", {
											parentWidth,
											childWidth,
									});
									return;
							}

							const numInstances = Math.ceil(parentWidth / childWidth) + 1;

							while (airdropWrapperSection.children.length < numInstances) {
									for (let i = 0; i < numInstances; i++) {
											const clone = airdropWrapperSection.children[i].cloneNode(true);
											clone.classList.remove("header__top-content");
											clone.classList.add("header__top-content-second");
											airdropWrapperSection.appendChild(clone);
									}
							}
					}

					setupInstances();
					window.addEventListener("resize", setupInstances);

					const animationAirdropBlocks = document.querySelectorAll('.header__container-link');
					const animationAirdropWrappers = document.querySelectorAll('.header__top-content');
					const animationAirdropWrapperClones = document.querySelectorAll('.header__top-content-second');

					animationAirdropBlocks.forEach((block) => {
							block.addEventListener('mouseenter', () => {
									animationAirdropWrappers.forEach(wrap => wrap.style.animationPlayState = "paused");
									animationAirdropWrapperClones.forEach(clone => clone.style.animationPlayState = "paused");
							});

							block.addEventListener('mouseleave', () => {
								animationAirdropWrappers.forEach(wrap => wrap.style.animationPlayState = "running");
									animationAirdropWrapperClones.forEach(clone => clone.style.animationPlayState = "running");
							});
					});

	})	
}


const stickyName = () => {
	const stickyNameWrap = document.querySelectorAll('.sticky-name');
	const footer = document.querySelector('footer');
	stickyNameWrap.forEach((sticky) => {
			function handleScroll() {
					const windowInnerWidth = window.innerWidth;
					const boundingRectHeight = sticky.getBoundingClientRect().height;
					const scrollThreshold = 200; 
					if (windowInnerWidth <= 1023) {
							const body = document.body;
							if (window.scrollY >= scrollThreshold) {
									body.classList.add('sticky-body');
									footer.style.marginBottom = `${boundingRectHeight}px`;
							} else {
									body.classList.remove('sticky-body');
									footer.style.marginBottom = `0px`;
							}
					} else {
							document.body.classList.remove('sticky-body');
					}
			}
			window.addEventListener('scroll', handleScroll);
	});
};
