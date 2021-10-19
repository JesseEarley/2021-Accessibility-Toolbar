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
});