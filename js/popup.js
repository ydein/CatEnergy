

	var navigationLink = document.querySelector(".navigation__toggle--open");
	var navigationPopup = document.querySelector(".navigation-header");
	var navigationClose = document.querySelector(".navigation__toggle--close");	

	navigationPopup.classList.remove("navigation__nojs");

	navigationLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		navigationPopup.classList.add("modal-show");
		navigationLink.classList.remove("modal-show");
		navigationClose.classList.add("modal-show");		
	});

	navigationClose.addEventListener("click", function(evt) {
		evt.preventDefault();
		navigationPopup.classList.remove("modal-show");
		navigationClose.classList.remove("modal-show");
		navigationLink.classList.add("modal-show");
	});

