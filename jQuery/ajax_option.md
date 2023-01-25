# ajax 여러가지 옵션을 알아보자!

```javascript
const obj = {};

$.ajax({
  url  : '/',
	type : "POST",
	data : obj,
	async: false, // 기본이 비동기(true)처리이고 동기(false)처리를 하려면 변경이 필요하다.
	dataType: "json",
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