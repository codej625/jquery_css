# mouse over slide 효과

```javascript
$('.header-bottom').on('mouseenter', function() {
  $('.nav-detail').removeClass('blockHidden');
  $('.nav-detail').addClass('blockShow');
});

$('.nav-detail').on('mouseleave', function() {
  $('.nav-detail').addClass('blockHidden');
  $('.nav-detail').removeClass('blockShow');
});
```
