if(typeof CP === 'undefined') {
	CP = {};
}

if (typeof CP.common === 'undefined') {
	CP.global = {};
}

CP.global.runningVars = {
	rssURL: "xml/blog-feed.php",
	hasFlash: true,
	blogInterval : null,
	blogDelay : 4000,
	currentBlog : 0,
	modal : null
};

(function($){
	
	CP.common = function(options) {
		this.options = {
		};
		$.extend(true, this.options, options);
		this.load();
	};
	
	CP.common.prototype.initFonts = function() {
		Cufon.replace('#nav li a, h2', { 
			fontFamily: 'MyriadWebPro-Bold', 
			hover: false
		});
		Cufon.replace('.myriadwebpro', { 
			fontFamily: 'MyriadWebPro-Bold', 
			hover: true
		});
		// if (window.PIE && !$('html').hasClass('ie7')) {
		// 		       $('#nav ul.menu li a').each(function() {
		// 	            PIE.attach(this);
		// 	        });
		// 	    }
	};
	
	CP.common.prototype.initListeners = function() {		
		
		//web-beta.archive.org/web/20120502214257/http://language select dropdown
		$('.top-level > a').click(function(e) {
			$(this).addClass('active');
			$('#langdropdown ul li ul').css('display', 'block');
			return false;
		});
		$('#langdropdown').mouseleave(function(){
			$('.top-level a').removeClass('active');
			$('#langdropdown ul li ul').hide();
		});
		
	};
	
	CP.common.prototype.load = function() {
		CP.global.runningVars.hasFlash = swfobject.hasFlashPlayerVersion("9");	
		this.initListeners();
		if ($('.blogscroll').length > 0) {
			this.initBlogContent();
			this.autoRotateBlogTitles();
		}
		this.initFonts();
		this.styleMobileFoooter();
		if (window.location.href.indexOf('/de/') > 0 && $('#bucket-fire').length > 0 && $('#bucket-puffle').length > 0) {
			$('#bucket-fire').show();
			$('#bucket-puffle').hide();
		}
		else
		{
			$('#bucket-fire').hide();
			$('#bucket-puffle').show();
		}
		this.initModal();
	};
	
	CP.common.prototype.initModal = function() {
		CP.global.runningVars.modal = new CP.utils.Modal({
			showClose: false,
			contentCloseDelegate: '.modal-close',
			onOpenComplete: function() {},
			onCloseComplete: function() {},
			onCloseStart: function() {},
			onOpenStart: function() {}
		});
	};
	
	CP.common.prototype.showModal = function(htmlFile, wrapId, openCallback, closeCallback) {
		$('#modal-content').load(htmlFile + ' #' + wrapId, function(){
			//web-beta.archive.org/web/20120502214257/http://open modal
			if (!closeCallback) closeCallback= null;
			if (!openCallback) openCallback= null;
			CP.global.runningVars.modal.open('', openCallback, closeCallback);
		});
	};
	
	CP.common.prototype.closeModal = function() {
		CP.global.runningVars.modal.close();
	}
	
	CP.common.prototype.initBlogContent = function() {
		// Set up content for blog scroll in header
		var XML = $.ajax({
							type: "GET", 
							url: CP.global.runningVars.rssURL, 
							success: function(data){
								var blog = $(data);
								var i = 0;
								var post = "";
								blog.find("item").each(function(index) {
									post = "<a href='" + $(this).find("link").text() + "'>" + $(this).find("title").text() + "</a>"; 
									if (i < 3) {
										$($('#nav ul.blogscroll li')[i]).html(post);
									}
									i = i+1;
								});
							}
						});
	};
	
	CP.common.prototype.showBlogTitle = function(index) {
		var self = this;
		if ($('#nav ul.blogscroll').length > 0) {
			$('#nav ul.blogscroll li.active').fadeOut(200, function(){
				$(this).removeClass('active');
				$($('#nav ul.blogscroll li')[index]).fadeIn(200, function(){
					$(this).addClass('active');
				});
			});
		}
	};
	
	CP.common.prototype.autoRotateBlogTitles = function() {
		var self = this;
		CP.global.runningVars.blogInterval = setInterval(function(){
			self.showBlogTitle(CP.global.runningVars.currentBlog);
			CP.global.runningVars.currentBlog = ((CP.global.runningVars.currentBlog+1) % 3);
		}, CP.global.runningVars.blogDelay);
	};
	
	CP.common.prototype.styleMobileFoooter = function() {
		/* legacy footer */
		$("#submit").hide();

		$("#page-changer select").change(function() {
			window.location = $("#page-changer select option:selected").val();
		});

		$.fn.extend({	 
			customStyle : function(options) {
				return this.each(function() {
					var currentSelected = $("option:first");
					$(this).after('<span class="customStyleSelectBox"><span class="customStyleSelectBoxInner">'+currentSelected.text()+'</span></span>').css({position:'absolute', opacity:0,fontSize:$(this).next().css('font-size')});
					var selectBoxSpan = $(this).next();
					var selectBoxWidth = parseInt($(this).width()) - 40;			
					var selectBoxSpanInner = selectBoxSpan.find(':first-child');
					selectBoxSpan.css({display:'inline-block'});
					selectBoxSpanInner.css({width:selectBoxWidth, display:'inline-block'});
					var selectBoxHeight = parseInt(selectBoxSpan.height()) + parseInt(selectBoxSpan.css('padding-top')) + parseInt(selectBoxSpan.css('padding-bottom'));
					$(this).height(selectBoxHeight).change(function(){
						selectBoxSpanInner.text($(this).val()).parent().addClass('changed');
					});
			  	});
			}
		});

		$(function(){
			$('select.styled').customStyle();
		});
	}

})(window.jQuery);

window.jQuery(document).ready(function(){
	window.common = new CP.common();
});
/*
     FILE ARCHIVED ON 21:42:57 May 02, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:10:54 Apr 19, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/