(function(){
    $('header ul.nav').on('click', function(e) {
        var $target = (e.target),
            oldNumber = $('.content ul li.display').attr('class').charAt(4),
            newNumber = $target.className[5];

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

})();

function linkTo(rel) {
    $('html, body').animate({
        scrollTop: $('.' + rel).offset().top
    }, 1000);
}