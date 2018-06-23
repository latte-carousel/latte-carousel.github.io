window.addEventListener("DOMContentLoaded", function() {
    var options = {
        count: 3,
        touch: true,
        buttons: true,
        dots: true,
        rewind: true,
        autoplay: 0,
        responsive: {
            "0": {
                count: 1.5,
                touch: true,
                buttons: false,
            },
            "480": {
                count: 2.5,
                touch: true,
                buttons: false,
            },
            "768": {
                count: 3,
                touch: false,
                dots: false,
            },
            "1440": {
                count: 4,
                touch: false,
                dots: false,
            },
        },
    };

    new latte.Carousel("#carousel", options);
});
