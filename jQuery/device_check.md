# device를 체크해보자!

```javascript
function deviceCheck(data) {
	// 디바이스 체크
	if (is.desktop()) {
		data["device"] = "pc";
		if (is.windows()) {
			data["device_os"] = "windows";
		} else if (is.linux()) {
			data["device_os"] = "linux";
		} else if (is.mac()) {
			data["device_os"] = "mac";
		} else {
			data["device_os"] = "UnknownOS";
		}
	} else {
		// is.mobile()
		data["device"] = "mobile";
		if (is.ios()) {
			data["device_os"] = "ios";
		} else if (is.blackberry()) {
			data["device_os"] = "blackberry";
		} else if (is.android()) {
			data["device_os"] = "android";
		} else {
			data["device_os"] = "UnknownOS";
		}
	}
}
```