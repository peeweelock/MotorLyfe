var mainWin = Ti.UI.createWindow({
	backgroundImage: 'default_bg.png',
	layout: 'vertical'
});

var banner = Ti.UI.createView({
	height: '10%',
	width: Ti.UI.FILL,
});
mainWin.add(banner);

var bannerLabel=Ti.UI.createLabel({
	text: 'Welcome to MotorLyfe!',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font: {fontSize: '27sp', fontWeigh: 'bold'}
});
banner.add(bannerLabel);

var bodyView=Ti.UI.createView({
	height: '90%',
	width: Ti.UI.FILL,
});
mainWin.add(bodyView);

var regBtn= Ti.UI.createButton({
	backgroundColor: '#ffd800',
	width: '60%', height: '12.5%',
	top: '20%',
	left: '20%',
	title: 'Register',
	color: 'black',
	borderRadius: 10
});
regBtn.addEventListener('click',function(e)
{
   var winReg = Titanium.UI.createWindow({
   	backgroundImage: 'default_bg.png',
   	layout: 'vertical',
   	url: 'registration.js'
   });
   mainWin.close();
   winReg.open();
});

var loginBtn= Ti.UI.createButton({
	backgroundColor: '#ffd800',
	width: '60%',
	height: '12.5%',
	top: '35%',
	left: '20%',
	title: 'Login',
	color: 'black',
	borderRadius: 10
});
loginBtn.addEventListener('click',function(e)
{
   var winLogin = Titanium.UI.createWindow({
   	backgroundImage: 'default_bg.png',
   	layout: 'vertical',
   	url: 'login.js'
   });
   mainWin.close();
   winLogin.open();
});

bodyView.add(loginBtn);
bodyView.add(regBtn);
mainWin.open();
