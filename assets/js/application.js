(function(channon, $) {
	"use strict";
	channon = channon || {};

	channon.init_footer_button = function() {
		$('.footer-link').raptorize();
	}

})(window.channon = window.channon || {}, jQuery);

$(function(){
	channon.init_footer_button();
});
