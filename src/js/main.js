$(function () {

  $('.burger__menu').click(function () {
    $('.mobile__nav.header__nav-white').toggleClass('header__nav--open');
    $('.page__content').toggleClass('page__content-toggle');
    $('.ham').toggleClass('active');
    $('html').addClass('scroll-hidden');
  });

  $('.burger__menu-black').click(function () {
    $('.header__nav-black').toggleClass('header__nav--open');
    $('.page__content').toggleClass('page__content-toggle');
    $('.ham').toggleClass('active');
    $('html').addClass('scroll-hidden');
  });

  $('.mobile__nav-close').click(function () {
    $('.mobile__nav').removeClass('header__nav--open');
    $('.ham').removeClass('active');
    $('.page__content').removeClass('page__content-toggle');
    $('html').removeClass('scroll-hidden');
  });

  $('.cases__burger-icon').click(function () {
    $(this).toggleClass('clicked');
    $('.cases__nav').toggleClass('cases__nav--open');
    $('.tab__content-item').toggleClass('tab__content-item--left');
  });

  $('.technologies__burger-icon').click(function () {
    $(this).toggleClass('clicked');
    $('.technologies__nav').toggleClass('technologies__nav--open');
    $('.tab__content-item').toggleClass('tab__content-item--left');
  });

  $('.tab__link').click(function () {
    $('.cases__burger-icon').removeClass('clicked');
    $('.technologies__burger-icon').removeClass('clicked');
    $('.tab__content-item').removeClass('tab__content-item--left');
  });

  //------------------------------------- popups controlling-----------------------

  $('.first-popup__link').click(function () {
    $('#first-popup').addClass('popup--open');
    $('body').addClass('scroll-hidden');
  });
  $('.second-popup__link').click(function () {
    $('#second-popup').addClass('popup--open');
    $('body').addClass('scroll-hidden');
  });
  $('.third-popup__link').click(function () {
    $('#third-popup').addClass('popup--open');
    $('body').addClass('scroll-hidden');
  });
  $('.fourth-popup__link').click(function () {
    $('#fourth-popup').addClass('popup--open');
    $('body').addClass('scroll-hidden');
  });
  $('.fifth-popup__link').click(function () {
    $('#fifth-popup').addClass('popup--open');
    $('body').addClass('scroll-hidden');
  });
  $('.sixth-popup__link').click(function () {
    $('#sixth-popup').addClass('popup--open');
    $('body').addClass('scroll-hidden');
  });
  $('.seventh-popup__link').click(function () {
    $('#seventh-popup').addClass('popup--open');
    $('body').addClass('scroll-hidden');
  });
  $('.eight-popup__link').click(function () {
    $('#eight-popup').addClass('popup--open');
    $('body').addClass('scroll-hidden');
  });
  $('.nineth-popup__link').click(function () {
    $('#nineth-popup').addClass('popup--open');
    $('body').addClass('scroll-hidden');
  });
  $('.tenth-popup__link').click(function () {
    $('#tenth-popup').addClass('popup--open');
    $('body').addClass('scroll-hidden');
  });
  $('.eleventh-popup__link').click(function () {
    $('#eleventh-popup').addClass('popup--open');
    $('body').addClass('scroll-hidden');
  });
  $('.tvelveth-popup__link').click(function () {
    $('#tvelveth-popup').addClass('popup--open');
    $('body').addClass('scroll-hidden');
  });
  $('.therteentnth-popup__link').click(function () {
    $('#therteentnth-popup').addClass('popup--open');
    $('body').addClass('scroll-hidden');
  });
  $('.fourteenth-popup__link').click(function () {
    $('#fourteenth-popup').addClass('popup--open');
    $('body').addClass('scroll-hidden');
  });

  $('.edu__link').click(function () {
    $('.popup__tabs').find('.popup__tab--open').removeClass('popup__tab--open');
    $('.popup__tab-menu').find('.popup__tab-link').removeClass('popup__tab-link--open');
    $('.popup__tab-edu').addClass('popup__tab--open');
    $('.popup__edu-link').addClass('popup__tab-link--open');
    $('body').addClass('scroll-hidden');
  });

  $('.exp__link').click(function () {
    $('.popup__tabs').find('.popup__tab--open').removeClass('popup__tab--open');
    $('.popup__tab-menu').find('.popup__tab-link').removeClass('popup__tab-link--open');
    $('.popup__tab-exp').addClass('popup__tab--open');
    $('.popup__exp-link').addClass('popup__tab-link--open');
    $('body').addClass('scroll-hidden');
  });

  $('.skill__link').click(function () {
    $('.popup__tabs').find('.popup__tab--open').removeClass('popup__tab--open');
    $('.popup__tab-menu').find('.popup__tab-link').removeClass('popup__tab-link--open');
    $('.popup__tab-skill').addClass('popup__tab--open');
    $('.popup__skill-link').addClass('popup__tab-link--open');
    $('body').addClass('scroll-hidden');
  });

  $('.popup__close-btn').click(function () {
    $('.popup__block').find('.popup--open').removeClass('popup--open')
    $('body').removeClass('scroll-hidden');
  });

  $('.popup__edu-link').click(function () {
    $('.popup__tab-menu').find('.popup__tab-link').removeClass('popup__tab-link--open');
    $('.popup__tabs').find('.popup__tab--open').removeClass('popup__tab--open');
    $('.popup__tab-edu').addClass('popup__tab--open');
    $('.popup__edu-link').addClass('popup__tab-link--open');
  });
  $('.popup__exp-link').click(function () {
    $('.popup__tab-menu').find('.popup__tab-link').removeClass('popup__tab-link--open');
    $('.popup__tabs').find('.popup__tab--open').removeClass('popup__tab--open');
    $('.popup__tab-exp').addClass('popup__tab--open');
    $('.popup__exp-link').addClass('popup__tab-link--open');
  });
  $('.popup__skill-link').click(function () {
    $('.popup__tab-menu').find('.popup__tab-link').removeClass('popup__tab-link--open');
    $('.popup__tabs').find('.popup__tab--open').removeClass('popup__tab--open');
    $('.popup__tab-skill').addClass('popup__tab--open');
    $('.popup__skill-link').addClass('popup__tab-link--open');
  });

  //------------------------------------- popups controlling-----------------------

  $('.nav__link').each(function () {
    var location = window.location.pathname;
    var link = this.pathname;
    if (location == link) {
      $(this).addClass('active');
    }
  });

  $('.team__hover-block').hover(
    function () {
      var id = Number($(this).attr('data-id'));
      $('.team__img-' + (id-2)).addClass('team__img--small');
      $('.team__img-' + (id-1)).addClass('team__img--medium');
      $('.team__img-' + (id)).addClass('team__img--big');
      $('.team__img-' + (id+1)).addClass('team__img--medium');
      $('.team__img-' + (id+2)).addClass('team__img--small');
    },
    function () {
      var id = Number($(this).attr('data-id'));
      $('.team__img-' + (id-2)).removeClass('team__img--small');
      $('.team__img-' + (id-1)).removeClass('team__img--medium');
      $('.team__img-' + (id)).removeClass('team__img--big');
      $('.team__img-' + (id+1)).removeClass('team__img--medium');
      $('.team__img-' + (id+2)).removeClass('team__img--small');
    }
  );

  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 77,
    loop: false,
    slideToClickedSlide: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 77
      }
    },
  });

  $('.science__tab-button').click(function (event) {
    var id = $(this).attr('data-id');
    $('.science__tabs').find('.science__tab').removeClass('science__tab--active').hide();
    $("#science__tab-" + id).addClass('science__tab--active').fadeIn();
    return false;
  });

  $('.science__contracts-img').hover(
    function () {
      var id = Number($(this).attr('data-id'));
      $('.science__contracts-img-' + (id+1)).addClass('science__contracts-img--active');
      $('.science__contracts-img-' + (id+2)).addClass('science__contracts-img--active');
      $('.science__contracts-img-' + (id+3)).addClass('science__contracts-img--active');
      $('.science__contracts-img-' + (id+4)).addClass('science__contracts-img--active');
      $('.science__contracts-img-' + (id+5)).addClass('science__contracts-img--active');
    },
    function () {
      var id = Number($(this).attr('data-id'));
      $('.science__contracts-img-' + (id+1)).removeClass('science__contracts-img--active');
      $('.science__contracts-img-' + (id+2)).removeClass('science__contracts-img--active');
      $('.science__contracts-img-' + (id+3)).removeClass('science__contracts-img--active');
      $('.science__contracts-img-' + (id+4)).removeClass('science__contracts-img--active');
      $('.science__contracts-img-' + (id+5)).removeClass('science__contracts-img--active');
    }
  );

  $('.wedo__btn').click(function(e){
    event.preventDefault();
    $('.wedo__tags').toggleClass('wedo__tags--show');
  });
  
  $('.competentions__btn').click(function(e){
    event.preventDefault();
    $('.competentions__list').toggleClass('competentions__list--show');
  });

  $('.tab__link').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.tab__content').find('.tab__content-item').removeClass('current-tab').hide();
    $('.tab__nav').find('.tab__link').removeClass('tab__link-current');
    $(this).addClass('tab__link-current');
    $(id).addClass('current-tab').fadeIn();
    $('.cases__nav').removeClass('cases__nav--open');
    $('.technologies__nav').removeClass('technologies__nav--open');
    return false;
  });

  $('#slider-one>.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    variableWidth: true,
    rows: "0",
    appendArrows: $('#slider-one'),
    responsive: [{
      breakpoint: 651,
      settings: {
        arrows: false
      }
    }, ]
  });

  $('#slider-two>.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    variableWidth: true,
    rows: "0",
    appendArrows: $('#slider-two'),
    responsive: [{
      breakpoint: 651,
      settings: {
        arrows: false
      }
    }, ]
  });

  $('#slider-three>.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    variableWidth: true,
    rows: "0",
    appendArrows: $('#slider-three'),
    responsive: [{
      breakpoint: 651,
      settings: {
        arrows: false
      }
    }, ]
  });

  $('#slider-four>.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    variableWidth: true,
    rows: "0",
    appendArrows: $('#slider-four'),
    responsive: [{
      breakpoint: 651,
      settings: {
        arrows: false
      }
    }, ]
  });

  $('.presentation__inner').slick({
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    variableWidth: true,
    touchMove: true,
    swipeToSlide: true,
    focusOnSelect: true,
    edgeFriction: 0.5,
    rows: "0",
    dots: true,
    appendDots: $('.presentation__inner'),
    appendArrows: $('.presentation__inner'),
  });

  // ----------------------------------------------------- tab slider ---------------------------
  $('.tabs__carousel').slick({
    infinite: false,
    variableWidth: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    rows: '0',
    touchMove: true,
    swipeToSlide: true,
    focusOnSelect: true,
    edgeFriction: 0.5
  });
  //----------------------------------------------------- tab slider ---------------------------

  $('.clients__logos-mobile').slick({
    infinite: false,
    arrows: false,
    variableWidth: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    rows: '0',
    touchMove: true,
    swipeToSlide: true,
    focusOnSelect: true,
    edgeFriction: 0.5
  });

  var $container = $('.blog__content');
  // sorting
  $('#blog__sort-box button').click(function () {
    // get href attribute, minus the #
    var $this = $(this);
    sortName = $this.attr('data-sort-by');
    asc = $this.parents('.sort').hasClass('asc');
    $container.isotope({
      sortBy: sortName,
      sortAscending: asc
    });
    return false;
  });

  $container.isotope({
    itemSelector: '.blog__topic',
    getSortData: {
      symbol: '[data-postdate]',
      number: '.topic__views parseInt',
    }
  });

  $('.sort__btn').click(function () {
    $(this).removeClass('sort__btn--on');
    $(this).siblings().addClass('sort__btn--on');
  });

  wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
  })
  wow.init();

  var position = [55.989973, 37.230520];

  function showGoogleMaps() {
    var latLng = new google.maps.LatLng(position[0], position[1]);
    var mapOptions = {
      zoom: 15,
      streetViewControl: false,
      scaleControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: latLng,
      styles: [{
          "elementType": "geometry",
          "stylers": [{
            "color": "#f5f5f5"
          }]
        },
        {
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#616161"
          }]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#f5f5f5"
          }]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#bdbdbd"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#eeeeee"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#757575"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#e5e5e5"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#9e9e9e"
          }]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{
            "color": "#ffffff"
          }]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#757575"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "color": "#dadada"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#616161"
          }]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#9e9e9e"
          }]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [{
            "color": "#e5e5e5"
          }]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [{
            "color": "#eeeeee"
          }]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#c9c9c9"
          }]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#9e9e9e"
          }]
        }
      ]
    };


    map = new google.maps.Map(document.getElementById('contacts__map'),
      mapOptions);

    // Show the default red marker at the location
    marker = new google.maps.Marker({
      position: latLng,
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP
    });
  }

  google.maps.event.addDomListener(window, 'load', showGoogleMaps);

  $('.contact-form__input-label>input').on('keydown keypress keyup paste change input', function () {
    if ($("#input-name").val() != "") {
      $('#wrapper-name').addClass('wrapper-filled');
    } else {
      $('#wrapper-name').removeClass('wrapper-filled');
    }
    if ($("#input-phone").val() != "") {
      $('#wrapper-phone').addClass('wrapper-filled');
    } else {
      $('#wrapper-phone').removeClass('wrapper-filled');
    }
    if ($("#input-text").val() != "") {
      $('#wrapper-text').addClass('wrapper-filled');
    } else {
      $('#wrapper-text').removeClass('wrapper-filled');
    }
  });
});