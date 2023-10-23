# 반응형 웹에서 css를 공통적으로 관리하는 방법

<br/>

1. pc에서만 보이게하고 mobile에서는 숨기고 싶을때
```css
.p-show { display: block !important; } /* pc해상도에서는 표시됨 */

@media (max-width: 768px){  /* mobile 해상도에서는 표시 안 됨 */
.p-show { display: none !important; }
```
