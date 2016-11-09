$(document).ready(function() {
	tools();
	scroll();
});

function tools(){
	 $('.carousel.carousel-slider').carousel({full_width: true});
	 $('.carousel').carousel();
	 $('ul.tabs').tabs();
	 $("#owl-demo").owlCarousel({
	 	autoPlay: 3000,
	 	items : 4,
	 	itemsDesktop : [1199,3],
	 	itemsDesktopSmall : [979,3],
	 	navigation : true,
	 	navigationText : ["anterior","siguiente"]
	 });
	$('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'right',
      closeOnClick: true,
      draggable: true
    }
  );
}

function scroll(){
	$(".menu li a").on("click",function(){
		var seccion = $(this).attr("data-menu");
		$("body").animate({ scrollTop: $("#item-"+seccion).offset().top},1000);
		console.log(seccion);
	});

    $("#scroll").on('click', function(){
    	$("body").animate({ scrollTop: $("#item-1").offset().top},1000);
    });
}