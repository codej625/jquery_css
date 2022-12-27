# 스크롤 위치에 따른 배너를 숨기고 보여주자!

```html
<div id="sticky-menu">...</div>
```

```javascript
// scroll 이벤트가 발생할 때마다 함수가 실행 됨
$(window).scroll(function() {
  // 스크롤 막대의 현재 세로 위치를 가져옴
  var nowScroll = $(window).scrollTop();
  // 스크롤 막대의 위치가 640보다 커졌을때 
  (nowScroll > 640) ? (
    // id #sticky_menu를 가진 태그를 show하고 200만큼 애니메이션
    $('#sticky_menu').show(200)
  ) : (
    $('#sticky_menu').hide(200)
  );
});
```