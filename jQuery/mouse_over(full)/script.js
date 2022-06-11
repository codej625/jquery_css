$(function () {
  var body = '#wrap > div > div > div';
  $(body).mouseenter(function () {
    $(this).find('.text').show();
  });
  $(body).mouseleave(function () {
    $(this).find('.text').hide();
  });
});