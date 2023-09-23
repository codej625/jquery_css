# 간단하게 애니메이션을 적용해 보자!

1. css 추가
```html
<link rel="stylesheet" href="css/animations.css">
```

2. animations 적용 
ex) 적용 예시 class 이름을 붙여준다.
```html
<div class="slideUp">
``` 
ex2) 입구 애니메이션을 적용을 하려면,
해당 요소에 visibility: hidden 속성을 추가하여 그들을 보이지 않게 만들어야 합니다.
```css
#object{
	background-color: #fe5652;
	visibility: hidden;
}
```

3. 종류
```
Entrances
slideUp ↑ 
slideDown ↓ 
slideLeft ← 
slideRight → 
slideExpandUp ↑ 
expandUp ↑ 
fadeIn
expandOpen 
bigEntrance 
hatch
```
```
Misc
bounce 
pulse 
floating 
tossing 
pullUp ↑ 
pulldown ↓ 
stretchLeft ← 
stretchRight →
```