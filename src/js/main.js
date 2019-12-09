$(function () {

  $(window).scroll(function() {
    var url = window.location.hash;
    if($(this).scrollTop() >= window.innerHeight * 0.8 && url != '#8') {
        $('.top__menu').addClass('scrolled');
        $('.burger__menu-black').hide();
      }
      else{
        $('.top__menu').removeClass('scrolled');
        $('.burger__menu-black').show();
    }
  });

  $('.burger__menu').click(function () {
    $('.mobile__nav.header__nav-white').toggleClass('header__nav--open');
    $('.page__content').toggleClass('page__content-toggle');
    //$('.ham').toggleClass('active');
  });
  
  $('.burger__menu-black').click(function () {
    $('.header__nav-black').toggleClass('header__nav--open');
    $('.page__content').toggleClass('page__content-toggle');
    //$('.ham').toggleClass('active');
  });

  $('.mobile__nav-close').click(function(){
    $('.mobile__nav').removeClass('header__nav--open');
    $('.ham').removeClass('active');
    $('.page__content').removeClass('page__content-toggle');
    $('body').removeClass('scroll-hidden');
  });

  $('.cases__burger-icon').click(function () {
    $(this).toggleClass('clicked');
    $('.cases__nav').toggleClass('cases__nav--open');
  });

  $('.technologies__burger-icon').click(function () {
    $(this).toggleClass('clicked');
    $('.technologies__nav').toggleClass('technologies__nav--open');
  });

  $('.team__inner img').click(function () {
    $('.team__inner').toggleClass('team__inner--clicked');
  });

  $('.tab__link').click(function (){
    $('.cases__burger-icon').removeClass('clicked');
    $('.technologies__burger-icon').removeClass('clicked');
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

  $('.edu__link').click(function (){
    $('.popup__tabs').find('.popup__tab--open').removeClass('popup__tab--open');
    $('.popup__tab-menu').find('.popup__tab-link').removeClass('popup__tab-link--open');
    $('.popup__tab-edu').addClass('popup__tab--open');
    $('.popup__edu-link').addClass('popup__tab-link--open');
    $('body').addClass('scroll-hidden');
  });

  $('.exp__link').click(function (){
    $('.popup__tabs').find('.popup__tab--open').removeClass('popup__tab--open');
    $('.popup__tab-menu').find('.popup__tab-link').removeClass('popup__tab-link--open');
    $('.popup__tab-exp').addClass('popup__tab--open');
    $('.popup__exp-link').addClass('popup__tab-link--open');
    $('body').addClass('scroll-hidden');
  });

  $('.skill__link').click(function (){
    $('.popup__tabs').find('.popup__tab--open').removeClass('popup__tab--open');
    $('.popup__tab-menu').find('.popup__tab-link').removeClass('popup__tab-link--open');
    $('.popup__tab-skill').addClass('popup__tab--open');
    $('.popup__skill-link').addClass('popup__tab-link--open');
    $('body').addClass('scroll-hidden');
  });

  $('.popup__close-btn').click(function(){
    $('.popup__block').find('.popup--open').removeClass('popup--open')
    $('body').removeClass('scroll-hidden');
  });

  $('.popup__edu-link').click(function(){
    $('.popup__tab-menu').find('.popup__tab-link').removeClass('popup__tab-link--open');
    $('.popup__tabs').find('.popup__tab--open').removeClass('popup__tab--open');
    $('.popup__tab-edu').addClass('popup__tab--open');
    $('.popup__edu-link').addClass('popup__tab-link--open');
  });
  $('.popup__exp-link').click(function(){
    $('.popup__tab-menu').find('.popup__tab-link').removeClass('popup__tab-link--open');
    $('.popup__tabs').find('.popup__tab--open').removeClass('popup__tab--open');
    $('.popup__tab-exp').addClass('popup__tab--open');
    $('.popup__exp-link').addClass('popup__tab-link--open');
  });
  $('.popup__skill-link').click(function(){
    $('.popup__tab-menu').find('.popup__tab-link').removeClass('popup__tab-link--open');
    $('.popup__tabs').find('.popup__tab--open').removeClass('popup__tab--open');
    $('.popup__tab-skill').addClass('popup__tab--open');
    $('.popup__skill-link').addClass('popup__tab-link--open');
  });

   //------------------------------------- popups controlling-----------------------

  $.scrollify({
    section: ".slide-section",
    easing: "easeOutExpo",
    scrollSpeed: 1200,
    offset: 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll: true,
    before: function () {},
    after: function () {},
    afterResize: function () {},
    afterRender: function () {}
  });

  $('.nav__link').each(function () {
    var location = window.location.pathname;
    var link = this.pathname;
    if (location == link) {
      $(this).addClass('active');
    }
  });

  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 77,
    loop: false,
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

  $(function () {

    $container.isotope({
      itemSelector: '.blog__topic',
      getSortData: {
        symbol: '[data-postdate]',
        number: '.topic__views parseInt',
      }
    });
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