/**
 * 
 * Check to see if user arrived at the clubpenguin homepage from clubpenguin.ch
 * If user came from clubpenguin.ch display a popup to prompt user to choose german or french.
 * Store users selection in a cookie on future visits check for cookie existence and redirect if necessary.
 * 
 * Due to the 301 redirect process need two steps:
 *     clubpenguin.ch --> clubpenguin.com/ch
 *     clubpenguin.com/ch redirects to clubpenguin.com/de or clubpenguin.com/fr based on content of swisshomepage cookie 
 *     if no swisshomepage cookie exists write cookie with value of "choose" and redirect to clubpenguin.com/de 
 * 
 * The cookie based redirect occurs via the vhost config file so that the cookie redirect only takes effect when coming from
 * clubpenguin.ch otherwise they would not be able to use the language selector to choose a different language on the homepage.
 * 
 */
homepageLang = getCookie('swisshomepage');
if (homepageLang == "choose") {
	$(document).ready(function() {
	    
		window.common.showModal('swiss-landing.htm', 
								'swiss-wrap', 
								function(){	
									$("#deutsch-select").click( function() {
										setCookie('swisshomepage', 'de', 2400);
										// Redirect if we are not already on the correct language version.
										if (!window.location.href.search(/\/de/)) {
											window.location.href = $(this).attr('href');
										} else {
											window.common.closeModal();
										}
								    });
								    $("#francais-select").click( function() {
								    	setCookie('swisshomepage', 'fr', 2400);
								    	// Redirect if we are not already on the correct language version.
										if (!window.location.href.search(/\/fr/)) {
											window.location.href = $(this).attr('href');
										} else {
											window.common.closeModal();
										}
								    });
								},
								function(){
								  	/* If they close the modal delete the cookie so not prompted every time they visit the site. */
									currCookieVal = getCookie('swisshomepage');
									if (currCookieVal == "choose") {
										setCookie('swisshomepage', null, -1);
									}
								});
	});
}
/*
     FILE ARCHIVED ON 21:42:57 May 02, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:10:56 Apr 19, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/