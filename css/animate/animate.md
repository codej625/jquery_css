# 간단하게 animation을 적용해보자!

1. npm으로 설치
```
npm install animate.css --save
```

<br/>

2. yarn으로 설치
```
yarn add animate.css
```
<br/>

npm, yarn 공통
```
import 'animate.css';
```

3. cdn으로 설치
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
```

4. css file import
```html
<link rel="stylesheet" type="text/css" href="/css/common/animate.min.css">
```

<br/>

ex) animate__animated class를 추가하고 뒤에 사용할 애니메이션 클래스를 추가한다.
```
<h1 class="animate__animated animate__bounce">An animated element</h1>
```

* 참고
```
https://animate.style/
```