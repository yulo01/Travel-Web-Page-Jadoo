// $('#header__language').each(function() {
//     var $this = $(this),
//         numberOfOptions = $(this).children('option').length;

//     $this.addClass('select-hidden');
//     $this.wrap('<div class="header__language"></div>');
//     $this.after('<div class="select-styled"></div>');

//     var $styledSelect = $this.next('div.select-styled');
//     $styledSelect.text($this.children('option').eq(0).text());

//     var $list = $('<ul />', {
//         'class': 'select-options'
//     }).insertAfter($styledSelect);

//     for (var i = 0; i < numberOfOptions; i++) {
//         $('<li />', {
//             text: $this.children('option').eq(i).text(),
//             rel: $this.children('option').eq(i).val()
//         }).appendTo($list);
//         //if ($this.children('option').eq(i).is(':selected')){
//         //  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
//         //}
//     }

//     var $listItems = $list.children('li');

//     $styledSelect.click(function(e) {
//         e.stopPropagation();
//         $('div.select-styled.active').not(this).each(function() {
//             $(this).removeClass('active').next('ul.select-options').hide();
//         });
//         $(this).toggleClass('active').next('ul.select-options').toggle();
//     });

//     $listItems.click(function(e) {
//         e.stopPropagation();
//         $styledSelect.text($(this).text()).removeClass('active');
//         $this.val($(this).attr('rel'));
//         $list.hide();
//         //console.log($this.val());
//     });

//     $(document).click(function() {
//         $styledSelect.removeClass('active');
//         $list.hide();
//     });

// });

// $('.testimonials__slider').slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     vertical: true,
//     prevArrow: "<img class='testimonials__slider-arrow testimonials__slider-arrow-prev' src='../imag/slider-arrow-up.svg '>",
//     nextArrow: "<img class='testimonials__slider-arrow testimonials__slider-arrow-next' src='../imag/slider-arrow-down.svg '>"
// });

// let header = document.querySelector('.header'),
//     headerH = header.innerHeight(),
//     scrollOffset = document.querySelector(window).scrollTop();
// checkScroll(scrollOffset)

// document.querySelector(window).on('scroll', function() {
//     scrollOffset = document.querySelector(window).scrollTop();
// })

// function checkScroll(scrollOffset) {
//     if (scrollOffset >= headerH) {
//         header.classList.add('fixed')
//     } else {
//         header.removeClass('fixed');
//     }
// }

// **************  Burger Menu *******************