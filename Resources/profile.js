Titanium.UI.setBackgroundImage('default_bg.png');

var profile = Ti.UI.currentWindow;

var Cloud=	require("ti.cloud");

var v2 = Ti.UI.createView({
	backgroundColor: '#cccccc',
	height: '10%',
	top: 10,
	width: Ti.UI.FILL,
	borderRadius: 10
});

var v2name=Ti.UI.createLabel({
	text: 'Welcome to MotorLyfe',
	font: {fontSize: 40, fontWeight: 'bold'},
	color: 'black'
});

var v3= Ti.UI.createView({
	height: '15%',
	top: 10,
	width: Ti.UI.FILL,
	borderRadius: 10
});

var entryBtn= Ti.UI.createButton({
	title: 'Create New Project',
	width: 130, height: 80,
	left: 100,
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
   	url: 'entry.js'});
   var textfield = Ti.UI.createTextField();
   var dialog = Ti.UI.createAlertDialog({
    	title: 'Name Your Project',
    	androidView: textfield,
    	buttonNames: ['OK', 'Cancel']
});
dialog.addEventListener('click', function(e){
    Cloud.PhotoCollections.create({
    name: textfield.value
}, function (e) {
    if (e.success) {
        var collection = e.collections[0];
        alert('Project Name Saved');
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
});
   win2.open();
   dialog.show();
  });


var searchBtn= Ti.UI.createButton({
	backgroundColor: '#ffd800',
	width: 130, height: 80,
	left: 250,
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

var v4 = Ti.UI.createView({
	height: '75%',
	width: Ti.UI.FILL,
});


v3.add(searchBtn);
v3.add(entryBtn);
v2.add(v2name);
profile.add(v2);
profile.add(v3);
profile.add(v4);
