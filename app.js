var win = Ti.UI.createWindow({
	backgroundColor: 'black',
	layout: 'vertical'
});

var v1 = Ti.UI.createView({
	backgroundColor: '#cccccc',
	opacity: .5,
	height: '10%',
	top: 10,
	width: Ti.UI.FILL,
	borderRadius: 10
});

var search = Titanium.UI.createSearchBar({
    barColor:'#000', 
    showCancel:false,
    height:60,
    hintText: 'Search MotorLyfe for...',
    width:240,
    right: 20,
    font: {fontSize: 20}
});

var v2 = Ti.UI.createView({
	backgroundColor: '#cccccc',
	height: '20%',
	top: 10,
	width: Ti.UI.FILL,
	borderRadius: 10
});

var t1Name= Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	backgroundColor: '#cccccc',
	color: 'black',
 	width: 250, height: 60,
 	hintText: 'Enter Your Name',
 	left: 200,
 	maxLength: 30
});

var picBtn= Ti.UI.createButton({
	backgroundImage: 'User.png',
	width: 140, height: 140,
	left: 30
});
picBtn.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
});

var v3= Ti.UI.createView({
	backgroundColor: '#cccccc',
	height: '15%',
	top: 10,
	width: Ti.UI.FILL,
	borderRadius: 10
});

var entryBtn= Ti.UI.createButton({
	title: 'Capture New Entry',
	width: 130, height: 100,
	left: 30,
	backgroundColor: 'black',
	color: '#cccccc',
	borderRadius: 10
});
entryBtn.addEventListener('click',function(e)
{
   var win2 = Titanium.UI.createWindow({
   	backgroundColor: 'black',
   	layout: 'vertical',
   	title: 'Create A New Entry',
   	url: 'entry.js'
   });
   win2.open();
});

var updateEntryBtn= Ti.UI.createButton({
	title: 'Update Entry',
	width: 130, height: 100,
	left: 170,
	backgroundColor: 'black',
	color: '#cccccc',
	borderRadius: 10
});
updateEntryBtn.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
});

var updatePicBtn= Ti.UI.createButton({
	title: 'Update Picture',
	width: 130, height: 100,
	left: 310,
	backgroundColor: 'black',
	color: '#cccccc',
	borderRadius: 10
});
updatePicBtn.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
});

v3.add(updatePicBtn);
v3.add(updateEntryBtn);
v3.add(entryBtn);
v1.add(search);
v2.add(picBtn);
v2.add(t1Name);
win.add(v1);
win.add(v2);
win.add(v3);
win.open({fullscreen:true});


