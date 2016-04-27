
$(function($){


 var  mn = $("#navbar");
   var mns = "main-nav-scrolled";
   var hdr = $('#top-contact').height();
console.log(hdr);
    $(window).scroll(function() {
      if( $(this).scrollTop() > hdr ) {
        mn.addClass(mns);
        mn.css("position","fixed");
      } else {
        mn.removeClass(mns);
      }

      console.log(window.pageYOffset);
      var div_offset=window.pageYOffset;
      if(div_offset>499){
        $("#int-sol section img").css("opacity","1");
        $("#social_tray").css("display","block");
      }
      else{
       $("#int-sol section img").css("opacity","0");
        $("#social_tray").css("display","none");
      }
    });


var flag=0;


$(".menu").click(function(){

	if($(".cssmenu").css('display')==="none"){
	$(".cssmenu").css({"display":"block","background":"rgba(0,0,0,.3)"}).animate({width:"20%"},500);
	$(".menu").css({"color":"white","background-color":"rgba(256,100,100,.9)","border-radius":"2px","text-shadow":"1px 1px 1px black"});
	$(".menu").css({"margin-right":"150px"});
	}
	else{
		$(".cssmenu").animate({width:"0%"},500);
		$(".cssmenu").css("display","none");	
		$(".menu").css({"color":"black","background-color":"white","text-shadow":"0px 0px 0px ","margin-right":"0px"});
	}
});


  //rotation speed and timer
  var speed = 5000;
  
  var run = setInterval(rotate, speed);
  var slides = $('.slide');
  var container = $('#slides ul');
  var elm = container.find(':first-child').prop("tagName");
  var item_width = container.width();
  var previous = 'prev'; //id of previous button
  var next = 'next'; //id of next button
  slides.width(item_width); //set the slides to the correct pixel width
  container.parent().width(item_width);
  container.width(slides.length * item_width); //set the slides container to the correct total width
  container.find(elm + ':first').before(container.find(elm + ':last'));
  resetSlides();
  
  
  //if user clicked on prev button
  
  $('#buttons a').click(function (e) {
    //slide the item
    
    if (container.is(':animated')) {
      return false;
    }
    if (e.target.id == previous) {
      container.stop().animate({
        'left': 0,
        'opacity': 0
      }, 500, function () {
        container.find(elm + ':first').before(container.find(elm + ':last'));
        resetSlides();
      });
    }
    
    if (e.target.id == next) {

      container.stop().animate({
        'left': item_width * -2,
        'opacity': 0
      }, 500, function () {
        container.find(elm + ':last').after(container.find(elm + ':first'));
        resetSlides();

      });

    }
    
    //cancel the link behavior      
    return false;
    
  });
  
  //if mouse hover, pause the auto rotation, otherwise rotate it  
  $(".myLoc").mouseenter(function () {
    clearInterval(run);
  }).mouseleave(function () {
    run = setInterval(rotate, speed);
  });
  
  
  function resetSlides() {
    //and adjust the container so current is in the frame
    container.css({
      'left': -1 * item_width,
      'opacity':".8"
    });
  }
  




//Carousel

$(".carouse_image").click(function(){
  var name=$(this).index(".carouse_image");
   console.log(name);
    slides.width(item_width); //set the slides to the correct pixel width
  container.parent().width(item_width);
  container.width(slides.length * item_width); //set the slides container to the correct total width
  container.find(elm + ':first').before(container.find(elm + ':last'));
  resetSlides();
    
});
});
//a simple function to click next link
//a timer will call this function, and the rotation will begin

function rotate() {
  $('#next').click();
}


//Scroll back to top

 var scrollY = 0;
var distance = 60;
var speed = 40;
function autoScrollTo(el) {
  var currentY = window.pageYOffset;
  var targetY = document.getElementById(el).offsetTop;
  var bodyHeight = document.body.offsetHeight;
  var yPos = currentY + window.innerHeight;
  var animator = setTimeout('autoScrollTo(\''+el+'\')',10);
  if(yPos > bodyHeight){
    clearTimeout(animator);
  } else {
    if(currentY < targetY-distance){
        scrollY = currentY+distance;
        window.scroll(0, scrollY);
      } else {
        clearTimeout(animator);
      }
  }
}
function resetScroller(el){
  var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
  var animator = setTimeout('resetScroller(\''+el+'\')',speed);
  if(currentY > targetY){
    scrollY = currentY-distance;
    window.scroll(0, scrollY);
  } else {
    clearTimeout(animator);
  }
}

