Titanium.UI.setBackgroundImage('default_bg.png');

var profile = Ti.UI.currentWindow;

var v1 = Ti.UI.createView({
	height: '12%',
	width: Ti.UI.FILL,
	borderRadius: 10
});

var searchBtn= Ti.UI.createButton({
	backgroundColor: '#ffd800',
	width: '27%', height: '60%',
	left: '65%',
	title: 'Search MotorLyfe',
	color: 'black',
	borderRadius: 10
});
searchBtn.addEventListener('click',function(e)
{
   var win3 = Titanium.UI.createWindow({
   	backgroundColor: 'black',
   	layout: 'vertical',
   	title: 'Search MotorLyfe For...',
   	url: 'search.js'
   });
   win3.open();
});

var v2 = Ti.UI.createView({
	backgroundColor: '#cccccc',
	height: '10%',
	top: 10,
	width: Ti.UI.FILL,
	borderRadius: 10
});

var v2name=Ti.UI.createLabel({
	text: 'Welcome to MotorLyfe',
	font: {fontSize: '27sp', fontWeight: 'bold'},
	color: 'black'
});

var v3= Ti.UI.createView({
	height: '15%',
	width: Ti.UI.FILL,
	borderRadius: 10
});

var entryBtn= Ti.UI.createButton({
	title: 'Create New Project',
	width: '26%', height: '70%',
	left: '4.347%',
	backgroundColor: '#ffd800',
	color: 'black',
	borderRadius: 10
});
entryBtn.addEventListener('click',function(e)
{
   var win2 = Titanium.UI.createWindow({
   	backgroundImage: 'default_bg.png',
   	layout: 'vertical',
   	title: 'Create A New Entry',
   	url: 'entry.js'
   });
   win2.open();
});

var updateEntryBtn= Ti.UI.createButton({
	title: 'Update Existing Project',
	width: '26%', height: '70%',
	left: '37.347%',
	backgroundColor: '#ffd800',
	color: 'black',
	borderRadius: 10
});
updateEntryBtn.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
});

var updatePicBtn= Ti.UI.createButton({
	title: 'Update Picture',
	width: '26%', height: '70%',
	left: '70.347%',
	backgroundColor: '#ffd800',
	color: 'black',
	borderRadius: 10
});
updatePicBtn.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
});

v3.add(updatePicBtn);
v3.add(updateEntryBtn);
v3.add(entryBtn);
v2.add(v2name);
v1.add(searchBtn);
profile.add(v1);
profile.add(v2);
profile.add(v3);
