# hover를 chain으로 해보자!

```html
<ul>
    <li class="list">
        <a href="#">
            <div>list<br>1</div>
            <div><b>〉</b></div>
        </a>
    </li>
    <li class="list">
        <a href="#">
            <div>list<br>2</div>
            <div><b>〉</b></div>
        </a>
    </li>
    <li class="list">
        <a href="#">
            <div>list<br>3</div>
            <div><b>〉</b></div>
        </a>
    </li>
    <li class="list">
        <a href="#">
            <div>list<br>4</div>
            <div><b>〉</b></div>
        </a>
    </li>
</ul>
```

```javascript
$('.list').hover( function(){
  $(this).css('backgroundColor', '#eeeeee');
}, function(){
  $(this).css('backgroundColor', '#fff');
});
```