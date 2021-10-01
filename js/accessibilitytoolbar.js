/*** FUNCTIONS ***/
/* This function will set a cookie */
function setCookie(key, value, path, time) {
    if (time != '') {
        var expires = new Date();
        expires.setTime(expires.getTime() + time);
        document.cookie = key + '=' + value + ';path=' + path + ';expires=' + expires.toUTCString();
    }
    //For when we just want a session cookie
    else{
        document.cookie = key + '=' + value + ';path=' + path;
    }
}

/* This function will return a cookie */
function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}  

// This function will open/close the accessibility tools
function toggleAccessibilityTools(){
	$('#AccessibilityTools').slideToggle();
}

/* This function is called on page load to see if settings need to be pulled from cookies. If they do, those classes are toggled. */
function checkAccessibiliy(){
	var accessibilityGrayscale = getCookie('accessibility_grayscale');
	var accessibilityHighlightLinks = getCookie('accessibility_highlightLinks');
	var accessibilityContrast = getCookie('accessibility_contrast');
	var accessibilityTextSize = getCookie('accessibility_textSize');

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
}


$(function () {
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

	document.querySelector('#AccessibilityToolsButtonClose').addEventListener('click',function(){
		toggleAccessibilityTools();
	});
});
