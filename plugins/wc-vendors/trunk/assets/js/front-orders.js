jQuery(function () {
    jQuery('p.custom_tracking_link_field, p.custom_tracking_provider_field').hide();
    jQuery('div.order-comments, div.order-tracking').hide();

    jQuery('a.order-comments-link, a.order-tracking-link').on('click', function (e) {
        e.preventDefault();
        jQuery(this).next('div').slideToggle();
    });
});