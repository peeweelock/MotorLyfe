

// main window
var win = Ti.UI.currentWindow;
// body view
var bview = Ti.UI.createView ({
	height: '90%',
	bottom: 0,
	backgroundColor: 'black',
});

// top half of body view
var view1 = Ti.UI.createView ({
	hieght: '18%',
	backgroundColor: 'white',
	borderWidth: 10,
	borderColor: '#cccccc',
});

// more adds
bview.add(view1);

win.add(bview);

win.open;
