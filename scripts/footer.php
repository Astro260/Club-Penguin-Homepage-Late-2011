
// this code makes it easy to update the footer on all pages in one centralized spot instead of using the Dreamweaver Tetmplates feature to propagate the date to all pages, this will mean that only 1 file (this one) will need to be changed whenever future updates to Privacy Policies and Terms of Use documents occurs


var str='';
str+='<div id="ftrWrap">';
str+='	<div id="ftrBg">';
str+='		<div id="ftrContent">';
str+='			<img src="\/img\/common\/logo-disney-virtual-world.png" id="disGame" alt="Disney.com Games" \/>';
str+='			<a href="http:\/\/www.truste.org\/ivalidate.php?url=www.clubpenguin.com&sealid=105" target="_blank"><img src="\/images\/truste_kids_seal.jpg" id="truste" alt="TRUSTe - Kids Privacy" \/><\/a>';
str+='			<a href="http:\/\/www.clubpenguin.com\/parents\/what_people_are_saying.htm" target="_self"><img src="\/images\/esrb_footer_blue.gif" id="esrb" alt="ESRB" \/><\/a>';
str+='			';
str+='			<!-- This is the Footer Navigation ********************** -->';
str+='			';
str+='			<ul>';
str+='				<li id="ftr-company"><a href="http:\/\/www.clubpenguin.com\/company\/index.htm">Company<\/a><\/li>';
str+='				<li class="sep">|<\/li>';
str+='				<li id="ftr-terms"><a href="http:\/\/www.clubpenguin.com\/terms.htm">Terms of Use<\/a><\/li>';
str+='				<li class="sep">|<\/li>';
str+='				<li id="ftr-privacy"><a class="new" href="http:\/\/www.clubpenguin.com\/privacy.htm">Privacy Policy<\/a><span class="asterisk">*<\/span><\/li>';
str+='				<li class="sep">|<\/li>';
str+='				<li id="ftr-contact"><a href="http:\/\/support.clubpenguin.com\/help\/contact\/">Contact Us<\/a><\/li>';
str+='				<li class="sep">|<\/li>';
str+='				<li id="ftr-sitemap"><a href="http:\/\/www.clubpenguin.com\/sitemap.htm">Site Map<\/a><\/li>';
str+='				<li class="sep">|<\/li>';
str+='				<li id="ftr-aff"><a href="https:\/\/signup.cj.com\/member\/brandedPublisherSignUp.do?air_refmerchantid=3297551" target="_blank">Affiliates<\/a><\/li>';
str+='				<li class="sep">|<\/li>';
str+='				<li id="ftr-help" class="noMarg"><a href="http:\/\/support.clubpenguin.com\/help">Help<\/a><\/li>';
str+='			<\/ul>';
str+='			';
str+='			<p>Club Penguin&trade; Disney Online Studios Canada Inc. &copy; Disney. All rights reserved.<br \/><span class="asterisk">*<\/span> <span class="updated">Updated on January 11, 2012<\/span><\/p>';
str+='		<\/div>';
str+='	<\/div>';
str+='<\/div>';
document.write(str);
/*
     FILE ARCHIVED ON 09:03:27 May 02, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:19:48 Apr 19, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/