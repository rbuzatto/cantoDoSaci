'use strict';

$(document).ready(function () {

  /* --- GALLERY --- */
  var currentGallery = 3; // = 3 pq no momento inicial é a galeria que o css da preferencia (apesar de nao ser visualizada)
  // deslize para as galerias de acordo com a galeria selecionada
  /* REMOVIDO A PEDIDO */
  // $('.js--main').click(function(e) {
  //   let i;
  //   for ( i = 1 ; i <= 3; i++) {
  //     if ($(this).is(`.js--main--${i}`)) {
  //       $(`.gallery__page--${i}`).css('zIndex', '1');
  //       $('.gallery__box').addClass('gallery__box--trans');
  //       setTimeout(function(){ 
  //         $('.gallery__side-options').animate({width: 'toggle'}, 400);
  //       }, 800);
  //       currentGallery = i;
  //      return;
  //     }
  //   }
  // });

  // 1 - fechar o side-options; 2 - fixar galeria na posição inicial com function para resolver Promise 'done'
  /* REMOVIDO A PEDIDO */
  // $('.js--gal-close').click(function(e) {
  //   $('.gallery__side-options').animate({width: 'toggle'}, 
  //   {duration: 400,                
  //   done: function() {$('.gallery__box').removeClass('gallery__box--trans');
  //     setTimeout(function(){
  //       for (let i = 1 ; i <= 3; i++) {
  //         $(`.gallery__page--${i}`).css('zIndex', '');
  //       }
  //     }, 600);}
  //   }
  //   );
  // });

  // troca de galerias 
  var galleryFadeTime = 800;
  $('.js--gal-btn--1').click(function (e) {
    if (currentGallery !== 1) {
      var i = currentGallery;
      $('.gallery__page--1').css('left', '-100%');
      $('.gallery__page--1').css('zIndex', '1');
      $('.gallery__page--' + i).css('zIndex', '0');
      $('.gallery__page--1').animate({ left: '0' }, galleryFadeTime, function () {
        $('.gallery__page--' + i).css('zIndex', '');
        currentGallery = 1;
      });
    }
  });

  $('.js--gal-btn--2').click(function (e) {
    if (currentGallery !== 2) {
      var i = currentGallery;
      $('.gallery__page--2').css('left', '-100%');
      $('.gallery__page--2').css('zIndex', '1');
      $('.gallery__page--' + i).css('zIndex', '0');
      $('.gallery__page--2').animate({ left: '0' }, galleryFadeTime, function () {
        $('.gallery__page--' + i).css('zIndex', '');
        currentGallery = 2;
      });
    }
  });

  $('.js--gal-btn--3').click(function (e) {
    if (currentGallery !== 3) {
      var i = currentGallery;
      $('.gallery__page--3').css('left', '-100%');
      $('.gallery__page--3').css('zIndex', '1');
      $('.gallery__page--' + i).css('zIndex', '0');
      $('.gallery__page--3').animate({ left: '0' }, galleryFadeTime, function () {
        $('.gallery__page--' + i).css('zIndex', '');
        currentGallery = 3;
      });
    }
  });

  /* --- CLOSE MENU CLICK OUTSIDE THE BOX ---*/
  $(document).click(function (e) {
    if ($('.menu').css('opacity') == 1) {
      if (!($(e.target).parents().is('.menu__box') || $(e.target).is('.menu__box'))) {
        window.location.href = "#";
      }
    }
  });

  /* --- ABA DE BUSCA DE ROTA --- */
  
  $('.maps__route-flag').on('click', function () {
    function flag() {
      var styleStatus = (document.getElementsByClassName('maps__route')[0].style.transform);
    if (styleStatus === '') {
      $(this).css('transform', 'translate(-50%, 0%)');
    } else {
      $(this).css('transform', '');
    }
  }
  flag.call('.maps__route');
  });

  /* --- FACA/COLHER HOVER --- */

  var tagSpoon = '<i class="ion-spoon"></i>';
  var addSpoon = function addSpoon() {
    $(this).after('<i class="ion-spoon navigation__nav-link__spoon"></i>');
    $('.navigation__nav-link__spoon').animate({ opacity: 1 });
  };

  var removeSpoon = function removeSpoon() {
    $(this).next().remove();
  };

  $('.navigation__nav-link').hover(addSpoon, removeSpoon);

  /* --- MENU --- */
  //cardapioPrint.js


  /* --- CAROUSEL --- */

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    navText: ['&larr;', '&rarr;'],
    nav: true,
    items: 1
  });

  $('.owl-carousel').css({ 'touch-action': 'manipulation' }); //pra nao dar ficar dando console.log no carousel


  $('.owl-prev').addClass('menu__buttons');
  $('.owl-next').addClass('menu__buttons');
  $('.owl-dot').addClass('menu__dots');

  /* -- sticky nav --- */
  var addStickyNav = function addStickyNav(direction) {
    if (direction === 'down') {
      $('nav').removeClass('navigation');
      $('nav').addClass('navigation--sticky');
      $('.navigation__nav-link').addClass('navigation__nav-link--sticky');
      $('.navigation__nav-list').addClass('navigation__nav-list--sticky');
      $('.navigation__mobile-box__icon').addClass('navigation__mobile-box__icon--sticky');
      // $('.navigation--sticky').css("top", "0");
    } else if (direction === 'up') {
      $('nav').removeClass('navigation--sticky');
      $('nav').addClass('navigation');
      $('.navigation__nav-link').removeClass('navigation__nav-link--sticky');
      $('.navigation__nav-list').removeClass('navigation__nav-list--sticky');
      $('.navigation__mobile-box__icon').removeClass('navigation__mobile-box__icon--sticky');
    }
  };

  var showStickyNav = function showStickyNav(direction) {
    if (direction === 'down') {
      $('.navigation--sticky').css("top", "0");
    } else if (direction === 'up') {
      $('.navigation--sticky').css("top", "");
    }
  };

  var waypointAddSticky = new Waypoint({
    element: document.getElementsByClassName('js--section--about'),
    handler: addStickyNav,
    offset: '45%'
  });

  var waypointShowSticky = new Waypoint({
    element: document.getElementsByClassName('js--section--about'),
    handler: showStickyNav,
    offset: '30%'
  });

  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]').not('[href="#0"]').not('[href="#menu"]').click(function (event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  /* --- MOBILE NAV --- */

  $('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    nav.animate({ width: 'toggle' }, 300);
    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });

  $('.navigation__nav-link').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    if (!icon.hasClass('ion-navicon-round')) {
      nav.animate({ width: 'toggle' }, 300);
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });

  /* --- FORM TAG ---  */

  $('#js--contact').on('submit', function (e) {
    e.preventDefault();
    var form = $(this);
    $.ajax({
      type: form.attr('method'),
      url: form.attr('action'),
      data: form.serialize(),
      success: messageSent
    });

    function messageSent(data) {
    $('.form__sent__box').fadeIn();
    $(this)[0].reset();
    setTimeout(function () {
      $('.form__sent__box').fadeOut();
    }, 3000);}
  });

    /* --- GALLERY IMAGE ---*/
  var galleryImg = 0;

  var galleryImgArray = [];
  galleryImgArray.length = $('.gallery__page').length;
  galleryImgArray.fill(0);
  function scope() {
    var i = 0;
    var gall;
    var figure = '.gallery__img__box';
  for(i; i < $('.gallery__page').length; i++) {
    gall = $('.gallery__page')[i];
    $($(gall).find($(figure))[0]).css('display', 'block');
    }
  };
  scope();

  var galleryImageFade = 300
