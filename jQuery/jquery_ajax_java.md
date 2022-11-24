# jQuery ajax 와 java를 활용하여 get방식으로 통신해보자!


```javascript
function phoneNumberChk() {
    var result;
 
    // form값을 배열로 받는다.
    var $form       = $('#submit_form1').serializeArray();
    var phoneNumber = $form[4].value;
 
    $.ajax({
        // get 방식이기 때문에 url에 리터럴을 사용하여 파라미터로 값을 붙인다.
        url: `/selectPhoneNum?page=${cur_page_url}&phone=${phoneNumber}`,
        type: 'get',
        // 로직을 순차적으로 실행하기 위한 동기식 처리
        async: false,
        success: function(res) {      

        return (res === 0) ? result = 0 : result = 1;
        },
        error: function(e) {

            alert("일시적인 오류입니다. 문제가 지속될 경우 관리자에게 문의해주세요.");
        }
    });
    return value;
}
```

```java
    @ResponseBody
    @GetMapping(value = "/selectPhoneNum")
    public int selectPhoneNumber (HttpServletRequest request) throws Exception {
      
        log.info(">>> test selectPhoneNum => {}, {}>>>", request.getParameter("page"), request.getParameter("phone"));
      
        return 0;
    }

```
