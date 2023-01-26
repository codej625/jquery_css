# ajax 여러가지 옵션을 알아보자!

```javascript
const obj = {};

$.ajax({
  url  : '/',
	type : "POST", // default => get
	data : obj,
	async: false, // default => 비동기(true)처리이고 동기(false)처리를 하려면 변경이 필요하다.
	timeout: 3000, // long polling을 구현하거나 연결 지연시 timeout을 피하기 위해 설정한다.
	dataType: "json", // response data type(서버에서 어떤 타입으로 받을지)
	contentType: 'application/json', //  default => application/x-www-form-urlencoded; charset=utf-8(request data type 어떤 데이터 타입으로 보낼지)
  beforeSend: ( xhr ) => {
    // ajax가 서버에 요청하기 전에 실행하는 로직
  },
	success: (json) => {
		// 통신 성공시 로직
	},
	error: (xhr, ajaxOptions, thrownError) => {
		// 통신 실패시 로직
	},
	complete: () => {
		// 성공, 실패와 상관없이 실행하고 싶은 로직(finally와 같은 기능을 수행한다.)
	}
});
```

<br/>

```
ex) 
ajax에 beforeSend와 complete를 로딩바 실행과 종료로 사용 할 수 있다.
beforeSend에서 로딩바를 실행시킨 후 complete에서 로딩바를 제거한다.
```