# jQuery ajax를 사용하여 비동기 게시판을 만들어보자!

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
  <title>Document</title>
</head>

<body>
  <div class="card shadow mb-4">
    <div class="card-body">
      <div class="div-button">
        <div>
          <form id="date">
            <input id="dateStart" class="form-control ml-1" name="dateStart" type="date" value="" />
            <input id="dateEnd"   class="form-control ml-1" name="dateEnd"   type="date" value="" />
          </form>
          <button class="btn btn-outline-secondary" id="dayCalc">날짜 검색</button>
        </div>
        <div>
          <button id="excel-down" class="btn btn-outline-secondary ml-1" type="button">엑셀 다운로드</button>
          <button id="refresh"    class="btn btn-outline-secondary"      type="button">새로 고침</button>
        </div>
      </div>
      <div class="table-responsive">
        <table id="tb-1" class="table table-hover table-bordered">
          <thead>
            <tr>
              <th>no</th>
              <th>req_date</th>
              <th>time</th>
              <th>ip</th>
              <th>device</th>
            </tr>
          </thead>
          <tbody id="tbl">

          </tbody>
        </table>
      </div>
    </div>
  </div>
  ```

  ```javascript

    $(function () {
      var date = new Date();
      var day = dateCalc(date);

      var startDay = $('#dateStart').val();
      var endDay = $('#dateEnd').val();

      if (startDay == '' && endDay == '') {
        $('#dateStart').val(day);
        $('#dateEnd').val(day);
      }
    });
    //======================================================================================
    function ajaxLoad(url) {

      var _result;
      var formDatas = $('#date').serialize();

      $.ajax({
        'url': url,
        'data': formDatas,
        'type': 'POST',
        'async': false,
        'beforeSend': function (xmlHttpRequest) {
          // var csrfToken = $('meta[name="_csrf"]').attr('content');
          // var csrfHeader = $('meta[name="_csrf_header"]').attr('content');
          // xmlHttpRequest.setRequestHeader(csrfHeader, csrfToken); // csrf 처리
        },
        'success': function (res) {
          _result = res;
        },
        'error': function (jqXHR, textStatus, errorThrown) {
          alert('서버에 문제가 발생하였습니다. 다시 시도해주세요');
        }
      });

      return _result;
    };

    //======================================================================================
    $('#dayCalc').on('click', function () {

      // insert url
      var recordUrl = 'test/url';

      var recordResult = ajaxLoad(recordUrl);

      // create table func
      alert('데이터를 조회하였습니다. 잠시만 기다려주세요');
      table(recordResult);
    });
    //======================================================================================
    function timestamp(_date) {

      var date       = new Date(_date);
      var day        = ("0" + date.getDate()).slice(-2);
      var month      = ("0" + (date.getMonth() + 1)).slice(-2);
      var year       = date.getFullYear();
      var returnDate = year + '-' + month + '-' + day;

      return returnDate;
    }

    function timestamp_second(_date) {
      var date       = new Date(_date);
      var hours      = ('0' + date.getHours()).slice(-2);
      var minutes    = ('0' + date.getMinutes()).slice(-2);
      var returnDate = hours + ':' + minutes;

      return returnDate;
    }
    //======================================================================================
    function setData(_date) {

      if (_date == null) {
        return '';
      } else if (_date == undefined) {
        return '';
      } else if (_date == '') {
        return '';
      } else {
        return _date;
      }
    }
    //======================================================================================
    function fnTbInfoExcel() {

      var fileName = day + ' testExcel.xlsx';
      var workBook = XLSX.utils.table_to_book(document.getElementById('tb-1'), { sheet: 'testExcel', raw: true });

      XLSX.writeFile(workBook, fileName, { bookType: 'xlsx', type: 'binary' });
    }

    $('#excel-down').on('click', function () {
      return fnTbInfoExcel();
    });
    //======================================================================================
    $('#refresh').on('click', function () {
      window.location.reload();
    });
    //======================================================================================
    function table(_datas) {

      var html = '';

      for (var i = 0; i < _datas.length; i++) {

        var seq = _datas.length - i;

        html +=
          '<tr>'   +
            '<td>' + seq + '</td>' +
            '<td>' + timestamp(_datas[i].req_time) + '</td>' +
            '<td>' + timestamp_second(_datas[i].req_time) + '</td>' +
            '<td>' + setData(_datas[i].test1) + '</td>' +
            '<td>' + setData(_datas[i].test2) + '</td>' +
          '</tr>';
      }
      $('#tbl').html(html);
    }
    //======================================================================================
  ```
</body>

</html>