const botBuilder = require('claudia-bot-builder');

module.exports=botBuilder(function (message){
	
	console.log('got text ',message.text);
	console.log('full request ',JSON.stringify(message.originalRequest));
	
	return 'Hi user'+message.text;
	
});