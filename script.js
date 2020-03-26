$(window).on('load', function () {
    $('body').removeClass('preload');
    setTimeout(function () {
        $('.preloader').remove();
    }, 500);
});

(function ($) {
    $(window).on('load', function () {
        $.instagramFeed({
            'username': 'clarify_mmd',
            'container': "#instagram-feed1",
            'display_profile': true,
            'display_biography': true,
            'display_gallery': true,
            'callback': null,
            'styling': true,
            'items': 6,
            'items_per_row': 3,
            'margin': 1
        });
    });
})(jQuery);
