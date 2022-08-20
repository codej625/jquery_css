## jQuery cookie cdn

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>
```


## cookie set

```javascript
$.cookie('key', 'value');
or
쿠키 만료일 지정
$.cookie('key', 'value', {expires: 값});
```


## cookie delete
#### 특정도메인이 있는 쿠키의 값인 경우 도메인을 명시해주지 않으면 제대로 삭제되지 않는다. 
#### expires기간을 오늘 이전 날짜로 셋팅해주면 자동으로 지워진다.
#### 쿠키 설정시 domain과 path를 설정했을 경우 삭제시에도 동일하게 옵션으로 전달해야 삭제가능

```javascript
$.cookie('key', '', {domain : "test.com", expires: new Date(2016, 10, 29, 11, 00, 00)});
or
$.removeCookie('key', {path: '/',domain: 'test.com'});
```
