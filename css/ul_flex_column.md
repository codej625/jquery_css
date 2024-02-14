# ul에 list들을 flex를 사용하여 나열해보자!

<br />

```css
div > ul {
  display: flex;
  flex-direction: column;
  width: 100px;
  padding: 0 20px;
  border: 1px solid black;
}
div > ul > li {
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: center;
}
div > ul > li:last-child {
  border-bottom: none;
}
div>ul>li>div {
  border-bottom: 1px solid black;
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ul</title>
</head>

<body>
  <div>
    <ul>
      <li>
        <div>element01</div>
      </li>
      <li>
        <div>element02</div>
      </li>
      <li>
        <div>element03</div>
      </li>
      <li>
        <div>element04</div>
      </li>
    </ul>
  </div>
</body>

</html>
```
