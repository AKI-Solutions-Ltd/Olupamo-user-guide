/* Toggle release dates on mobile */

$('#release-dates-mb').on('click', function (e) {
    e.preventDefault();
    $('.release-dates').slideToggle();
    $('.navbar-collapse').css('display', none);
});
