# 제이쿼리를 사용해서 form속의 값을 직렬화 시켜보자!

<br />

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
  <title>serialize</title>
</head>

<body>
  <form id="frm">
    <label for="name">이름</label>
    <input id="name" name="name" type="text" />
    <br />
    <label for="age">나이</label>
    <input id="age" name="age" type="text" />
  </form>
  <br />
  <button id="frm-btn" type="button">확인</button>

  <script>
    $("#frm-btn").on("click", function () {
      var serializeResult = $("#frm").serialize();
      var serializeArrayResult = $("#frm").serializeArray();

      $("#frm")[0].reset(); /* Reset input values */

      var decodedSerialize = decodeURIComponent(serializeResult); /* decode */
      console.log('serialize() => ', decodedSerialize); /* serialize() */
      
      for (var i = 0; i < serializeArrayResult.length; i++) { /* serializeArray() */
        console.log('serializeArray() => ', serializeArrayResult[i]);
      }
    })
  </script>
</body>

</html>
```
