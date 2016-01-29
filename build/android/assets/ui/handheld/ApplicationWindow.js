//Application Window Component Constructor
function ApplicationWindow() {
	
	var self = Ti.UI.createWindow({
		backgroundColor: '#ffffff'
	});
	var button =Ti.UI.createButton({
		title: 'Change BackgroundColor',
		width: 100,
		heigth: 50,
	});
	button.addEventListener('click', function (){ 
		var change = self.setBackgroundColor('#FF0000') 
	});
	self.add(button);
	return self;
}
//make constructor function the public component interface
module.exports = ApplicationWindow;