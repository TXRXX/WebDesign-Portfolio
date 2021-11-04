let didScroll = false;
let paralaxTitles = document.querySelectorAll('.paralax-title');
let line = document.querySelectorAll('.line');

const scrollInProgress = () => {
	didScroll = true
}

const raf = () => {
	if(didScroll) {
		paralaxTitles.forEach((element, index) => {
			element.style.transform = "translateX("+ window.scrollY / 9 + "%)"
		});
        line.forEach((element, index) => {
			element.style.transform =  "translateX("+ -(window.scrollY / 1) + "%)"
		});
		didScroll = false;
	}
	requestAnimationFrame(raf);
}


requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)