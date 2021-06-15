$(".hero__wrap").slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
    autoplay: true,
	prevArrow: '<div class="slick-prev"></div>',
	nextArrow: '<div class="slick-next"></div>',
    dots: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    responsive:[{
        breakpoint: 766,
        setting: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});

var slider;
var sliderFlag = false;
var breakpoint = 768;
  
function sliderSet() {
        var windowWidth = window.innerWidth;
        if (windowWidth >= breakpoint && !sliderFlag) {
            slider = $('.news__items').bxSlider({
            touchEnabled:false,
			mode: 'horizontal',
			controls: false,
			auto: 'true',
			pager: false,
			speed: 1000
		});
            sliderFlag = true;
        } else if (windowWidth < breakpoint && sliderFlag) {
            slider.destroySlider();
            sliderFlag = false;
        }
    }

$(window).on('load resize', function() {
        sliderSet();
});

$(".openbtn").click(function () {
    $(this).toggleClass('active');
      $(".g-nav").toggleClass('panelactive');
  });

  $(".g-nav a").click(function () {
    $(".openbtn").removeClass('active');
    $(".g-nav").removeClass('panelactive');
});

$('.title').on('click', function() {
    var findElm = $(this).next(".box");
    $(findElm).slideToggle();
      
    if($(this).hasClass('close')){
      $(this).removeClass('close');
    }else{
      $(this).addClass('close');
    }
  });