var apn = require('apn');

var options = { 
		gateway : "gateway.sandbox.push.apple.com", 
		cert: './keys/cert.pem',
		key: './keys/key.pem'	
	};
	
var apnConnection = new apn.Connection(options);


var token = '아이폰 디바이스 토큰';
var myDevice = new apn.Device(token);

var note = new apn.Notification();
note.badge = 3;
note.alert = 'saltfactory 푸시 테스트';
note.payload = {'message': '안녕하세요'};

apnConnection.pushNotification(note, myDevice);