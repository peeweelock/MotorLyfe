var w=Titanium.UI.currentWindow;

var entryv1=Ti.UI.createView({
	backgroundColor: '#cccccc',
	opacity: .5,
	height: '10%',
	top: 10,
	width: Ti.UI.FILL,
	borderRadius: 10
});

var entryTitle=Ti.UI.createLabel({
	color: 'black',
	font: {fontSize: 40, fontWeight: 'bold'},
	text: 'Capture A New Entry',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
});

var entryv2=Ti.UI.createView({
	backgroundColor: '#cccccc',
	height: '20%',
	top: 10,
	width: Ti.UI.FILL,
	borderRadius: 10
});

var entryBtn=Ti.UI.createButton({
	backgroundImage: 'car.png',
	width: 140, height: 140,
	left: 30
});
entryBtn.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
});

var entryName=Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	backgroundColor: '#cccccc',
	color: 'black',
 	width: 300, height: 60,
 	hintText: 'Name Your Project',
 	left: 200,
 	maxLength: 40
});

var entryv3=Ti.UI.createView({
	backgroundColor: '#cccccc',
	height: '15%',
	top: 10,
	width: Ti.UI.FILL,
	borderRadius: 10
});

var entryv4=Ti.UI.createView({
	backgroundColor: '#cccccc',
	height: '15%',
	top: 10,
	width: Ti.UI.FILL,
	borderRadius: 10
});

var entryv5=Ti.UI.createView({
	backgroundColor: '#cccccc',
	height: '15%',
	top: 10,
	width: Ti.UI.FILL,
	borderRadius: 10
});

var entryv6=Ti.UI.createView({
	backgroundColor: '#cccccc',
	height: '15%',
	top: 10,
	width: Ti.UI.FILL,
	borderRadius: 10
});

var entry1Btn=Ti.UI.createButton({
	backgroundImage: 'car.png',
	width: 80, height: 80,
	left: 30
});
entry1Btn.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
});
entryv3.add(entry1Btn);

var entry2Btn=Ti.UI.createButton({
	backgroundImage: 'car.png',
	width: 80, height: 80,
	left: 30
});
entry2Btn.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
});
entryv4.add(entry2Btn);


entryv2.add(entryName);
entryv2.add(entryBtn);
entryv1.add(entryTitle);
w.add(entryv1);
w.add(entryv2);
w.add(entryv3);
w.add(entryv4);
w.add(entryv5);
w.add(entryv6);
