# ajax를 활용하자!

```javascript
$('#id').click(function() {

  // true or false를 위한 confirm
  var ask = confirm('text');

  // ask => ture일시 실행
  if (ask) {

    var fseq = seq;

    $.ajax({
      type: 'POST', // or 'GET'
      url: '/url',
      data: // data를 명시 ex) data: list = {list: item, idx},
      contentType: 'application/x-www-form-urlencoded',
      beforeSend: function(xmlHttpRequest) {
        var csrfToken  = $('meta[name="_csrf"]').attr('content');
        var csrfHeader = $('meta[name="_csrf_header"]').attr('content');
        // csrf 처리 (인증)
        xmlHttpRequest.setRequestHeader(csrfHeader, csrfToken);
      },
      success: function(res) {
        
        (res == 1) ? alert('success') : alert('error');
        location.reload();
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert(`${textStatus}error 서버에 문제가 발생하였습니다. 다시 시도해주세요`);
      }
    });

  } else {
    // ask => false일시 실행
    alert('text');
  }
});
```