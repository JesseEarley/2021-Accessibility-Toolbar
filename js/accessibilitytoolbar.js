/*** FUNCTIONS ***/
/* This function will let us know if we are on a touch device */
function isTouchDevice() {
	return "ontouchstart" in document.documentElement;
}

/* This function will set a cookie */
function setCookie(key, value, path, time) {
    if (time != '') {
        let expires = new Date();
        expires.setTime(expires.getTime() + time);
        document.cookie = key + '=' + value + ';path=' + path + ';expires=' + expires.toUTCString() + ';sameSite=Lax';
    }
	//Keep the cookie but clear it out
    else{
        document.cookie = key + '=' + value + ';path=' + path + ';sameSite=Lax';
    }
}

/* This function will return a cookie */
function getCookie(key) {
    let keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}  

// This function will open/close the accessibility tools
function toggleAccessibilityTools(){
    document.querySelector('#AccessibilityTools').classList.toggle('is-visible');
}

/* This function is called on page load to see if settings need to be pulled from cookies. If they do, those classes are toggled. */
function checkAccessibiliy(accessibilityToggles){
	let cookie = '';
	for(i = 0; i < accessibilityToggles.length; i++) {
		cookie = getCookie(accessibilityToggles[i].dataset.cookieandclass);
		if(cookie == 'true'){
			document.querySelector('HTML').classList.toggle(accessibilityToggles[i].dataset.cookieandclass);
			document.querySelector('#' + accessibilityToggles[i].id).checked = true;
		}
	}

	/* If on mobile, we need to display the accessibility button */
	if (isTouchDevice()) {
		document.querySelector(
			"#AccessibilityToolsButton-Mobile"
		).style.display = "block";
	}
}

/* This function is called when a toggle is clicked. It will toggle a class on the HTML element and set a cookie */
function clickAccessibilityToggle(evt){
	document.querySelector("html").classList.toggle(evt.currentTarget.dataset.cookieandclass);
	if (document.querySelector('html').classList.contains(evt.currentTarget.dataset.cookieandclass))
	{
		setCookie(evt.currentTarget.dataset.cookieandclass, 'true', '/','31 Dec 9999 23:59:59 GMT');
	}
	else{
		setCookie(evt.currentTarget.dataset.cookieandclass, 'false', '/','');
	}	
}

/* This function is called on page load and adds Event Listeners to all of the toggles in the Accessibility Toolbar */
function addToggleEventListeners(accessibilityToggles){
	for(i = 0; i < accessibilityToggles.length; i++){
		document.querySelector("#" + accessibilityToggles[i].id).addEventListener('click',clickAccessibilityToggle);
	}
}

/*This function moves the Readability Bar*/
function moveReadabilityBar(){
	let readabilityDiv = document.getElementById('ReadabilityBar');
	function isTouchDevice(){
		try{
			document.createEvent("TouchEvent");
			return true; 
		}
		catch(e){
			return false;
		}
	}
	const move = (e) =>{
		//Try, catch to avoid errors for touch screens - Error thrown when user doesn't move their finger
		try{
			//PageX and PageY return the position of clients cursor from top left of screen
			var y = !isTouchDevice() ? e.pageY: e.touches[0].pageY;
		}
		catch(e){}
		//set let and top based on mouse pointer
		readabilityDiv.style.top = y -50 + "px";
	}
	
	//for mouse
	document.addEventListener("mousemove", (e) => {
		move(e);
	});
	
	//forTouch
	document.addEventListener("touchmove", (e) => {
		move(e);
	})
}

/*This function creates the Readability Bar*/
function createReadabilityBar(){
	const body = document.querySelector('body');
	const readabilityDiv = document.createElement('div');
	readabilityDiv.id = 'ReadabilityBar';
	body.prepend(readabilityDiv);
	moveReadabilityBar();
}

/*This function checks to see if the Readability Bar option is selected and calls createReadabilityBar() if it is*/
function checkForReadabilityBar(){
	let html = document.querySelector('html');
	if (html.classList.contains('accessibilityTools-readabilityBar')){
		createReadabilityBar();
	}
}

/*This function will remove the readability bar*/
function removeReadabilityBar(){
	const readabilityDiv = document.getElementById('ReadabilityBar');
	readabilityDiv.remove();
}

/*Code will run once DOM has loaded*/
document.addEventListener("DOMContentLoaded", function() {
	/* Get all of the toggles in the Accessibility Toolbar */
	let accessibilityToggles = document.getElementsByClassName('accessibilityToggles');

	/* Add Event Listerners to the toggles */
	addToggleEventListeners(accessibilityToggles);
	
	/* Need to check to see if we need to display the accessibility tool settings */
	checkAccessibiliy(accessibilityToggles);
 
  /* Key combination to open the accessibility tools menu using the keyboard */
    document.onkeyup = function(e) {
        if (e.altKey && e.shiftKey && (e.key == "A" || e.key == "Å")) {
        toggleAccessibilityTools();
        }
    }

/* Add Event Lister on the close button to toggle the Accessibility Toolbar closed */
	document.querySelector('#AccessibilityToolsButtonClose').addEventListener('click',function(){
		toggleAccessibilityTools();
	});

/* Readability Bar*/
	//Need to check to see if the bar should show upon page load
	checkForReadabilityBar();

	//Need to add an observer for the HTML element to look for the accessibilityTools-readabilityBar class
	//Need to create the bar if it exists or remove it if the class is removed
	const observeHtml = document.querySelector('html');
	var prevClassState = observeHtml.classList.contains('accessibilityTools-readabilityBar');
	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if(mutation.attributeName == "class"){
				let currentClassState = mutation.target.classList.contains('accessibilityTools-readabilityBar');
				if(prevClassState !== currentClassState)    {
					prevClassState = currentClassState;
					if(currentClassState)
						createReadabilityBar();
					else
						removeReadabilityBar();
				}
			}
		});
	});
	observer.observe(observeHtml, {attributes: true});
});