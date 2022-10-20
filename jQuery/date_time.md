# 테이블에서 시간과 날짜를 표현할때

```javascript
$('name').on('click', function() {
  
  // insert url
  var recordUrl    = //url;
  
  var recordResult = ajaxLoad(recordUrl);
  
  // create table func
  visitTable(recordResult);
  alert('데이터를 조회하였습니다. 잠시만 기다려주세요');
});
```

```javascript
function ajaxLoad(url) {
  
  var _result;
  var formDatas = $('#data').serialize();

  $.ajax({
    'url': url,
    'data': datas,
    'type': 'POST',
    'async': false,
    'success': function(res) {
      _result = res;
    },
    'error': function(jqXHR, textStatus, errorThrown) {
      alert('서버에 문제가 발생하였습니다. 다시 시도해주세요');
    }
  });
  
  return _result;
};
```


```javascript
function timestamp(_date) {
  
  var date  = new Date(_date);
  var day   = ("0" + date.getDate()).slice(-2);
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var year  = date.getFullYear();
  
  var returnDate = year + '-' + month + '-' + day;
  
  return returnDate;
}

function timestamp_second(_date) {
  var date  = new Date(_date);
  var hours = ('0' + date.getHours()).slice(-2); 
  var minutes = ('0' + date.getMinutes()).slice(-2);
  var returnDate = hours + ':' + minutes;
  
  return returnDate;
}
```

```javascript
function visitTable(_datas) {
  
  var html   = '';
  
  for (var i = 0; i < _datas.length; i++) {
    var seq   = _datas.length - i;
       html  +=
      '<tr>' +
      '<td>' + seq + '</td>' +
      '<td>' + timestamp(_datas[i].coulmn) + '</td>' +
      '<td>' + timestamp_second(_datas[i].coulmn) + '</td>' +
      '<td>' + _datas[i].coulmn + '</td>' +
      '<td>' + _datas[i].coulmn + '</td>' +
      '<td>' + setData(_datas[i].coulmn) + '</td>' +
      '<td>' + setData(_datas[i].coulmn) + '</td>' +
      '<td>' + setData(_datas[i].coulmn) + '</td>' +
      '<td>' + setData(_datas[i].coulmn) + '</td>' +
      '<td>' + setData(_datas[i].coulmn) + '</td>' +
      '<td>' + setData(_datas[i].coulmn) + '</td>' +
      '<td>' + setData(_datas[i].coulmn) + '</td>' +
      '<td>' + setData(_datas[i].coulmn) + '</td>' +
      '</tr>';
  }

  $('#tbl').html(html);
}
```