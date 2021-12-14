$(function() {

    $('.info__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                dots: false,
            }
        }, ]

    });

    $('.reviews__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                }
            },
            {
                breakpoint: 851,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 751,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            },

        ]
    });
});