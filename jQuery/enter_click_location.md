# 클릭 혹은 엔터키로 주소를 이동하여 보자!

```html
<div class="wrap">
  <ul>
    <li data-nav="test_1">
      <a>test_01</a>
    </li>
    <li data-nav="test_2">
      <a>test_02</a>
    </li>
    <li data-nav="test_3">
      <a>test_03</a>
    </li>
    <li data-nav="test_4">
      <a>test_04</a>
    </li>
    <li data-nav="test_5">
      <a>test_05</a>
    </li>
    <li data-nav="test_6">
      <a>test_06</a>
    </li>
  <ul>
</div>
```

```javascript
$("[data-nav]").click(function() {
  var _url = $(this).data("nav");
  alert(location.href);
  location.href = "/" + _url + ".html" + window.location.search;
});

// 20230221 웹 접근성
$("[data-nav]").on("keyup",function(key){
  if(key.keyCode==13) { // enter시 keyup event
    var _url = $(this).data("nav");
    location.href = "/" + _url + ".html" + window.location.search;
  }
});
```