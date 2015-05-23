(function(){
    $('header ul.nav').on('click', function(e) {
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

    $('.content ul.book-list ul img').on('click', function(e) {
        $(e.target).parent().parent().parent().find('img')[0].src = $(e.target)[0].src;
    });



    $('.content .page2 .big-list-photo img').on('click', function(e) {

        console.log('hi');
    });

})();

function linkTo(rel) {
    $('html, body').animate({
        scrollTop: $('.' + rel).offset().top
    }, 1000);
}