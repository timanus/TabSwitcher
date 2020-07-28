
const MENU = '';
const MENU_ITEM = '';
const TAB_CONTENT = '';
const HIDE_CLASS = '';
const SHOW_CLASS = '';


let infoMenu = document.querySelector(MENU),
		infoMenuItem = document.querySelectorAll(MENU_ITEM),
		infoTabContent = document.querySelectorAll(TAB_CONTENT);

	
function hideTabElements(i) {
	for (i; i < infoTabContent.length; i++) {
		infoTabContent[i].classList.remove(SHOW_CLASS);
		infoTabContent[i].classList.add(HIDE_CLASS);
	}
}
hideTabElements(1); 


function showTabElement(i) {
	infoTabContent[i].classList.remove(HIDE_CLASS);
	infoTabContent[i].classList.add(SHOW_CLASS);
}

infoMenu.addEventListener('click', function(event) {
	let target = event.target;
	if (target && target.classList.contains('info-header-tab')) {
		for (let i = 0; i < infoMenuItem.length; i++) {
			if (infoMenuItem[i] == target) {
				hideTabElements(0);
				showTabElement(i);
			}
		}
	}
});

