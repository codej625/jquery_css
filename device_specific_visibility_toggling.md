# 반응형 웹에서 디바이스별로 CSS를 관리하는 방법

<br/>

1. 반응형 사이트를 제작 시 PC에서만 보이게하고 Mobile에서는 숨기고 싶을때
```css
/* 특정 요소에 사용할 class를 만든다. ex) p-show */
.p-show { display: block !important; } /* pc해상도에서는 표시됨 */

@media (max-width: 768px){ /* mobile 해상도에서는 표시 안 됨 */
.p-show { display: none !important; }
```
