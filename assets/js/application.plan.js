(function(channon, $) {
	"use strict";
	channon.plan = channon.plan || {};

	channon.plan.init_plan_display = function() {
		$('.js-api-url').click( function() {
			this.select();
		});
	};

})(window.channon = window.channon || {}, jQuery);

$(function(){
	channon.plan.init_plan_display();
});
