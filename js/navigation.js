
$(document).ready(function () {

    var _navul,_nvap;	
	$('.bpsnav').hover(function(){
		_nvap = $(this).children("p")
		_navul = $(this).children("ul");

		if(_navul.css("display")=="none"){
			_nvap.children("a").addClass("asel");
		} else {
			_nvap.children("a").removeClass("asel");
		}
		_navul.stop(true).slideToggle(100);
	});
});