$('.js--gallery-img--next').click(function(e) {
  var i = currentGallery - 1 ;
  var figure = '.gallery__img__box';
  var currentPage = $('.gallery__page--' + currentGallery);
  var galleryImg = galleryImgArray[i];
  var imgs = $(currentPage.find(figure));
  if (galleryImg < imgs.length - 1){
  $(imgs[galleryImg]).fadeOut(galleryImageFade, function() {
    $(imgs[galleryImg + 1]).fadeIn(galleryImageFade);
    galleryImg++;
    galleryImgArray[i] = galleryImg;
  });
  
  } else {
    $(imgs[galleryImg]).fadeOut(galleryImageFade, function() {
      galleryImg = 0;
      $(imgs[galleryImg]).fadeIn(galleryImageFade);
      galleryImgArray[i] = galleryImg;
    });
  }

});

$('.js--gallery-img--prev').click(function(e) {
  var i = currentGallery - 1 ;
  var figure = '.gallery__img__box';
  var currentPage = $('.gallery__page--' + currentGallery);
  var galleryImg = galleryImgArray[i];
  var imgs = $(currentPage.find(figure));
  if (galleryImg > 0){
  $(imgs[galleryImg]).fadeOut(galleryImageFade, function() {
    $(imgs[galleryImg - 1]).fadeIn(galleryImageFade);
    galleryImg--;
    galleryImgArray[i] = galleryImg;
  });
  
} else {
  $(imgs[galleryImg]).fadeOut(galleryImageFade, function() {
    galleryImg = imgs.length - 1;
    $(imgs[galleryImg]).fadeIn(galleryImageFade);
    galleryImgArray[i] = galleryImg;
  });
  
}
});
});