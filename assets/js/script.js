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

const accordionFunction = () => {
  const accordionItems = document.querySelectorAll(".accord-item");
  
  accordionItems.forEach((item) => {
    item.addEventListener("click", function () {
        item.classList.toggle("active");
				alert('hi')
    });
  });
};

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
// const animationHeader = () => {
// 	const airdropWrapperSections = document.querySelectorAll(".header__top-animation");

// 	airdropWrapperSections.forEach((airdropWrapperSection)=>{
	
// 					function setupInstances() {
// 							const parentWidth = airdropWrapperSection.clientWidth;
// 							const childWidth = airdropWrapperSection.children[0].offsetWidth;
// console.log(childWidth);

// 							if (!parentWidth || !childWidth) {
// 									console.error("Cannot calculate parent or child width:", {
// 											parentWidth,
// 											childWidth,
// 									});
// 									return;
// 							}

// 							const numInstances = Math.ceil(parentWidth / childWidth) + 1;

// 							while (airdropWrapperSection.children.length < numInstances) {
// 									for (let i = 0; i < numInstances; i++) {
// 											const clone = airdropWrapperSection.children[i].cloneNode(true);
// 											clone.classList.remove("header__top-content");
// 											clone.classList.add("header__top-content-second");
// 											airdropWrapperSection.appendChild(clone);
// 									}
// 							}
// 					}

// 					setupInstances();
// 					window.addEventListener("resize", setupInstances);

// 					const animationAirdropBlocks = document.querySelectorAll('.header__container-link');
// 					const animationAirdropWrappers = document.querySelectorAll('.header__top-content');
// 					const animationAirdropWrapperClones = document.querySelectorAll('.header__top-content-second');

// 					animationAirdropBlocks.forEach((block) => {
// 							block.addEventListener('mouseenter', () => {
// 									animationAirdropWrappers.forEach(wrap => wrap.style.animationPlayState = "paused");
// 									animationAirdropWrapperClones.forEach(clone => clone.style.animationPlayState = "paused");
// 							});

// 							block.addEventListener('mouseleave', () => {
// 								animationAirdropWrappers.forEach(wrap => wrap.style.animationPlayState = "running");
// 									animationAirdropWrapperClones.forEach(clone => clone.style.animationPlayState = "running");
// 							});
// 					});

// 	})	
// }


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

// const animationHeader = () =>{
// 	const wrapper = document.querySelector(".wrapper");
// const boxes = gsap.utils.toArray(".box");


// const loop = horizontalLoop(boxes, {paused: false,repeat: -1,});

// function horizontalLoop(items, config) {
// 	items = gsap.utils.toArray(items);
// 	config = config || {};
// 	let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
// 		length = items.length,
// 		startX = items[0].offsetLeft,
// 		times = [],
// 		widths = [],
// 		xPercents = [],
// 		curIndex = 0,
// 		pixelsPerSecond = (config.speed || .2) * 100,
// 		snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
// 		totalWidth, curX, distanceToStart, distanceToLoop, item, i;
// 	gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
// 		xPercent: (i, el) => {
// 			let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
// 			xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
// 			return xPercents[i];
// 		}
// 	});
// 	gsap.set(items, {x: 0});
// 	totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
// 	for (i = 0; i < length; i++) {
// 		item = items[i];
// 		curX = xPercents[i] / 100 * widths[i];
// 		distanceToStart = item.offsetLeft + curX - startX;
// 		distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
// 		tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
// 		  .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
// 		  .add("label" + i, distanceToStart / pixelsPerSecond);
// 		times[i] = distanceToStart / pixelsPerSecond;
// 	}
// 	function toIndex(index, vars) {
// 		vars = vars || {};
// 		(Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
// 		let newIndex = gsap.utils.wrap(0, length, index),
// 			time = times[newIndex];
// 		if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
// 			vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
// 			time += tl.duration() * (index > curIndex ? 1 : -1);
// 		}
// 		curIndex = newIndex;
// 		vars.overwrite = true;
// 		return tl.tweenTo(time, vars);
// 	}
// 	tl.next = vars => toIndex(curIndex+1, vars);
// 	tl.previous = vars => toIndex(curIndex-1, vars);
// 	tl.current = () => curIndex;
// 	tl.toIndex = (index, vars) => toIndex(index, vars);
// 	tl.times = times;
//   tl.progress(1, true).progress(0, true); // pre-render for performance
//   if (config.reversed) {
//     tl.vars.onReverseComplete();
//     tl.reverse();
//   }
// 	return tl;
// }
// }

const animationHeader = () => {
	const wrapper = document.querySelector(".wrapper");
	const boxes = gsap.utils.toArray(".box");

	const loop = horizontalLoop(boxes, { paused: false, repeat: -1 });

	// Додаємо події миші для кожного елемента `.box`
	boxes.forEach(box => {
			box.addEventListener("mouseenter", () => {
					loop.pause(); // Зупиняємо анімацію при наведенні мишки
			});
			box.addEventListener("mouseleave", () => {
					loop.play(); // Відновлюємо анімацію при прибиранні мишки
			});
	});

	function horizontalLoop(items, config) {
			items = gsap.utils.toArray(items);
			config = config || {};
			let tl = gsap.timeline({
							repeat: config.repeat,
							paused: config.paused,
							defaults: { ease: "none" },
							onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
					}),
					length = items.length,
					startX = items[0].offsetLeft,
					times = [],
					widths = [],
					xPercents = [],
					curIndex = 0,
					pixelsPerSecond = (config.speed || 0.2) * 100,
					snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1),
					totalWidth, curX, distanceToStart, distanceToLoop, item, i;
			gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
					xPercent: (i, el) => {
							let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
							xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
							return xPercents[i];
					}
			});
			gsap.set(items, { x: 0 });
			totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);
			for (i = 0; i < length; i++) {
					item = items[i];
					curX = xPercents[i] / 100 * widths[i];
					distanceToStart = item.offsetLeft + curX - startX;
					distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
					tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
							.fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
							.add("label" + i, distanceToStart / pixelsPerSecond);
					times[i] = distanceToStart / pixelsPerSecond;
			}
			function toIndex(index, vars) {
					vars = vars || {};
					(Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
					let newIndex = gsap.utils.wrap(0, length, index),
							time = times[newIndex];
					if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
							vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
							time += tl.duration() * (index > curIndex ? 1 : -1);
					}
					curIndex = newIndex;
					vars.overwrite = true;
					return tl.tweenTo(time, vars);
			}
			tl.next = vars => toIndex(curIndex + 1, vars);
			tl.previous = vars => toIndex(curIndex - 1, vars);
			tl.current = () => curIndex;
			tl.toIndex = (index, vars) => toIndex(index, vars);
			tl.times = times;
			tl.progress(1, true).progress(0, true); // pre-render for performance
			if (config.reversed) {
					tl.vars.onReverseComplete();
					tl.reverse();
			}
			return tl;
	}
}
