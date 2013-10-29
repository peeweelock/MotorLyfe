Titanium.UI.setBackgroundColor('white');

var win = Ti.UI.currentWindow();
// main view
var overview = Ti.UI.createView({
	width: Ti.UI.FILL,
	height: Ti.UI.FILL,
	layout: 'vertical'
});
win.add(overview);
// Navbar
var navbar = Ti.UI.createView ({
	width: Ti.UI.FILL,
	height: '10%',
	borderColor: '#cccccc',
	borderWidth: 1
});
// Navbar label
var navlabel = Ti.UI.createLabel ({
	//color: '#5C5746',
	color: '#aaaaa0',
	text: 'profile',
	font: {fontSize:30, fontFamily:'Helvetica Neue'}
});

navbar.add(navlabel);

overview.add(navbar);


// button1 left yellow
var button1 = Titanium.UI.createButton ({
	left: '1%',
	height: '66%',
	width: '27%',
	backgroundColor: '#F4CF39',
	borderRadius: 7
});

//button1 label
var b1L = Ti.UI.createLabel ({
	color: '#5C5746',
	text: 'too',
	touchEnabled: false,
	left: 50,
	top: 'auto',
	bottom: 'auto',
	font: {fontSize:25, fontFamily:'Helvetica Neue'}
});

// button2 view---I dont remember why i thought i was nessecary to add the button to its own personal view something qbout sacling
//var b2V = Ti.UI.createView ({
	//right: '1%',
	//height: '66%',
	//width: '27%',
	//borderWdith: 1,
	//borderColor: '#5C5746',
	//borderRadius: 7
//});

// button2 right yellow
var button2 = Titanium.UI.createButton ({
	right: '1%',
	height: '66%',
	width: '27%',
	backgroundColor: '#F4CF39',
	borderRadius: 7
});
//button2 label  VVV not my work VVV  (i dont know why i cant add labels to buttons.....)
 var b2L = Titanium.UI.createLabel({
	color: '#5C5746',
	text: 'cool',
	touchEnabled: false,
	right: 50,
	top: 'auto',
	bottom: 'auto',
	font: {fontSize:25, fontFamily:'Helvetica Neue'}
});

// event listeners for button 1 & 2
button1.addEventListener('click', function(e){
	var bodylayout = Ti.UI.createWindow({
		url: 'bodylayout.js',
	});
	bodylayout.open();
});

button2.addEventListener('click', function(e){
	alert('double horay!');
});

//more adds
navbar.add(button1);

navbar.add(button2);

navbar.add(b1L);
 
navbar.add(b2L);

win.open();