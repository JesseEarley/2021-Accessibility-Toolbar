/*** FUNCTIONS ***/
/* This function will let us know if we are on a touch device */
function isTouchDevice() {
	return "ontouchstart" in document.documentElement;
}

/* This function will set a cookie */
function setCookie(key, value, path, time) {
    if (time != '') {
        var expires = new Date();
        expires.setTime(expires.getTime() + time);
        document.cookie = key + '=' + value + ';path=' + path + ';expires=' + expires.toUTCString() + ';sameSite=Lax';
    }
	//Keeo the cookie but clear it out
    else{
        document.cookie = key + '=' + value + ';path=' + path + ';sameSite=Lax';
    }
}

/* This function will return a cookie */
function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}  

// This function will open/close the accessibility tools
function toggleAccessibilityTools(){
    document.querySelector('#AccessibilityTools').classList.toggle('is-visible');
}

/* This function is called on page load to see if settings need to be pulled from cookies. If they do, those classes are toggled. */
function checkAccessibiliy(){
	var accessibilityGrayscale = getCookie('accessibility_grayscale');
	var accessibilityHighlightLinks = getCookie('accessibility_highlightLinks');
	var accessibilityContrast = getCookie('accessibility_contrast');
	var accessibilityTextSize = getCookie('accessibility_textSize');
	var accessibilityletterSpacing = getCookie('accessibility_letterSpacing');
	var accessibilityDyslexiaFriendly = getCookie('accessibility_dyslexiaFriendly');
	var accessibilityCursorSize = getCookie('accessibility_cursorSize');

	if (accessibilityGrayscale == 'true')
	{
		document.querySelector('html').classList.toggle('accessibilityTools-grayscale');
		document.querySelector('#AccessibilityToolsGrayscale').checked = true;
	}
	if (accessibilityHighlightLinks == 'true')
	{
		document.querySelector('html').classList.toggle('accessibilityTools-highlightLinks');
		document.querySelector('#AccessibilityToolsHightLinks').checked = true;
	}
	if (accessibilityContrast == 'true')
	{
		document.querySelector('html').classList.toggle('accessibilityTools-contrast');
		document.querySelector('#AccessibilityToolsContrast').checked = true;
	}
	if (accessibilityTextSize == 'true')
	{
		document.querySelector('html').classList.toggle('accessibilityTools-textSize');
		document.querySelector('#AccessibilityToolsTextSize').checked = true;
	}
	if (accessibilityletterSpacing == 'true')
	{
		document.querySelector('html').classList.toggle('accessibilityTools-letterSpacing');
		document.querySelector('#AccessibilityToolsLetterSpacing').checked = true;
	}
	if (accessibilityDyslexiaFriendly == 'true')
	{
		document.querySelector('html').classList.toggle('accessibilityTools-dyslexiaFriendly');
		document.querySelector('#AccessibilityToolsDyslexiaFriendlyFont').checked = true;
	}
	if (accessibilityCursorSize == 'true')
	{
		document.querySelector('html').classList.toggle('accessibilityTools-cursorSize');
		document.querySelector('#AccessibilityToolsCursorSize').checked = true;
	}

	/*If on mobile, we need to display the accessibility button*/
	if (isTouchDevice()) {
		document.querySelector(
			"#AccessibilityToolsButton-Mobile"
		).style.display = "block";
	}
}

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
  }

ready(() => { 
	/* Need to check to see if we need to display the accessibility tool settings */
	checkAccessibiliy();
 
  /* Key combination to open the accessibility tools menu using the keyboard */
    document.onkeyup = function(e) {
        if (e.altKey && e.shiftKey && e.which == 65) {
        toggleAccessibilityTools();
        }
    }

	/* Need to add event listeners to the accessibility tool buttons. When clicked, a class will be toggled and a cookie will be set. The cookie will,
	  ensure that our settings are saved the next time we visit the site or a pate within the site. */
	document.querySelector('#AccessibilityToolsGrayscale').addEventListener('click',function(){
	    document.querySelector("html").classList.toggle("accessibilityTools-grayscale");
		if (document.querySelector('html').classList.contains('accessibilityTools-grayscale'))
		{
			setCookie('accessibility_grayscale', 'true', '/','31 Dec 9999 23:59:59 GMT');
		}
		else{
			setCookie('accessibility_grayscale', 'false', '/','');
		}	
	});

	document.querySelector('#AccessibilityToolsHightLinks').addEventListener('click',function(){
		document.querySelector("html").classList.toggle("accessibilityTools-highlightLinks");
		if (document.querySelector('html').classList.contains('accessibilityTools-highlightLinks'))
		{
			setCookie('accessibility_highlightLinks', 'true', '/','31 Dec 9999 23:59:59 GMT');
		}
		else{
			setCookie('accessibility_highlightLinks', 'false', '/','');
		}	
	});

	document.querySelector('#AccessibilityToolsContrast').addEventListener('click',function(){
		document.querySelector("html").classList.toggle("accessibilityTools-contrast");
		if (document.querySelector('html').classList.contains('accessibilityTools-contrast'))
		{
			setCookie('accessibility_contrast', 'true', '/','31 Dec 9999 23:59:59 GMT');
		}
		else{
			setCookie('accessibility_contrast', 'false', '/','');
		}	
	});

	document.querySelector('#AccessibilityToolsTextSize').addEventListener('click',function(){
		document.querySelector("html").classList.toggle("accessibilityTools-textSize");
		if (document.querySelector('html').classList.contains('accessibilityTools-textSize'))
		{
			setCookie('accessibility_textSize', 'true', '/','31 Dec 9999 23:59:59 GMT');
		}
		else{
			setCookie('accessibility_textSize', 'false', '/','');
		}	
	});

	document.querySelector('#AccessibilityToolsLetterSpacing').addEventListener('click',function(){
		document.querySelector("html").classList.toggle("accessibilityTools-letterSpacing");
		if (document.querySelector('html').classList.contains('accessibilityTools-letterSpacing'))
		{
			setCookie('accessibility_letterSpacing', 'true', '/','31 Dec 9999 23:59:59 GMT');
		}
		else{
			setCookie('accessibility_letterSpacing', 'false', '/','');
		}	
	});

	document.querySelector('#AccessibilityToolsDyslexiaFriendlyFont').addEventListener('click',function(){
		document.querySelector("html").classList.toggle("accessibilityTools-dyslexiaFriendly");
		if (document.querySelector('html').classList.contains('accessibilityTools-dyslexiaFriendly'))
		{
			setCookie('accessibility_dyslexiaFriendly', 'true', '/','31 Dec 9999 23:59:59 GMT');
		}
		else{
			setCookie('accessibility_dyslexiaFriendly', 'false', '/','');
		}	
	});

	document.querySelector('#AccessibilityToolsCursorSize').addEventListener('click',function(){
		document.querySelector("html").classList.toggle("accessibilityTools-cursorSize");
		if (document.querySelector('html').classList.contains('accessibilityTools-cursorSize'))
		{
			setCookie('accessibility_cursorSize', 'true', '/','31 Dec 9999 23:59:59 GMT');
		}
		else{
			setCookie('accessibility_cursorSize', 'false', '/','');
		}	
	});

	document.querySelector('#AccessibilityToolsButtonClose').addEventListener('click',function(){
		toggleAccessibilityTools();
	});
});
