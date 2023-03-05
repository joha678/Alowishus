$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active')
        $('body').toggleClass('lock')
    })
    $('.header__menu').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active')
    })
})

$('.variable-width').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay:true
});