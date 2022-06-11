$(function () {
  var body = '#wrap > div > div > div';
  $(body).mouseenter(function () {
    $(this).find('.img').show();
  });
  $(body).mouseleave(function () {
    $(this).find('.img').hide();
  });
});