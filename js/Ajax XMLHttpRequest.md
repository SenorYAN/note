# Ajax XMLHttpRequest
```javascript
var xhr;
if (window.XMLHttpRequest){
	xhr = new XMLHttpRequest();
}else{
	xhr = new ActiveXObject("Mircosoft.XMLHTTP");
}

function callback(data){
	console.log(data)
}

xhr.onreadystatechange = function(callback){
	if(xhr.readyState == 4 && xhr.status == 200){
		console.log(JSON.parse(xmlHttp.responseText))
	}
}
```