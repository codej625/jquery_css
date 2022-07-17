# button으로 add되는 input만들기

## html

```html
  <form method="post" id="form">
    <div id="text-add">
      <p>
        <textarea name="refund"></textarea>
        <button type="button" id="button">ADD</button>
      </p>
    </div>
  </form>
```


## script

```javascript
$(function() {
	// escaping
	var url = decodeURIComponent(window.location.href);
	// 필요한 parameter
	var seq = url.substring(52, 59);
	// button click event
	$("#refund").click(function() {
		// true or false를 위한 confirm
		var ask = confirm("기존에 페이지 텍스트가 등록되어 있는경우 삭제된 후, 업로드한 텍스트로 변경됩니다. 정말 텍스트를 등록하시겠습니까?");
		// ture일시 실행
		if (ask) {
			// form속에 input 값을 직렬화해서 가져온후 fseq값을 붙임
			var param = $('#refund-form').serialize();
			param += seq;
			alert(param)
			$.ajax({
				type: 'POST',
				url: '/url',
				data: param,
				dataType: 'text',
				contentType: 'application/x-www-form-urlencoded',
				beforeSend: function(xmlHttpRequest) {
					var csrfToken = $('meta[name="_csrf"]').attr('content');
					var csrfHeader = $('meta[name="_csrf_header"]').attr('content');
					// csrf 처리
					xmlHttpRequest.setRequestHeader(csrfHeader, csrfToken);
				},
				success: function() {
					alert('upload 성공');
					location.reload();
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					alert('서버에 문제가 발생하였습니다. 다시 시도해주세요');
					location.reload();
				}
			});
		} else {
			alert('upload를 취소하셨습니다.')
		}
	})
  // input 입력창 추가 로직
	$("#add-refund").click(function() {
		var box = document.getElementById("text-add");
		var newP = document.createElement('p');
		newP.innerHTML = '<textarea name="refund"></textarea><button type="button" onclick="remove(this)">delete</button>';
		box.appendChild(newP);
	});
});
// 추가 => 제거 버튼 obj => this
function remove(obj) {
  // id 'refund-text'를 찾아서 삭제한 노드 참조 반환 (부모 노드)
	document.getElementById('text-add').removeChild(obj.parentNode);
};
```


## java
```java

  // 20220622 text change start
  @RequestMapping(value = "/url")
  public void refundTexts(String refund, HttpSession httpSession) throws Exception {
    log.info(">> start >>");

    // admin check
    if (!hasAuth(httpSession, Constants.KEY, AuthDTO.LIST)) {
        throw new UnauthorizedException();
    }
    
    // global variable
    int seq;
    String seq_text;
    String final_text;
    
    // fseq key가 6자리 or 7자리인지 구별하기 위한 변수 
    int fseq_6 = (int) refund.length() - 6;
    int fseq_7 = (int) refund.length() - 7;
    
    // fseq=x or fseq=1x
    String seq_6 = refund.substring(fseq_6, refund.length());
    String seq_7 = refund.substring(fseq_7, refund.length());
    
    // fseq=x 검증을 위한 array
    String[] fseq_array = { "fseq=2", "fseq=3", "fseq=4", "fseq=5", "fseq=6", "fseq=7", "fseq=8", "fseq=9" };

    // fseq_array를 돌려서 fseq=x와 같은게 있으면
    if (Arrays.asList(fseq_array).contains(seq_6)) {
        // seq key값을 알아내기 위해 5자리부터 잘라서 형변환 후 seq변수에 대입 
        seq = Integer.parseInt(seq_6.substring(5, seq_6.length()));
        // String 마지막에 fseq=x값을 .으로 변환
        seq_text = refund.replace(seq_6, ".");
    } else {
        seq = Integer.parseInt(seq_7.substring(5, seq_7.length()));
        seq_text = refund.replace(seq_7, ".");
    }
    
    // tag add
    // input값을 ","기준으로 구별하기 때문에 ,을 태그로 변환
    String refundTexts = seq_text.replace(",", "<br><br>");
    // 완성된 문장에 태그를 붙임
    refundTexts += "<br><br>";
    
    // mapper로 parameter를 보내서 db update
    // 사전에 db에 값을 넣어놓는 작업 필요 (update를 위해)
  
  }
  // 20220622 end
```
