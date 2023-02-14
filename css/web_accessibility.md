# 웹 접근성 키보드 포커스 처리를 해보자!

```css
/* 키보드로 버튼에 포커스 시 */
button:focus-visible {
  outline: 3px solid #000;
}

/* 마우스, 터치로 버튼에 포커스 시 */
button:focus:not(:focus-visible) {
  outline: none;
  box-shadow: 1px 1px 5px rgba(1, 1, 0, .7);
}
```