var w=Titanium.UI.currentWindow;

var Cloud=	require("ti.cloud");



function uploadPhoto( _source, _callback) {
	var onSuccess = function(e){
		if(e.media){
   			Cloud.Photos.create({
      			photo: e.media,
      			collection_name: 'src'
   			}, function (e) {
      			if (e.success) {
          			var photo = e.photo[0];
          			alert('Success:\\n' +
              		'id: ' + photo.id + '\\n' +
              		'filename: ' + photo.filename);
      			} else {
          			alert('Error:\\n' +
              			((e.error && e.message) || JSON.stringify(e)));
      			}
    			_callback && _callback(e);
   
   			});
  		}
 	};
 	
 	switch(_source){
 		case "CAMERA":
  			Ti.Media.showCamera({
  				animated: true,
  				allowEditing: true,
  				autohide: true,
  				mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO],
  				success: onSuccess,
  				error: function(e){ alert('Error:\\n' +
             		((e.error && e.message) || JSON.stringify(e)));}
  			});
  			break;
 		case "GALLERY":
  			Ti.Media.openPhotoGallery({
  				animated: true,
  				allowEditing: true,
  				autohide: true,
  				mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO],
  				success: onSuccess,
  				error: function(e){ alert('Error:\\n' +
             		((e.error && e.message) || JSON.stringify(e)));}
  			});
  			break;
 		default:
	}
}

var entryv1=Ti.UI.createView({
	backgroundColor: '#cccccc',
	opacity: .5,
	height: '10%',
	top: 10,
	width: Ti.UI.FILL,
	borderRadius: 10
});
w.add(entryv1);

var entryTitle=Ti.UI.createLabel({
	color: 'black',
	font: {fontSize: 35, fontWeight: 'bold'},
	text: 'Create New Project',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
});
entryv1.add(entryTitle);

var entryv2=Ti.UI.createView({
	height: '20%',
	width: Ti.UI.FILL
});
w.add(entryv2);

var cameraUploadBtn=Ti.UI.createButton({
	id: 'camera',
	backgroundImage: 'camera.png',
	height: 100, width: 100,
	top: 10, left: 160,
	borderRadius: 10
});
entryv2.add(cameraUploadBtn);

cameraUploadBtn.addEventListener('click', function(e){
	uploadPhoto('CAMERA', function(e){
		alert("Picture Uploaded");
	});
});

var galleryUploadBtn=Ti.UI.createButton({
	id: 'gallery',
	backgroundImage: 'polaroid.png',
	height: 80, width: 80,
	top: 20, left: 70,
	borderRadius: 10
});
entryv2.add(galleryUploadBtn);

galleryUploadBtn.addEventListener('click', function(e){
	uploadPhoto('GALLERY', function(e){
		alert("Picture Uploaded");
	});
});

var entryv3=Ti.UI.createView({
	height: '70%',
	width: Ti.UI.FILL
});
w.add(entryv3);







