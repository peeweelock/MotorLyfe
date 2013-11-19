var l= Ti.UI.currentWindow;

var username=Titanium.UI.createTextField({
	top: '40%',
	verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
	width: '63%',
	height: '7%',
	hintText: 'Username'
});
l.add(username);

var password = Titanium.UI.createTextField({
	color:'black',
	top: '2.5%', 
	verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
	width: '63%',
	height: '7%',
	hintText:'Password',
	passwordMask:true
});
l.add(password);

var loginBtn = Titanium.UI.createButton({
title:'Login',
	backgroundColor: '#ffd800',
	color: 'black',
	top:'5%',
	width:'60%',
	height:'11.5%',
	borderRadius:10
});
l.add(loginBtn);

var Cloud=	require("ti.cloud");

loginBtn.addEventListener('click', function(){
Cloud.Users.login({
    login: username.value,
    password: password.value,
}, function (e) {
    if (e.success) {
        var user = e.users[0];
		var profileWin = Titanium.UI.createWindow({
   		url: 'profile.js',
   		layout: 'vertical'
   	});
   		l.close();
   		profileWin.open();
    } else {
        alert('Unable to log you in:' + e.message);
    }
    });
});