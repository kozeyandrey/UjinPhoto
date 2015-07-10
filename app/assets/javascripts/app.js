(function () {

    $('header ul.nav').on('click', function (e) {
        var $target = $(e.target),
            oldNumber = $('.content ul li.display')[0].className[4],
            newNumber = $target[0].className[5];

        if (oldNumber !== newNumber) {
            $('#nav-page' + oldNumber)
                .removeClass('display')
                .addClass('no-display');
            $('#nav-page' + newNumber)
                .removeClass('no-display')
                .addClass('display');

            $('.photo' + oldNumber)
                .removeClass('photo' + oldNumber + '-active');
            $('.photo' + newNumber)
                .addClass('photo' + newNumber + '-active');

            $('#page' + oldNumber)
                .removeClass('display')
                .addClass('no-display');
            $('#page' + newNumber)
                .removeClass('no-display')
                .addClass('display');
        }
    });

    var slickConfig = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    };
    $('#ca-container-1').slick(slickConfig);
    $('#ca-container-2').slick(slickConfig);
    $('#ca-container-3').slick(slickConfig);
    $('#ca-container-4').slick(slickConfig);
    $('#ca-container-5').slick(slickConfig);
    $('#ca-container-6').slick(slickConfig);
    $('#ca-container-7').slick(slickConfig);


    $('#tabs').tabs();
    $('#tabs ul li a').on('click', function(e) {
        var tabId = $(e.target).attr('href');
        $(tabId).find('button.slick-next').click();
    });
    $('#textarea').val('');


    $('.content ul.book-list ul img').on('click', function (e) {
        var $el = $(e.target).parent().parent().parent().find('img').first();
        $el.animate({
            opacity: 0
        }, 200, function () {
            $el[0].src = $(e.target)[0].src;
            $el.animate({
                opacity: 1
            }, 200);
        });
    });

})();

function linkTo(rel) {
    $('html, body').animate({
        scrollTop: $('.' + rel).offset().top
    }, 1000);
}