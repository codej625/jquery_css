# 백그라운드에 이미지를 추가시켜보자!

```css
div::after { 
  content: '';  
  background: url(../../img/main/btn.png) no-repeat; 
  position: absolute; 
  width: 23%; 
  height: 27%; 
  bottom: 36px; 
  right: 32px; 
  background-size: 27px; 
}
```

```
상위 객체 postion은 relative로 준다.
```