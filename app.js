const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const heroName = document.querySelector('#hero h1:nth-child(3)');
const heroTypewriter = document.querySelector('#hero .hero-typewriter');
const heroTypewriterText = document.querySelector('#hero .hero-typewriter__text');
const heroTypewriterCursor = document.querySelector('#hero .hero-typewriter__cursor');
const heroTypewriterSentence =
	'Frontend Engineer building fast, scalable products for startups and businesses.';
let heroTypewriterStarted = false;

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

const startHeroTypewriter = () => {
	if (heroTypewriterStarted || !heroTypewriter || !heroTypewriterText) {
		return;
	}

	heroTypewriterStarted = true;
	let index = 0;
	heroTypewriterText.textContent = '';
	heroTypewriter.classList.remove('is-complete');

	const typeNextCharacter = () => {
		heroTypewriterText.textContent = heroTypewriterSentence.slice(0, index + 1);
		index += 1;

		if (index < heroTypewriterSentence.length) {
			window.setTimeout(typeNextCharacter, 45);
			return;
		}

		heroTypewriter.classList.add('is-complete');
		if (heroTypewriterCursor) {
			heroTypewriterCursor.setAttribute('aria-hidden', 'true');
		}
	};

	typeNextCharacter();
};

if (heroName) {
	heroName.addEventListener('animationend', (event) => {
		if (event.target !== heroName) {
			return;
		}

		startHeroTypewriter();
	}, { once: false });
}
